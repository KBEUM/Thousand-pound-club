import React, { useEffect, useState } from 'react';
import AddWorkout from '../addWorkout/addWorkout';
import ChartLib from '../chartLib/chartLib';
import Log from '../log/log';
import styles from './mainWorkout.module.css'

const MainWorkout = ({title, authService, workoutDatabase}) => {

    const [change, setChange] = useState('WORKOUT')
    const [date, setDate] = useState({})
    const [workout, setWorkout] = useState({})  


    const [userId, setUserId] = useState()

    useEffect(()=>{
        authService.authChange(user => {
            user && setUserId(user.uid)
        });
    })

    useEffect(()=>{
        workoutDatabase.updateDate(userId, title, (dateValue) =>{
            setDate(dateValue)
        });
        workoutDatabase.updateWorkout(userId, title, (workoutValue) =>{
            setWorkout(workoutValue)
        });
    }, [userId, workoutDatabase, title])

    const onClick = (event) => {
        setChange(event.target.innerText)
    }

    const changeComp = () => {
        if(change === 'WORKOUT') {
            return <AddWorkout title={title} addSubmit={addSubmit} date={date}
            addWorkout={addWorkout} workout={workout} addDelete={addDelete} onDateDelete={dateDelete}/> 
        }
        else if (change === "CHART") {
            return <ChartLib title={title} workout={workout} date={date} />
        }
        else if (change === "LOG") {
            return <Log title={title} workout={workout} date={date} addDelete={addDelete} onDateDelete={dateDelete}/>
        }
    }


    const addSubmit = (dateValue) => {
        workoutDatabase.saveDate(userId, title, dateValue)
    };

    const dateDelete = (dateValue) => {
        const updated = {...date};
        delete updated[`${title}${dateValue}`];
        setDate(updated);
        workoutDatabase.deleteDate(userId, title, dateValue)
    }
    
    const addWorkout = (exercise) => {
        workoutDatabase.saveWorkout(userId, title, exercise)
    };

    const addDelete = (detail) => {
        const updated = {...workout}
        delete updated[`${detail.id}`];
        setWorkout(updated);
        workoutDatabase.deleteWorkout(userId, title, detail);
    }

    return (
        <div id={title} className={styles.workout}>
            <section className={styles.btns}>                
                <button className={styles.btn} onClick={onClick}>WORKOUT</button>
                <button className={styles.btn} onClick={onClick}>CHART</button>
                <button className={styles.btn} onClick={onClick}>LOG</button>                
            </section>
            <section className={styles.detail}>
                {changeComp()}
            </section>
        </div>
    )};

export default MainWorkout;