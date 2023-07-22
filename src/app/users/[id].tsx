import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import userJson from '@/src/data/user.json'
import ExperienceItem from '@/src/components/ExperienceItem'
import { User } from '@/src/types'

const UserProfile = () => {
	const [user, setUser] = useState<User>(userJson)
	// const { id } = useLocalSearchParams()
	const navigation = useNavigation()

	useLayoutEffect(() => {
		navigation.setOptions({ title: user.name })
	}, [user?.name])

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			{/* header */}
			<View style={styles.headerContainer}>
				<Image
					source={{ uri: user.backImage }}
					style={styles.backImage}
				/>
				<View style={styles.userInfo}>
					<Image
						source={{ uri: user.image }}
						style={styles.userImage}
					/>
					<Text style={styles.userName}>{user.name}</Text>
					<Text style={styles.userPosition}>{user.position}</Text>
				</View>
				<Pressable style={styles.button}>
					<Text style={styles.buttonText}>Connect</Text>
				</Pressable>
			</View>

			{/* about */}
			<View style={styles.aboutContainer}>
				<View style={styles.aboutContent}>
					<Text style={styles.title}>About</Text>
					<Text style={styles.text}>{user.about}</Text>
				</View>
			</View>

			{/* experience */}
			<View style={styles.experienceContainer}>
				<View style={styles.aboutContent}>
					<Text style={styles.title}>Experience</Text>
					{user.experience?.map((experience) => (
						<ExperienceItem
							experience={experience}
							key={experience.id}
						/>
					))}
				</View>
			</View>
		</ScrollView>
	)
}

export default UserProfile

const styles = StyleSheet.create({
	headerContainer: {
		backgroundColor: '#ffffff',
	},
	userInfo: {
		marginHorizontal: 10,
	},
	backImage: {
		width: '100%',
		aspectRatio: 5 / 2,
	},
	userImage: {
		width: 100,
		aspectRatio: 1,
		marginTop: -50,
		borderWidth: 5,
		borderRadius: 100,
		borderColor: '#ffffff',
	},
	userName: {
		fontSize: 24,
		fontWeight: 'bold',
		marginTop: 15,
	},
	userPosition: {
		color: 'gray',
		fontWeight: '500',
	},
	button: {
		padding: 10,
		backgroundColor: 'rgb(59 130 246)',
		marginHorizontal: 10,
		borderRadius: 100,
		marginVertical: 15,
		alignItems: 'center',
	},
	buttonText: {
		color: '#ffffff',
		fontWeight: 'bold',
		fontSize: 20,
	},
	aboutContainer: {
		backgroundColor: '#ffffff',
		marginTop: 20,
	},
	aboutContent: {
		marginHorizontal: 10,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginTop: 15,
	},
	text: {
		fontSize: 16,
		marginBottom: 15,
		textAlign: 'justify',
		lineHeight: 22,
	},
	experienceContainer: {
		backgroundColor: '#ffffff',
		marginTop: 20,
	},
})
