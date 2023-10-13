import styles from './Breadcrumbs.module.scss'
import { Link } from 'react-router-dom'

interface IProps {
  label: string
}

const BreadCrumbs = ({  label }: IProps) => {
  return (
    <ul className={styles.breadcrumbs}>
      <li>
        <Link to={'/'}>
          <i className="fa-solid fa-house-chimney"></i>
          <span> Home</span>
        </Link>
      </li>
      <i  className='fa-solid fa-angle-right'></i>
      <li>
        <span className={styles.label}>{label}</span>
      </li>

    </ul>
  )
}

export default BreadCrumbs
