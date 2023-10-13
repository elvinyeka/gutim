import { Link, NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { appState, setShowMenu } from '@/store/appReducer'
import MenuIcon from '@/components/lib/icons/MenuIcon'
import CloseIcon from '@/components/lib/icons/CloseIcon'
import styles from './Header.module.scss'

const Header = () => {
  const {showMenu} = useAppSelector(appState)
  const dispatch = useAppDispatch()

  const navLinkClass = ({ isActive }) => (isActive ? 'activeLink' : 'link')
  const mobileLinkClass = ({ isActive }) => (isActive ? `${styles.mobileActive} ${styles.link}` : `${styles.link}`)
  
  const onToggleMenu = () => {
    dispatch(setShowMenu(!showMenu))
  }
  return (
    <header className={styles.header}>
      <section className={`container ${styles.nav}`}>
        <Link to={'/'} className={styles.logo}>
          <img src='/logo.webp' alt='' />
        </Link>
        <nav className={`${styles.navLinks}`}>
          <NavLink
            to={'/'}
            className={navLinkClass}
            end
          >
            Home
          </NavLink>
          <NavLink
            to={'/about'}
            className={navLinkClass}>
            About
          </NavLink>
          <NavLink
            to={'/classes'}
            className={navLinkClass}>
            Classes
          </NavLink>
          <Link to={'/'} className={styles.signUpBtn}>Sign Up Today</Link>
        </nav>
        <div className={styles.navMenu}>
          <button className={styles.menuBtn} onClick={onToggleMenu}>
            Menu
            {showMenu ?
              <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </section>
      <nav
        className={showMenu ? `${styles.navMobile} ${styles.menuActive}` : `${styles.navMobile} `}>
        <NavLink
          to={'/'}
          className={mobileLinkClass}
          end
          onClick={() => dispatch(setShowMenu(false))}
        >Home</NavLink>
        <NavLink
          to={'/about'}
          className={mobileLinkClass}
          onClick={() => dispatch(setShowMenu(false))}
        >About</NavLink>
        <NavLink
          to={'/classes'}
          className={mobileLinkClass}
          onClick={() => dispatch(setShowMenu(false))}
        >Classes</NavLink>
        <Link to={'/'} className={styles.signUpBtnMob}>Sign Up Today</Link>
      </nav>
    </header>
  )
}

export default Header
