import {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import {PostType} from '../../../f3-api/usersApi';
import s from './PostsPreview.module.scss';

type PostsPreviewPropsType = {
    post: PostType
}

export const PostPreview: FC<PostsPreviewPropsType> = ({post}) => {
    const navigate = useNavigate()
    const linkToPostHandler = (postId: number, userId: number) => {
        navigate(`/user/${userId}/post/${postId}`)
    }
    return <div
        onClick={() => linkToPostHandler(post.id, post.userId)}
        className={s.postContainer}
    >
        <div className={s.title}>{post.title}</div>
        <div className={s.text}>{post.body}</div>
    </div>
}