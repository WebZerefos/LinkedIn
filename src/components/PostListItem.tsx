import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { Post } from '../types'
import { Link } from 'expo-router'

type PostListItemProps = {
	post: Post
}
type FooterButtonProps = {
	text: string
	icon: React.ComponentProps<typeof FontAwesome>['name']
}

const FooterButton = ({ text, icon }: FooterButtonProps) => {
	return (
		<View style={styles.iconTextContainer}>
			<FontAwesome
				name={icon}
				size={16}
				color='gray'
			/>
			<Text>{text}</Text>
		</View>
	)
}

const PostListItem = ({ post }: PostListItemProps) => {
	return (
		<Link
			href={`/posts/${post.id}`}
			asChild
		>
			<Pressable style={styles.container}>
				{/* Header */}
				<View style={styles.header}>
					<Image
						source={{ uri: post.author.image }}
						style={styles.userImage}
					/>
					<View>
						<Text style={styles.userName}>{post.author.name}</Text>
						<Text>{post.author.position}</Text>
					</View>
				</View>
				{/* post content */}
				<Text style={styles.postContent}>{post.content}</Text>
				{/* post image */}
				{post.image && (
					<Image
						source={{ uri: post.image }}
						style={styles.postImage}
					/>
				)}

				{/* footer */}
				<View style={styles.footerContainer}>
					<FooterButton
						text='Like'
						icon='thumbs-o-up'
					/>
					<FooterButton
						text='Comment'
						icon='comment-o'
					/>
					<FooterButton
						text='share'
						icon='share'
					/>
				</View>
			</Pressable>
		</Link>
	)
}

export default PostListItem

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#ffffff',
		width: '100%',
		maxWidth: 500,
		alignSelf: 'center',
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		marginHorizontal: 10,
	},
	postContent: {
		margin: 10,
	},
	userImage: {
		width: 60,
		height: 60,
		borderRadius: 100,
		marginRight: 10,
	},
	userName: {
		fontWeight: 'bold',
		fontSize: 16,
		marginBottom: 5,
	},
	postImage: {
		aspectRatio: 1,
	},
	footerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		padding: 15,
		borderTopWidth: 0.6,
		borderColor: 'lightgrey',
	},
	iconTextContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 5,
	},
	text: {
		fontWeight: '600',
		color: 'gray',
		fontSize: 16,
	},
})
