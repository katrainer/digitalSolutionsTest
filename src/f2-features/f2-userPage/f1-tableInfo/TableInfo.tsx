import {FC, memo} from 'react';
import {UserType} from '../../../f1-main/f3-api/usersApi';
import s from './TableInfo.module.scss';

type TableInfoPropsType = { user: UserType }

export const TableInfo: FC<TableInfoPropsType> = memo(({user}) => <div className={s.mainContainer}>
        <span className={s.name}>{user.username}</span>
        <div className={s.userInfoContainer}>
            <span>Имя: {user.name}</span>
            <span>E-mail: {user.email}</span>
            <span>Тел.: {user.phone}</span>
            <span>Сайт: {user.website}</span>
            <span>Компания: {user.company.name}</span>
            <span>Компания (bs): {user.company.bs}</span>
        </div>
    </div>
)
