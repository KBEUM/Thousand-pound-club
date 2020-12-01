import styles from './menu.module.css'

const Menu = ({}) => {

    return(
        <ul className={styles.menu}>
            <li className={styles.btn} ><a href="#HOME">HOMEPAGE</a></li>
            <li className={styles.btn} ><a href="#BENCH PRESS">BENCH PRESS</a></li>
            <li className={styles.btn} ><a href="#DEADLIFT">DEADLIFT</a></li>
            <li className={styles.btn} ><a href="#SHUT UP & SQUAT">SHUT UP & SQUAT</a></li>
        </ul>
    )};

export default Menu;