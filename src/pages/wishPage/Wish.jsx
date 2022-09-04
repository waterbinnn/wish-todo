import styles from "./Wish.module.css";
import WishForm from "./WishForm";
import WishList from "./WishList";
import Olaf from "../../components/olaf/Olaf";
import { useAuthContext } from "../../hooks/useAuthContext";
import useCollection from "../../hooks/useCollection";

function Wish() {
    const { user } = useAuthContext();
    const { documents, error } = useCollection("wish", ["uid", "==", user.uid]);

    return (
        <main>
            <div className={styles.olaf_backImg}>
                <Olaf />
            </div>
            <aside className={styles.wishform}>
                <WishForm uid={user.uid}></WishForm>
            </aside>
            <h2 className={styles.wishlist_wrapper_title}>MY WISHES</h2>
            <p className={styles.wishlist_wrapper_sub_title}>WILL COME TRUE</p>
            <ul className={styles.wrapper_wishlist}>
                {error && <strong className={styles.error_msg}>{error}</strong>}
                {documents && <WishList wishes={documents} />}
            </ul>
        </main>
    );
}

export default Wish;
