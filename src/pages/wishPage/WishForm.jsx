import { useEffect, useState } from "react";
import { useFirestore } from "../../hooks/useFirestore";
import styles from "./Wish.module.css";

function WishForm({ uid }) {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const { addDocument, response } = useFirestore("wish");

    const handleData = (e) => {
        if (e.target.id === "title") {
            setTitle(e.target.value);
        } else if (e.target.id === "text") {
            setText(e.target.value);
        }
    };

    //통신 완료되면 인풋 값 초기화
    useEffect(() => {
        if (response.success) {
            setTitle("");
            setText("");
        }
    }, [response.success]);

    const handleSubmit = (e) => {
        e.preventDefault();
        addDocument({ uid, title, text });
    };

    return (
        <form onSubmit={handleSubmit} className={styles.container_wishform}>
            <fieldset className={styles.wrapper_wishform}>
                <legend className={styles.title_wishform}>Whisper Your Wish</legend>
                <label htmlFor="title" className={styles.wish_title}>
                    TITLE
                </label>
                <input
                    className={styles.wish_tit_text}
                    id="title"
                    type="text"
                    maxlength="50"
                    required
                    onChange={handleData}
                    value={title}
                />

                <label htmlFor="text" className={styles.wish_title}>
                    WISH
                </label>
                <textarea
                    className={styles.wish_text}
                    id="text"
                    type="text"
                    required
                    onChange={handleData}
                    value={text}
                ></textarea>
                <button className={styles.wishform_btn} type="submit">
                    🥕
                </button>
            </fieldset>
        </form>
    );
}

export default WishForm;
