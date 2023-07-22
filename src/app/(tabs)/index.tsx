import { FlatList, StyleSheet } from 'react-native'
import { View } from '@/src/components/Themed'
import PostListItem from '@/src/components/PostListItem'

import posts from '@/src/data/posts.json'

export default function TabOneScreen() {
	return (
		<View style={styles.container}>
			<FlatList
				data={posts}
				renderItem={({ item }) => <PostListItem post={item} />}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
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
})
// 1:22:14
