import styles from './Home.module.css'
import WishForm from './WishForm'
import WishList from './WishList';
import { useAuthContext } from '../../hooks/useAuthContext';
import useCollection from '../../hooks/useCollection';

function Home() {

  const { user } = useAuthContext();
  const { documents, error } = useCollection('wish', ['uid', '==', user.uid]);

  return (
    <main className={styles.container}>
      <aside className={styles.side_menu}>
        <WishForm uid={user.uid}></WishForm>
      </aside>
      <ul className={styles.content_list}>
        {error && <strong>{error}</strong>}
        {documents && <WishList wishes={documents} />}
      </ul>
    </main>
  )
}

export default Home