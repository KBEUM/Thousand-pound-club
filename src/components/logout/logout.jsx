import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './logout.module.css'

const Logout = ({authService}) => {

    const history = useHistory();

    const onClick = () => {
        authService.logout();
      }
    
      useEffect(() => {
        authService.authChange(user => {
          !user && history.push('/')
        })
      })

    return(
        <button className={styles.logout} onClick={onClick}>
            LOGOUT
        </button>
    )};

export default Logout;