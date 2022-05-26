import {ButtonHTMLAttributes, DetailedHTMLProps, FC} from 'react';
import s from './MyButton.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {}

export const MyButton: FC<SuperButtonPropsType> = (
    {
        className,
        ...restProps
    }
) => {

    const finalClassName = `${s.button} ${className}`
    return (
        <button
            className={finalClassName}
            {...restProps}
        />
    )
}