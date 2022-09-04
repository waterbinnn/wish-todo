import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import styles from "./Nav.module.css";

function Nav() {
    const { logout } = useLogout();
    const { user } = useAuthContext(); //유저불러옴

    return (
        <header className={styles.container}>
            <h1 className={styles.title}>
                <Link to={"/"}>WYW</Link>
            </h1>
            <p className={styles.sub_title}>WHISPER YOUR WISH</p>
            <nav className={styles.nav}>
                <ul className={styles.list_nav}>
                    {!user && (
                        <>
                            <li>
                                <Link to="/login">LOGIN</Link>
                            </li>
                            <li>
                                <Link to="/signup">SIGNUP</Link>
                            </li>
                        </>
                    )}
                    {user && (
                        <>
                            <li>
                                <Link to="/" onClick={logout}>
                                    Logout
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;
