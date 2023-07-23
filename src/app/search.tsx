import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import users from '@/src/data/users.json'
import UserListItem from '../components/UserListItem'
import { useNavigation } from 'expo-router'

const search = () => {
	const [search, setSearch] = useState()
	const navigation = useNavigation()

	console.log(search)

	useLayoutEffect(() => {
		navigation.setOptions({
			headerSearchBarOptions: {
				placeholder: 'Search for users',
				onChangeText: (e: any) => setSearch(e.nativeEvent.text),
			},
		})
	}, [navigation])

	return (
		<FlatList
			data={users}
			renderItem={({ item }) => <UserListItem user={item} />}
			contentContainerStyle={{ gap: 5 }}
		/>
	)
}

export default search

const styles = StyleSheet.create({})
