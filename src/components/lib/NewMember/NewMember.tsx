import React from 'react'
import Button from '@/components/lib/Button'
import styles from './NewMember.module.scss'

const NewMember: React.FC = () => {
  return (
    <section className={styles.members}>
      <div className={`${styles.item} ${styles.item1}`}>
        <span>New member</span>
        <h2>7 days for free</h2>
        <p>Complete the training sessions with us, surely you will be happy</p>
        <a href='#_'>
          <Button>Get Started</Button>
        </a>
      </div>
      <div className={`${styles.item} ${styles.item2}`}>
        <span>contact us</span>
        <h2>09 746 204</h2>
        <p>If you trust us on your journey they dark sex does not disappoint you!</p>
        <a href='#_'>
          <Button>Get Started</Button>
        </a>
      </div>
    </section>
  )
}

export default NewMember
