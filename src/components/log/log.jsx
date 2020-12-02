import React, { useState } from 'react';
import WorkoutDetail from '../workoutDetail/workoutDetail';
import styles from './log.module.css'

const Log = ({title, workout}) => {

    const [arrow, setArrow] = useState(false);

    const onClick = () => {
        arrow? setArrow(false) : setArrow(true)
    }
    const dateArr = [...new Set(workout.map(data => data.date))]

    return(
        <div>
            {dateArr.sort().map(date => 
            <li>
                <section className={styles.section}>
                    <div>{title}</div>
                    <div>{date}</div>
                    <button onClick={onClick}>v</button>
                </section>
                {arrow &&
                <ul>
                    {workout.map(detail=> <WorkoutDetail detail={detail} date={date} />)}
                </ul>}
            </li>)}
        </div>
    )};

export default Log;