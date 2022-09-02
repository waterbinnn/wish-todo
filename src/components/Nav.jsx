import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout'
import styles from './Nav.module.css'

function Nav() {
  const { logout } = useLogout();
  const { user } = useAuthContext(); //유저불러옴

  return (
    <nav className={styles.nav}>
      <h1 className={styles.tit}>
        <Link to="/">
          WISH
        </Link>
      </h1>
      <ul className={styles.list_nav}>
        {!user &&
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
        }
        {user &&
          <>
            <li>My Wish</li>
            <li>
              <button type='button' onClick={logout}>Logout</button></li>
          </>
        }
      </ul>
    </nav>
  )
}

export default Nav  