import {CommentType, PostType, usersApi, UserType} from '../../f3-api/usersApi';
import {AppThunk} from '../store';
import {errorHandler} from '../../f1-ui/f4-utils/errorHandler/errorHandler';

enum EnumSomeReducerActionType {
    setUsers = 'USERS/SET-USERS',
    setUserPosts = 'USERS/SET-USER-POSTS',
    setPostComments = 'USERS/SEt-POST-COMMENTS',
}

const initialState = {
    users: [] as UserType[],
    posts: [] as PostType[],
    comments: [] as CommentType[]
}

export const usersReducer = (state: InitialStateType = initialState, action: UsersReducerActionType): InitialStateType => {
    switch (action.type) {
        // return {...state, users: [...action.payload]}
        case EnumSomeReducerActionType.setUsers:
        case EnumSomeReducerActionType.setUserPosts:
        case EnumSomeReducerActionType.setPostComments:
            return {...state, ...action.payload}
        default:
            return state
    }
}

//action

const setUsersAC = (users: UserType[]) => {
    return {
        type: EnumSomeReducerActionType.setUsers,
        payload: {users},
    } as const
}
const setUserPostsAC = (posts: PostType[]) => {
    return {
        type: EnumSomeReducerActionType.setUserPosts,
        payload: {posts}
    } as const
}
const setPostCommentsAC = (comments: CommentType[]) => {
    return {
        type: EnumSomeReducerActionType.setPostComments,
        payload: {comments}
    } as const
}


//thunk

export const setUsersTC = (): AppThunk => async dispatch => {
    try {
        const res = await usersApi.getUsers()
        dispatch(setUsersAC(res))
    } catch (e: any) {
        errorHandler(e)
    }
}

export const setUserPostTC = (userId: number): AppThunk => async dispatch => {
    try {
        const res = await usersApi.getUserPosts(userId)
        dispatch(setUserPostsAC(res))
    } catch (e: any) {
        errorHandler(e)
    }
}

export const setPostCommentsTC = (postId: number): AppThunk => async dispatch => {
    try {
        const res = await usersApi.getCommentsForPost(postId)
        dispatch(setPostCommentsAC(res))
    } catch (e: any) {
        errorHandler(e)
    }
}


//type

type InitialStateType = typeof initialState
export type UsersReducerActionType =
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setUserPostsAC>
    | ReturnType<typeof setPostCommentsAC>