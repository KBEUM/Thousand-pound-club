import { useEffect } from 'react';
import styles from './menu.module.css'

const Menu = ({}) => {

    useEffect(()=>{
        
    })

    return(
            <section className={styles.menu}>
                <div><img className={styles.img} src=".\image\logo.jpg" alt="logo"/></div>
                <ul>
                    <li className={styles.btn} ><a href="#HOME">HOMEPAGE</a></li>
                    <li className={styles.btn} ><a href="#BENCH PRESS">BENCH PRESS</a></li>
                    <li className={styles.btn} ><a href="#DEADLIFT">DEADLIFT</a></li>
                    <li className={styles.btn} ><a href="#SQUAT">SQUAT</a></li>
                </ul>
                <div className={styles.simple}>
                    <div className={styles.text}>Simple is the Best</div>
                </div>
            </section>
    )};
export default Menu;