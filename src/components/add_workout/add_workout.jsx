import React, { useRef, useState } from 'react';
import WorkoutInfo from '../workout_info/workout_info';
import styles from './add_workout.module.css'

const AddWorkout = ({date, addExercise, workout, onDelete, onDateDelete}) => {   

    const weightRef = useRef();
    const repsRef = useRef();
    const [arrow, setArrow] = useState(false);

    const onSubmit = (event) => {
        event.preventDefault();
        const exercise = {id: Date.now(), date: date, weight:weightRef.current.value, reps:repsRef.current.value}
        addExercise(exercise);
        event.target.reset();
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
                <div>◻ {date}</div>
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
                    {Object.keys(workout).map(key=> <WorkoutInfo key={key}
                    detail={workout[key]} date={date} addDelete={addDelete} />)}
                </div>
            </section>}
        </li>
    )};

export default AddWorkout;