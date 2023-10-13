import React from 'react'
import styles from './AboutUs.module.scss'

interface IPrpos {
  children
}
const AboutUs: React.FC<IPrpos> = ({children}) => {
  return (
    <section className={`${styles.about} container`}>
      <div className={styles.videoContainer}>
        <div className={styles.video}>
          <img src="assets/about-pic.webp" alt="about"/>
            <a className={styles.playBtn} href="https://www.youtube.com/watch?v=SlPhMPnQ58k">
              <img  src="assets/play.webp" alt="play"/>
            </a>
        </div>
      </div>
      <div className={styles.info}>
        <h2 className={styles.title}>Story About Us</h2>
        {children}
      </div>
    </section>
  )
}

export default AboutUs
