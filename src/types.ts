export type Post = {
	id: string
	image?: string
	// comments?: [string]
	content: string
	likes: number
	author: User
}

export type User = {
	id: string
	name: string
	image?: string
	position: string
}
