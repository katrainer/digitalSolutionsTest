import {FC} from 'react'
import {Link} from 'react-router-dom';
import s from './MyLink.module.scss'

type MyLinkPropsType = {
    to: string
    title: string
}

export const MyLink: FC<MyLinkPropsType> =
    ({to, title}) => <div className={s.mainContainer}>
        <Link to={to}>
            {title}
        </Link>
    </div>