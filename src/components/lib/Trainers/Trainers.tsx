import React from 'react'
import styles from './Trainers.module.scss'
import { trainersData } from '@/utils/data'

const Trainers: React.FC = () => {
  return (
    <section className={styles.trainers}>
      <div className={'container'}>
        <div className={styles.trainersTitle}>
          <h2>EXPERT TRAINERS</h2>
        </div>
        <div className={styles.cards}>
          {trainersData.map(trainer =>{
            return (
              <div key={trainer.id} className={styles.card}>
                <img src={trainer.src} alt={trainer.name}/>
                <div className={styles.trainerText}>
                  <h5>{trainer.name}</h5>
                  <span>{trainer.position}</span>
                  <p>{trainer.info}</p>
                  <div className={styles.trainerSocial}>
                    <a href="#_"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#_"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#_"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#_"><i className="fa-brands fa-pinterest"></i></a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Trainers
