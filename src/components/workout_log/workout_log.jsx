import React, { useState } from 'react';
import WorkoutInfo from '../workout_info/workout_info';
import styles from './workout_log.module.css'

const WorkoutLog = ({date, workout, onDelete, onDateDelete}) => {   

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
                    {Object.keys(workout).map(key=> <WorkoutInfo key={key}
                    detail={workout[key]} date={date} addDelete={addDelete} />)}
                </div>}
        </li>
    )};

export default WorkoutLog;