import React from 'react'
import CountUp from 'react-countup'
import styles from './Counters.module.scss'

const Counters: React.FC  = () => {
  return (
    <div className={styles.counter}>
      <div className='container'>
        <div className={styles.counterItems}>
            <div className={styles.counterItem}>
              <h1 className={styles.counterNum}><CountUp end={98} duration={5} /></h1>
              <p>Programs</p>
            </div>
            <div className={styles.counterItem}>
              <h1 className={styles.counterNum}><CountUp end={14} duration={5}  /></h1>
              <p>Locations</p>
            </div>
            <div className={styles.counterItem}>
              <h1 className={styles.counterNum}><CountUp end={50} duration={5}  /></h1>
              <span>k+</span>
              <p>Members</p>
            </div>
            <div className={styles.counterItem}>
              <h1 className={styles.counterNum}>
                <CountUp end={34} duration={5}  />
              </h1>
              <p>Coaches</p>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Counters
