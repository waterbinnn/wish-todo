import styles from './Home.module.css'
import WishForm from './WishForm'

function Home() {
  return (
    <main className={styles.container}>
      <aside className={styles.side_menu}>
        <WishForm></WishForm>
      </aside>
      <ul className={styles.content_list}>
        Wishes
      </ul>
    </main>
  )
}

export default Home