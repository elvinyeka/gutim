import React from 'react'
import styles from './HomeHero.module.scss'
import Button from '@/components/lib/Button'
import { Link } from 'react-router-dom'

const HomeHero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={`${styles.heroContent} container`}>
          <span>FITNESS ELEMENTS</span>
          <h1>BMI CALCULATOR</h1>
          <p>Gutim comes packed with the user-friendly BMI Calculator<br/> shortcode which lets</p>
        <Link to={'/'}>
          <Button>Read More</Button>
        </Link>
      </div>
    </section>
  )
}

export default HomeHero
