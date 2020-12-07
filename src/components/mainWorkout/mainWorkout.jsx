import React, { useState } from 'react';
import AddWorkout from '../addWorkout/addWorkout';
import ChartLib from '../chartLib/chartLib';
import Log from '../log/log';
import styles from './mainWorkout.module.css'

const MainWorkout = ({title}) => {

    const [change, setChange] = useState('WORKOUT')
    const [date, setDate] = useState([])
    const [workout, setWorkout] = useState([])  

    const onClick = (event) => {
        setChange(event.target.innerText)
    }    

    const changeComp = () => {
        if(change === 'WORKOUT') {
            return <AddWorkout title={title} addSubmit={addSubmit} date={date}
            addWorkout={addWorkout} workout={workout} addDelete={addDelete} onDateDelete={dateDelete}/> 
        }
        else if (change === "CHART") {
            return <ChartLib title={title} workout={workout} date={date.sort()} />
        }
        else if (change === "LOG") {
            return <Log title={title} workout={workout.sort()} date={date} addDelete={addDelete} onDateDelete={dateDelete}/>
        }
    }

    const addSubmit = (dateValue) => {
        for (let i=0; i<=date.length; i++){
            if(date[i] === dateValue) {
                alert('이미 운동한 날')
                return false
            }
            
        }
        const temp = date.sort()
        temp.unshift(dateValue)
        const result = [...temp]
        setDate(result)
    };
    
    const addWorkout = (exercise) => {
        setWorkout([...workout, exercise])
    };

    const addDelete = (detail) => {
        const temp = [...workout]
        const idx = temp.indexOf(detail)
        temp.splice(idx,1)
        setWorkout(temp)
    }

    const dateDelete = (dateValue) => {
        const temp = [...date]
        const idx = temp.indexOf(dateValue)
        temp.splice(idx,1)
        setDate(temp)
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