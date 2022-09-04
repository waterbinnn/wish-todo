import { useState } from "react";
import styles from "./Login.module.css";
import { useLogin } from "../../hooks/useLogin";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const { error, isPending, login } = useLogin();

    const handleData = (e) => {
        if (e.target.type === "email") {
            setEmail(e.target.value);
        } else if (e.target.type === "password") {
            setPassword(e.target.value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password);
        if (error) {
            setErrorMsg("없는 정보입니다.");
        }
    };

    return (
        <form className={styles.login_form} onSubmit={handleSubmit}>
            <fieldset>
                <legend>LOGIN</legend>
                <label htmlFor="myEmail">Email : </label>
                <input type="email" id="myEmail" value={email} onChange={handleData} />

                <label htmlFor="myPassword">Password : </label>
                <input type="password" id="myPassword" value={password} onChange={handleData} />

                {!isPending && (
                    <button type="submit" className={styles.btn}>
                        START
                    </button>
                )}
                {isPending && <strong className={styles.loding_text}>Loading...</strong>}
                {error && (
                    <strong className={styles.error_text}>
                        *이메일 또는 비밀번호가 일치하지 않습니다.
                    </strong>
                )}
            </fieldset>
        </form>
    );
}

export default Login;
