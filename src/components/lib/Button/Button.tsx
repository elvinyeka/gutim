import styles from './Button.module.scss'
import {  ReactNode } from 'react'

interface IProps {
  children: ReactNode
  classNames?: string
  type?:  "button" | "submit" | "reset" | undefined
}

const Button = ({children, classNames, type='button'}:IProps) => {
  return (
    <button className={`${styles.button} ${classNames}`} role='button' type={type}>{children}</button>
  )
}


export default Button
