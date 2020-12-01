import React, { useState } from 'react';
import AddWorkout from '../addWorkout/addWorkout';
import Chart from '../chart/chart';
import styles from './mainWorkout.module.css'

const MainWorkout = ({title}) => {

    const [temp, setTemp] = useState(true)

    const onClick = (event) => {
        if(event.target.innerText === "CHART"){
            setTemp(false)}
        else setTemp(true)
        }

    const [date, setDate] = useState([])
    const [workout, setWorkout] = useState([])

    const addSubmit = (dateValue) => {
        for (let i=0; i<=date.length; i++){
            if(date[i] === dateValue) {
                alert('이미 운동한 날')
                return false
            }
        }
        setDate([...date, dateValue])
    };
    
    const addWorkout = (exercise) => {
        setWorkout([...workout, exercise])
    };

    return (
        <div id={title} className={styles.workout}>
            <section className={styles.btns}>
                <button onClick={onClick}>ADD WORKOUT</button>
                <button onClick={onClick}>CHART</button>
            </section>
            {temp? <AddWorkout title={title} addSubmit={addSubmit} date={date}
                                addWorkout={addWorkout} workout={workout}/> 
            : <Chart />}
        </div>
    )};

export default MainWorkout;