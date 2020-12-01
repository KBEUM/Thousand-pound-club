import React, { useRef, useState } from 'react';
import WorkoutDetail from '../workoutDetail/workoutDetail';
import styles from './workout.module.css'

const Workout = ({title, data, addExercise, workout}) => {   

    const weightRef = useRef();
    const repsRef = useRef();
    const [arrow, setArrow] = useState(false);

    const addDetail = (event) => {
        event.preventDefault();
        const exercise = {date: data, weight:weightRef.current.value, reps:repsRef.current.value,}        
        addExercise(exercise)
    }

    const onClick = () => {
        arrow? setArrow(false) : setArrow(true)
    }

    return(
        <li>
            <section className={styles.section}>
                <div>{title}</div>
                <div>{data}</div>
                <button onClick={onClick}>v</button>
            </section>
            {arrow?
            <section>
                <form onSubmit={addDetail}>
                    <input ref={weightRef} type="text" placeholder='weight' required/>
                    <input ref={repsRef} type="text" placeholder='reps' required/>
                    <button>+</button>
                </form>
                {workout.map(detail=> <WorkoutDetail detail={detail} />)}
            </section>
            : ''}
        </li>
    )};

export default Workout;