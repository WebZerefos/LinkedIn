import { FlatList, StyleSheet } from 'react-native'
import PostListItem from '@/src/components/PostListItem'

import posts from '@/src/data/posts.json'

export default function HomeScreen() {
	return (
		<FlatList
			data={posts}
			renderItem={({ item }) => <PostListItem post={item} />}
			showsVerticalScrollIndicator={false}
			contentContainerStyle={{ gap: 10 }}
		/>
	)
}

const styles = StyleSheet.create({})
// 1:22:14
