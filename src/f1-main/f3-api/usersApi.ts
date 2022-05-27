import {instance} from './f1-apiConfig/apiConfig';

export const usersApi = {
    getUsers() {
        return instance.get<UserType[]>('users').then(res => res.data)
    },
    getUserPosts(userId: number) {
        return instance.get<PostType[]>(`users/${userId}/posts`).then(res => res.data)
    },
    getCommentsForPost(postId: number) {
        return instance.get<CommentType[]>(`posts/${postId}/comments`).then(res => res.data)
    },
    addComment(data: AddCommentDatatype) {
       return  instance.post('/posts/1/comments',{...data}).then(res => res.data)
    }
}

//type
export type UserType = {
    id: number
    name: string
    username: string
    email: string
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: {
            lat: string
            lng: string
        }
    }
    phone: string
    website: string
    company: {
        name: string
        catchPhrase: string
        bs: string
    }
}

export type PostType = {
    userId: number
    id: number
    title: string
    body: string
}

export type CommentType = {
    postId: number
    id: number
    name: string
    email: string
    body: string
}

export type AddCommentDatatype= {
    postId: number
    name: string
    email: string
    body: string
}
