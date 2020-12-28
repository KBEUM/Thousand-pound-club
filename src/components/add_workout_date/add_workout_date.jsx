import React, { useEffect, useRef} from 'react';
import styles from './add_workout_date.module.css'
import AddWorkout from '../add_workout/add_workout';

const AddWorkoutDate = ({title, date, addSubmit, addWorkout, workout, addDelete, onDateDelete}) => {    

    const dateRef = useRef();

    useEffect(()=>{
        const today = new Date().toISOString().substr(0,10);
        dateRef.current.value = today
    },[])

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
        <section className={styles.add}>
            <form className={styles.form} onSubmit={onSubmit}>
                <span className={styles.title}>{title}</span>
                <input className={styles.input} type="date" ref={dateRef} required/>
                <button className={styles.btn}>
                    <i class="fas fa-plus-circle"></i>
                </button>
            </form>
            <ul>
                {Object.keys(date)
                .filter(key => key === `${title}${date[key]}`)
                .slice(-2)
                .map(key => <AddWorkout key={key}
                    date={date[key]} addExercise={addExercise} workout={workout} 
                    onDelete={onDelete} onDateDelete={dateDelete}/>)
                }
            </ul>
        </section>
    )};

export default AddWorkoutDate;