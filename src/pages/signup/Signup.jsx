import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import styles from "./Signup.module.css";

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDisplayName] = useState("");

    const { error, isPending, signup } = useSignup();

    const handleData = (e) => {
        if (e.target.type === "email") {
            setEmail(e.target.value);
        } else if (e.target.type === "password") {
            setPassword(e.target.value);
        } else if (e.target.type === "text") {
            setDisplayName(e.target.value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        signup(email, password, displayName);
    };

    return (
        <form className={styles.signup_form} onSubmit={handleSubmit}>
            <fieldset>
                <legend>SIGN UP</legend>
                <label htmlFor="myEmail">Email : </label>
                <input
                    type="email"
                    id="myEmail"
                    value={email}
                    onChange={handleData}
                    required
                    placeholder="이메일 형식에 맞게 작성해 주세요."
                />

                <label htmlFor="myPassword">Password : </label>
                <input
                    type="password"
                    id="myPassword"
                    value={password}
                    onChange={handleData}
                    minLength="6"
                    maxLength="16"
                    placeholder="6-16 글자 사이로 작성해 주세요."
                />

                <label htmlFor="myDisplayName">Name : </label>
                <input
                    type="text"
                    id="myDisplayName"
                    value={displayName}
                    onChange={handleData}
                    minLength="2"
                    maxLength="20"
                    placeholder="두 글자 이상 작성해 주세요."
                />
            </fieldset>
            {!isPending && (
                <button type="submit" className={styles.btn}>
                    START
                </button>
            )}
            {isPending && <strong className={styles.loding_text}>Loading...</strong>}
            {error && <strong className={styles.error_text}>{error}</strong>}
        </form>
    );
}

export default Signup;
