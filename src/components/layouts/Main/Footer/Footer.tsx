import styles from './Footer.module.scss'
import TelegramIcon from '@/components/lib/icons/TelegramIcon'

const Footer = () => {
  return (
    <footer className={styles.footer}
    >
      <div className='container'>
        <div className={styles.contacts}>
          <div className={styles.contactsItem}>
            <span className={styles.contactsTitle}>Phone</span>
            <span className={styles.contactsInfo}>(123) 118 9999 - (123) 118 9999</span>
          </div>
          <div className={styles.contactsItem}>
            <span className={styles.contactsTitle}>Address</span>
            <span className={styles.contactsInfo}>72 Kangnam, 45 Opal Point Suite 391</span>
          </div>
          <div className={styles.contactsItem}>
            <span className={styles.contactsTitle}>Email</span>
            <span className={styles.contactsInfo}>contactcompany@Gutim.com</span>
          </div>
        </div>
        <div className={styles.subscribe}>
          <div className={styles.subscribeText}>
            <h4 className={styles.subscribeTitle}>SUBSCRIBE TO OUR MAILING LIST</h4>
            <p className={styles.subscribeDesc}>Sign up to receive the latest information </p>
          </div>
          <form
            className={styles.subscribeForm}
            onSubmit={(e)=>e.preventDefault()}>
            <input type="text" placeholder="Enter Your Mail"/>
            <button type={'submit'}>
              <TelegramIcon/>
            </button>
          </form>
        </div>
        <div className={styles.copy}>
          <p className={styles.copyText}>
            <span>Copyright</span>
             <span> © </span>
            <span>{new Date().getFullYear()}</span>
            <span>All rights reserved | This template is made with </span>
            <i className="fa-solid fa-heart"></i>
            <span> by </span>
            <a href='#'>Colorlib</a>
          </p>
            <ul className={styles.links}>
              <li><a href="#">Term&amp;Use</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
            <div className={styles.footerSocial}>
              <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i className="fa-brands fa-twitter"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-dribbble"></i></a>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
