import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './login.module.css'

const Login = ({authService}) => {  

    const history = useHistory();

    const onClick = () => {
        authService.loginGoogle()
        .then(history.push('/main'));
    };

    const onLogin = () => {
        authService.loginGuest()
        .then(history.push('/main'));
    }

    useEffect(()=>{
        authService.authChange(user => {
            user && history.push('/main');
        });
    })

    return(
        <section className={styles.main}
            style={{backgroundImage: `url('./image/main.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
            }}>
                <div className={styles.loginDiv}>
                    <p className={styles.title}>1000 POUND CLUB</p>
                    <p className={styles.text}>3대 500kg 들면 인생이 달라져? 왜 이렇게 애가 미련하니 정말 속상하게..</p>
                    <p className={styles.text}>왜 그래 또.. 그냥 하는거야 재밌자나...</p>
                    <p className={styles.text}>여름이었다.</p>
                    <button className={styles.btn} onClick={onClick}>Google</button>
                    <button className={styles.btn} onClick={onLogin}>Guest</button>
                </div>
        </section>
    )};

export default Login;