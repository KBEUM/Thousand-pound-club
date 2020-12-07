import React, { useRef, useState } from 'react';
import WorkoutDetail from '../workoutDetail/workoutDetail';
import styles from './workout.module.css'

const Workout = ({date, addExercise, workout, onDelete, onDateDelete}) => {   

    const weightRef = useRef();
    const repsRef = useRef();
    const [arrow, setArrow] = useState(false);

    const onSubmit = (event) => {
        event.preventDefault();
        const exercise = {date: date, weight:weightRef.current.value, reps:repsRef.current.value}
        addExercise(exercise)
    }

    const onClick = () => {
        arrow? setArrow(false) : setArrow(true);
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
            <section>
                <form className={styles.form} onSubmit={onSubmit}>
                    <input className={styles.weight} ref={weightRef} type="text" 
                            placeholder='weight' required/>
                    <input className={styles.reps} ref={repsRef} type="text" 
                            placeholder='reps' required/>
                    <button className={styles.btn}>
                        <i class="fas fa-plus-circle"></i>
                    </button>
                </form>
                <div>
                    {workout.map(detail=> <WorkoutDetail detail={detail} date={date} addDelete={addDelete} />)}
                </div>
            </section>}
        </li>
    )};

export default Workout;