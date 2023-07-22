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
	backImage?: string
	about?: string
	experience?: Experience[]
}

export type Experience = {
	id: string
	title: string
	companyName: string
	companyImage?: string
}
