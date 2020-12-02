import React, { useState } from 'react';
import AddWorkout from '../addWorkout/addWorkout';
import Chart from '../chart/chart';
import Log from '../log/log';
import styles from './mainWorkout.module.css'

const MainWorkout = ({title}) => {

    const [change, setChange] = useState('WORKOUT')

    const onClick = (event) => {
        setChange(event.target.innerText)
    }

        const changeComp = () => {
            if(change === 'WORKOUT') {
                return <AddWorkout title={title} addSubmit={addSubmit} date={date}
                addWorkout={addWorkout} workout={workout}/> 
            }
            else if (change === "CHART") {
                return <Chart />
            }
            else if (change === "LOG") {
                return <Log title={title} workout={workout}/>
            }
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
        const temp = date.sort()
        temp.unshift(dateValue)
        const result = [...temp]
        setDate(result)
    };
    
    const addWorkout = (exercise) => {
        setWorkout([...workout, exercise])
    };

    return (
        <div id={title} className={styles.workout}>
            <section className={styles.btns}>
                <button onClick={onClick}>WORKOUT</button>
                <button onClick={onClick}>CHART</button>
                <button onClick={onClick}>LOG</button>
            </section>
            {changeComp()}
        </div>
    )};

export default MainWorkout;