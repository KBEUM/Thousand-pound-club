import React, { useState } from 'react';
import WorkoutDetail from '../workoutDetail/workoutDetail';
import styles from './logWorkout.module.css'

const LogWorkout = ({title, date, workout, onDelete, onDateDelete}) => {   

    const [arrow, setArrow] = useState(false);

    const onClick = () => {
        arrow? setArrow(false) : setArrow(true)
    }

    const addDelete = (detail) => {
        onDelete(detail)
    }

    const dateDelete = ()=> {
        onDateDelete(date)
    }

    return(
        <li>
            <section className={styles.section}>
                <div>{title}</div>
                <div>{date}</div>
                <button onClick={onClick}>v</button>
                <button onClick={dateDelete}>xxxxx</button>
            </section>
            {arrow &&
                <ul>
                    {workout.map(detail=> <WorkoutDetail detail={detail} date={date} addDelete={addDelete} />)}
                </ul>}
        </li>
    )};

export default LogWorkout;