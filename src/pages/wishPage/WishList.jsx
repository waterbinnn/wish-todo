import { useFirestore } from "../../hooks/useFirestore";
import styles from "./Wish.module.css";

function WishList({ wishes }) {
    const { deleteDocument } = useFirestore("wish");

    return (
        <>
            {wishes.map((item) => {
                return (
                    <li key={item.id} className={styles.wishlist_item}>
                        <strong className={styles.wishlist_title}>{item.title}</strong>
                        <div className={styles.wrapper_text_btn}>
                            <p className={styles.wishlist_text}>{item.text}</p>
                            <button
                                className={styles.delete_btn}
                                type="button"
                                onClick={() => {
                                    deleteDocument(item.id);
                                }}
                            >
                                🫥
                            </button>
                        </div>
                    </li>
                );
            })}
        </>
    );
}
export default WishList;
