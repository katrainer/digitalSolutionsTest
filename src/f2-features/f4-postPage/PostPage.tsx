import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../f1-main/f2-store/store';
import {setPostCommentsTC, setUserPostTC} from '../../f1-main/f2-store/f1-reducers/usersReducer';
import {CommentType, PostType} from '../../f1-main/f3-api/usersApi';
import s from './PostPage.module.scss'
import {MyButton} from '../../f1-main/f1-ui/f2-common/f3-myButton/MyButton';
import {Modal} from '../../f1-main/f1-ui/f2-common/f5-modal/Modal';
import {Form} from './f1-form/Form';

export const PostPage = () => {

    const [isModal, setIsModal] = useState(false)

    const {userId, postId} = useParams()
    const dispatch = useAppDispatch()

    const posts = useAppSelector<PostType[]>(state => state.users.posts)
    const comments = useAppSelector<CommentType[]>(state => state.users.comments)

    const post = posts.find(p => p.id === +postId!)

    const isModeHandler = () => setIsModal(!isModal)

    useEffect(() => {
        dispatch(setUserPostTC(Number(userId)))
        dispatch(setPostCommentsTC(Number(postId)))
    }, [])

    if (!post) return <div></div>
    return <div className={s.mainContainer}>
        <div className={s.postContainer}>
            <span className={s.postTitle}>{post.title}</span>
            <span className={s.postBody}>{post.body}</span>
        </div>
        <div className={s.commentsContainer}>
            <span className={s.title}>Комментарии</span>
            {comments.map(c => <div key={c.id} className={s.commentContainer}>
                <span className={s.commentTitle}>{`Name:  ${c.name}, e-mail: ${c.email}`}</span>
                <span className={s.commentBody}>{c.body}</span>
            </div>)}
        </div>
        <MyButton onClick={isModeHandler}>Добавить Комментарий</MyButton>
        <Modal editMode={isModal} setEditMode={setIsModal}>
            <Form setIsModal={setIsModal} postId={Number(postId)}/>
        </Modal>
    </div>
}