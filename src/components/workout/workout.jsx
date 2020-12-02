import React, { useRef, useState } from 'react';
import WorkoutDetail from '../workoutDetail/workoutDetail';
import styles from './workout.module.css'

const Workout = ({title, date, addExercise, workout}) => {   

    const weightRef = useRef();
    const repsRef = useRef();
    const [arrow, setArrow] = useState(false);

    const onSubmit = (event) => {
        event.preventDefault();
        const exercise = {date: date, weight:weightRef.current.value, reps:repsRef.current.value}
        addExercise(exercise)
    }

    const onClick = () => {
        arrow? setArrow(false) : setArrow(true)
    }

    return(
        <li>
            <section className={styles.section}>
                <div>{title}</div>
                <div>{date}</div>
                <button onClick={onClick}>v</button>
            </section>
            {arrow &&
            <section>
                <form onSubmit={onSubmit}>
                    <input ref={weightRef} type="text" placeholder='weight' required/>
                    <input ref={repsRef} type="text" placeholder='reps' required/>
                    <button>+</button>
                </form>
                {workout.map(detail=> <WorkoutDetail detail={detail} date={date} />)}
            </section>}
        </li>
    )};

export default Workout;