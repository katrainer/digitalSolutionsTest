import {useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../f1-main/f2-store/store';
import {PostType, UserType} from '../../f1-main/f3-api/usersApi';
import s from './UserPage.module.scss'
import {TableInfo} from './f1-tableInfo/TableInfo';
import {useEffect, useMemo} from 'react';
import {setUserPostTC} from '../../f1-main/f2-store/f1-reducers/usersReducer';
import {PostPreview} from '../../f1-main/f1-ui/f2-common/f4-postPreview/PostsPreview';
import {MyLink} from '../../f1-main/f1-ui/f2-common/f2-myLink/MyLink';

export const UserPage = () => {

    const dispatch = useAppDispatch()

    const {userId} = useParams()

    const users = useAppSelector<UserType[]>(state => state.users.users)
    const user: UserType = users.find(u => u.id === Number(userId))!

    const allUserPost = useAppSelector<PostType[]>(state => state.users.posts)
    const posts = allUserPost.slice(0, 3)


    useEffect(() => {
        if (user) {
            dispatch(setUserPostTC(user.id))
        }
    }, [user])

    if (!user) return <div></div>
    return <div className={s.mainContainer}>
        <TableInfo user={user}/>
        <div className={s.postsPreviewContainer}>
            <span className={s.title}>Посты</span>
            <div className={s.postsContainer}>
                {posts.map(p => <PostPreview post={p} key={p.id}/>)}
            </div>
            <MyLink to={`/user/${user.id}/posts`} title={'Смотреть Все'}/>
        </div>
    </div>
}