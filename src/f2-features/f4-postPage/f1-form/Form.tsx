import {useFormik} from 'formik';
import {useAppDispatch} from '../../../f1-main/f2-store/store';
import {MyButton} from '../../../f1-main/f1-ui/f2-common/f3-myButton/MyButton';
import {FC, memo} from 'react';
import {addPostCommentsTC} from '../../../f1-main/f2-store/f1-reducers/usersReducer';
import s from './Form.module.scss'

type FormikErrorType = {
    email?: string
    name?: string
    body?: string
}

type FormPropsType = {
    setIsModal: (e: boolean) => void
    postId: number
}

export const Form: FC<FormPropsType> = memo(({setIsModal, postId}) => {
    const dispatch = useAppDispatch()
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            body: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Введите e-mail';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Некорректный e-mail';
            }
            if (values.name.length < 1) errors.name = 'Введите имя'
            if (values.body.length < 1) errors.body = 'Введите комментарий'
            return errors;
        },
        onSubmit: (values) => {
            dispatch(addPostCommentsTC({...values, postId}))
            setIsModal(false)
            formik.resetForm()
        },
    })
    return <form onSubmit={formik.handleSubmit} className={s.mainContainer}>
        <div>
            <span>Имя:</span>
            <input id={'name'}
                   type="text"
                   placeholder={'name'}
                   {...formik.getFieldProps('name')}/>
            {formik.touched.name && formik.errors.name &&
                <div style={{color: 'red'}}>{formik.errors.name}</div>}
        </div>
        <div>
            <span>E-mail:</span>
            <input id={'email'}
                   type={'email'}
                   placeholder={'email'}
                   {...formik.getFieldProps('email')}/>
            {formik.touched.email && formik.errors.email &&
                <div style={{color: 'red'}}>{formik.errors.email}</div>}
        </div>
        <div>
            <span>Комментарий:</span>
            <textarea id={'body'}
                      placeholder={'text'}
                      {...formik.getFieldProps('body')}/>
            {formik.touched.body && formik.errors.body &&
                <div style={{color: 'red'}}>{formik.errors.body}</div>}
        </div>
        <MyButton type={'submit'}>Отправить</MyButton>
    </form>
})