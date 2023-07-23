import { Image, Pressable, StyleSheet, TextInput } from 'react-native'
import { Text, View } from '@/src/components/Themed'
import { useNavigation, useRouter } from 'expo-router'
import { useLayoutEffect, useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
import { FontAwesome } from '@expo/vector-icons'

export default function NewPostScreen() {
	const [inputContent, setInputContent] = useState('')
	const [image, setImage] = useState<string | null>(null)
	const navigation = useNavigation()
	const router = useRouter()

	const onPost = () => {
		console.log('Pressed', inputContent)
		setInputContent('')
		router.push('/(tabs)')
	}

	const pickImage = async () => {
		// No permissions request is necessary for launching the image library
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			// aspect: [4, 3],
			quality: 1,
		})

		if (!result.canceled) {
			setImage(result.assets[0].uri)
		}
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

			{image && (
				<Image
					source={{ uri: image }}
					style={styles.image}
				/>
			)}
			<View style={styles.footerButtons}>
				<Pressable
					onPress={pickImage}
					style={styles.icon}
				>
					<FontAwesome
						name='image'
						size={24}
						color='black'
					/>
				</Pressable>
				<View style={styles.icon}>
					<FontAwesome
						name='camera'
						size={24}
						color='black'
					/>
				</View>
				<View style={styles.icon}>
					<FontAwesome
						name='dot-circle-o'
						size={24}
						color='black'
					/>
				</View>
			</View>
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
	image: {
		width: '100%',
		aspectRatio: 1,
		marginTop: 'auto',
	},
	footerButtons: {
		marginTop: 'auto',
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	icon: {
		backgroundColor: 'gainsboro',
		padding: 20,
		borderRadius: 100,
	},
})
