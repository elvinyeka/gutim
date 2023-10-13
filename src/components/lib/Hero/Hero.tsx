import React, { ReactNode } from 'react'
import styles from './Hero.module.scss'

interface IProps{
title:string
  children:ReactNode
}
const Hero: React.FC<IProps> = ({title,children}) => {
  return (
    <section className={styles.hero}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  )
}

export default Hero
