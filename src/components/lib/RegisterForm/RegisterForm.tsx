import React from 'react'
import Button from '@/components/lib/Button'
import styles from './RegisterForm.module.scss'

interface IProps {
  shadow?: string
  bgColor?: string
}

const RegisterForm: React.FC<IProps> = ({ shadow, bgColor }) => {
  return (
    <div className='container'>
      <div style={{ boxShadow: shadow, background: bgColor }} className={styles.wrapper}>
        <div className={styles.wrapperText}>
          <div className={styles.wrapperTitle}>
            <h2>Register Now</h2>
            <p>The First 7 Day Trial Is Completely Free With The Teacher</p>
          </div>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.formRow}>
              <div className={styles.formField}>
                <label htmlFor='name'>First Name</label>
                <input type='text' id='name' />
              </div>
              <div className={styles.formField}>
                <label htmlFor='email'>Your email address</label>
                <input type='text' id='email' />
              </div>
            </div>
            <div className={styles.formRow}>
              <div className={styles.formField}>
                <label htmlFor='last-name'>Last Name</label>
                <input type='text' id='last-name' />
              </div>
              <div className={styles.formField}>
                <label htmlFor='mobile'>Mobile No*</label>
                <input type='text' id='mobile' />
              </div>
            </div>
            <Button type='submit'>Get Started</Button>
          </form>
        </div>
        <div className={styles.registerImg}>
          <img src='assets/register-pic.webp' alt='register' />
        </div>
      </div>
    </div>
  )
}

export default RegisterForm
