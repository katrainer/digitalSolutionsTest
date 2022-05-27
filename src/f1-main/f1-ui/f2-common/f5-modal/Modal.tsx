import s from './Modal.module.scss'
import {FC, MouseEvent, ReactNode} from 'react';


export type PropsType = {
    editMode: boolean
    setEditMode: (editMode: boolean) => void
    children: ReactNode
}
export const Modal: FC<PropsType> = ({editMode, setEditMode, children}) => {

    const setEditModeHandler = (e: MouseEvent) => {
        if (e.currentTarget) setEditMode(false)
    }

    return (
        <div className={editMode ? `${s.modal} ${s.active}` : s.modal} onClick={e => setEditModeHandler(e)}>
            <div className={editMode ? `${s.modal__content} ${s.active}` : s.modal__content}>
                {children}
            </div>
        </div>
    )
}