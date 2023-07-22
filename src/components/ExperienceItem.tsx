import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ExperienceItem = ({ experience }) => {
	return (
		<View>
			<Image
				source={{ uri: experience.companyImage }}
				style={{ width: 100, height: 100 }}
			/>
			<Text>{experience.title}</Text>
		</View>
	)
}

export default ExperienceItem

const styles = StyleSheet.create({})
