import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { User } from '../types'
type UserListItemProps = {
	user: User
}

const UserListItem = ({ user }: UserListItemProps) => {
	return (
		<View style={styles.container}>
			<Link
				href={`/users/${user.id}`}
				asChild
			>
				<Pressable style={styles.header}>
					<Image
						source={{ uri: user.image }}
						style={styles.userImage}
					/>
					<View>
						<Text style={styles.userName}>{user.name}</Text>
						<Text>{user.position}</Text>
					</View>
				</Pressable>
			</Link>
		</View>
	)
}

export default UserListItem

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
})
