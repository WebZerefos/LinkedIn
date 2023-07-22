import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import posts from '@/src/data/posts.json'
import PostListItem from '@/src/components/PostListItem'
import { useLocalSearchParams } from 'expo-router'

const PostDetailsScreen = () => {
	const { id } = useLocalSearchParams()
	const post = posts.find((post) => post.id === id)

	if (!post) {
		return <Text>Post Not Found</Text>
	}
	return (
		<ScrollView>
			<PostListItem post={post} />
		</ScrollView>
	)
}

export default PostDetailsScreen
