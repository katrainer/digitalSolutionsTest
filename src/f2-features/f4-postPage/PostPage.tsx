import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../f1-main/f2-store/store';
import {setPostCommentsTC, setUserPostTC} from '../../f1-main/f2-store/f1-reducers/usersReducer';
import {CommentType, PostType} from '../../f1-main/f3-api/usersApi';

export const PostPage = () => {

    const {userId, postId} = useParams()
    const dispatch = useAppDispatch()

    const posts = useAppSelector<PostType[]>(state => state.users.posts)
    const comments = useAppSelector<CommentType[]>(state => state.users.comments)

    console.log(posts)
    console.log(comments)

    useEffect(() => {
        dispatch(setUserPostTC(Number(userId)))
        dispatch(setPostCommentsTC(Number(postId)))
    }, [])


    return <div>

    </div>
}