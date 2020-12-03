import React, { useRef} from 'react';
import styles from './addWorkout.module.css'
import Workout from '../workout/workout';

const AddWorkout = ({title, date, addSubmit, addWorkout, workout, addDelete, onDateDelete}) => {    

    const dateRef = useRef();

    const onSubmit = (event)=> {
        event.preventDefault();
        const dateValue = dateRef.current.value
        addSubmit(dateValue)
    }

    const addExercise = (exercise) => {
        addWorkout(exercise)
    }

    const onDelete = (detail) => {
        addDelete(detail)
    }

    const dateDelete = (dateValue) => {        
        onDateDelete(dateValue)
    }

    return (       
        <section>
            <form className={styles.form} onSubmit={onSubmit}>
                <span>{title}</span>
                <input type="date" ref={dateRef} required/>
                <button>+</button>
            </form>
            <ul>{date.slice(-10).map(value => <Workout 
                date={value} title={title} addExercise={addExercise} workout={workout} 
                onDelete={onDelete} onDateDelete={dateDelete}/>)}</ul>
        </section>
    )};

export default AddWorkout;