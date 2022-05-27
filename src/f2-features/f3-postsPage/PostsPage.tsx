import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {setUserPostTC} from '../../f1-main/f2-store/f1-reducers/usersReducer';
import {useAppDispatch, useAppSelector} from '../../f1-main/f2-store/store';
import {PostType} from '../../f1-main/f3-api/usersApi';
import {PostPreview} from '../../f1-main/f1-ui/f2-common/f4-postPreview/PostsPreview';
import s from './PostsPage.module.scss'

export const PostsPage = () => {

    const {userId} = useParams()

    const dispatch = useAppDispatch()

    const allUserPost = useAppSelector<PostType[]>(state => state.users.posts)

    useEffect(() => {

        if (userId) {
            dispatch(setUserPostTC(Number(userId)))
        }
    }, [])

    return <div className={s.mainContainer}>
        {allUserPost.map(p => <PostPreview post={p} key={p.id}/>)}
    </div>
}