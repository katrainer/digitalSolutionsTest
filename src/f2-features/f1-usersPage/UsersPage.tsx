import {useAppSelector} from '../../f1-main/f2-store/store';
import {UserType} from '../../f1-main/f3-api/usersApi';
import {User} from './f1-user/User';
import s from './UsersPage.module.scss'

export const UsersPage = () => {

    const users = useAppSelector<UserType[]>(state => state.users.users)

    return <div className={s.mainContainer}>
        {users.map(u => <User key={u.id} name={u.name} userId={u.id}/>)}
    </div>
}