import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import styles from './Nav.module.css'

function Nav() {

  const { logout } = useLogout();

  return (
    <nav className={styles.nav}>
      <h1 className={styles.tit}>
        WISH
      </h1>
      <ul className={styles.list_nav}>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><button type='button' onClick={logout}>Logout</button></li>
      </ul>
    </nav>
  )
}

export default Nav  