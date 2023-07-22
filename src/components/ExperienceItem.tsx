import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Experience } from '../types'

type ExperienceItemProps = {
	experience: Experience
}

const ExperienceItem = ({ experience }: ExperienceItemProps) => {
	return (
		<View style={styles.experienceContainer}>
			<Image
				source={{ uri: experience.companyImage }}
				style={styles.companyImage}
			/>
			<View style={styles.experienceText}>
				<Text style={styles.title}>{experience.title}</Text>
				<Text style={styles.companyName}>{experience.companyName}</Text>
			</View>
		</View>
	)
}

export default ExperienceItem

const styles = StyleSheet.create({
	experienceContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: 'lightgrey',
		marginBottom: 10,
		paddingBottom: 10,
	},
	experienceText: {
		gap: 3,
		marginLeft: 15,
	},
	companyImage: {
		marginVertical: 20,
		width: 50,
		aspectRatio: 1,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
	},
	companyName: {
		fontSize: 16,
	},
})
