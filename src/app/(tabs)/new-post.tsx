import { Pressable, StyleSheet, TextInput } from 'react-native'
import { Text, View } from '@/src/components/Themed'
import { useNavigation, useRouter } from 'expo-router'
import { useLayoutEffect, useState } from 'react'

export default function NewPostScreen() {
	const [inputContent, setInputContent] = useState('')
	const navigation = useNavigation()
	const router = useRouter()

	const onPost = () => {
		console.log('Pressed', inputContent)
		setInputContent('')
		router.push('/(tabs)')
	}

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<Pressable
					onPress={onPost}
					style={styles.postButton}
				>
					<Text style={styles.postButtonText}>Publish</Text>
				</Pressable>
			),
		})
	}, [onPost])

	return (
		<View style={styles.container}>
			<TextInput
				placeholder='What do you want to talk about?'
				multiline
				value={inputContent}
				onChangeText={setInputContent}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 15,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
	postButton: {
		marginRight: 10,
		backgroundColor: 'rgb(59 130 246)',
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderRadius: 50,
	},
	postButtonText: {
		color: 'white',
		fontWeight: 'bold',
	},
})
