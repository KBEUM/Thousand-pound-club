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
        <li className={styles.main}>
            <section className={styles.section}>
                <div>◻ {date} RECORD</div>
                <button className={styles.sort} onClick={onClick}>
                    {arrow ? '🔺' : '🔻'}
                </button>
                <button className={styles.trash} onClick={dateDelete}>
                    <i className="fas fa-trash-alt" />
                </button>
            </section>
            {arrow &&
                <div className={styles.detail}>
                    {workout.map(detail=> <WorkoutDetail detail={detail} date={date} addDelete={addDelete} />)}
                </div>}
        </li>
    )};

export default LogWorkout;