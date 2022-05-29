import s from './Modal.module.scss'
import {FC, MouseEvent, ReactNode} from 'react';


export type PropsType = {
    editMode: boolean
    setEditMode: (editMode: boolean) => void
    children: ReactNode
}
export const Modal: FC<PropsType> = ({editMode, setEditMode, children}) => {

    return (
        <div className={editMode ? `${s.modal} ${s.active}` : s.modal} onClick={() => setEditMode(false)}>
            <div className={editMode ? `${s.modal__content} ${s.active}` : s.modal__content}
                 onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}