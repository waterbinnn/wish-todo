import { useFirestore } from "../../hooks/useFirestore";
import styles from "./Home.module.css";

function WishList({ wishes }) {
    const { deleteDocument } = useFirestore("wish");

    return (
        <>
            {wishes.map((item) => {
                return (
                    <li key={item.id}>
                        <strong className={styles.title}>{item.title}</strong>
                        <p className={styles.text}>{item.text}</p>
                        <button
                            type="button"
                            onClick={() => {
                                deleteDocument(item.id);
                            }}
                        >
                            Delete
                        </button>
                    </li>
                );
            })}
        </>
    );
}
export default WishList;
