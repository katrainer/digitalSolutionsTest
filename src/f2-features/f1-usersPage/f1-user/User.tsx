import {FC} from 'react'
import {MyLink} from '../../../f1-main/f1-ui/f2-common/f2-myLink/MyLink'
import s from './User.module.scss'

type UserPropsType = {
    name: string
    userId: number
}
export const User: FC<UserPropsType> = ({name, userId}) => <div className={s.mainContainer}>
    <span className={s.title}>{name}</span>
    <MyLink title={'Смотреть Профиль'} to={`/user/${userId}`}/>
</div>