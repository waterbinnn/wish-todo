import styles from './Home.module.css'

function WishList({ wishes }) {
    return (
        <>
            {
                wishes.map((item) => {
                    return (
                        <li key={item.id}>
                            <strong className={styles.title}>
                                {item.title}
                            </strong>
                            <p className={styles.text}>{item.text}</p>
                        </li>
                    )
                })
            }
        </>
    )
}
export default WishList
