import {FC} from 'react';
import {UserType} from '../../../f1-main/f3-api/usersApi';
import s from './TableInfo.module.scss';

type TableInfoPropsType = {user: UserType}

export const TableInfo: FC<TableInfoPropsType> = ({user}) => <div className={s.mainContainer}>
    <div className={s.nameContainer}>
        <div className={s.table}></div>
        <div className={s.name}><span>{user.username}</span></div>
        <div className={s.table}></div>
    </div>
    <div className={s.mainUserInfoContainer}>
        <div className={s.table}></div>
        <div className={s.userInfoContainer}>
            <div className={s.name}><span>{user.name}</span></div>
            <div className={s.name}><span>{user.email}</span></div>
            <div className={s.name}><span>{user.phone}</span></div>
            <div className={s.name}><span>{user.website}</span></div>
            <div className={s.name}><span>{user.company.name}</span></div>
            <div className={s.name}><span>{user.company.bs}</span></div>
        </div>
        <div className={s.table}></div>
    </div>
</div>
