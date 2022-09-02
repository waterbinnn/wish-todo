import { useState } from 'react';
import styles from './Login.module.css'

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleData = (e) => {
    if (e.target.type === 'email') {
      setEmail(e.target.value);
    } else if (e.target.type === 'password') {
      setPassword(e.target.value);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password)
  }

  return (
    <form className={styles.login_form} onSubmit={handleSubmit}>
      <fieldset>
        <legend>로그인</legend>
        <label htmlFor="myEmail">email : </label>
        <input type="email" id='myEmail' value={email} onChange={handleData} required />

        <label htmlFor="myPassword">password : </label>
        <input type="password" id='myPassword' value={password} onChange={handleData} required />

        <button type='submit' className={styles.btn}>Login</button>
      </fieldset>
    </form>
  )
}

export default Login;

