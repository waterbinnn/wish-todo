import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

import Olaf from "../../components/olaf/Olaf";
import styles from "./Home.module.css";

function Home() {
    const { user } = useAuthContext();

    const [text, setText] = useState("내 눈을 바라봐 넌 행복해지고");

    function handleHover(e) {
        e.preventDefault();
        setText("내 눈을 클릭해 소원을 적어봐");
    }
    function handleHoverDone(e) {
        e.preventDefault();
        setText("내 눈을 바라봐 넌 행복해지고");
    }

    return (
        <>
            <Olaf />
            <main className={styles.container}>
                {!user && (
                    <>
                        <p className={`${styles.talk_logout_tit}`}>
                            <Link to="/login">LOGIN </Link>
                            AND WHISPER YOUR
                            <span className={styles.talk_logout_wish}>WISHES.</span>
                        </p>
                    </>
                )}

                {user && (
                    <>
                        <div className={styles.olaf_background}></div>
                        <div className={styles.wrapper_talk}>
                            <p className={styles.talk}>안녕?</p>
                            <p
                                className={styles.talk}
                                onMouseOver={handleHover}
                                onMouseLeave={handleHoverDone}
                            >
                                {text}
                            </p>
                            <p className={`${styles.talk} ${styles.click}`}>
                                <Link to="/Wish">소원 작성하러 가기🔮</Link>
                            </p>
                        </div>
                    </>
                )}
            </main>
        </>
    );
}

export default Home;
