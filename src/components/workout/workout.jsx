import React, { useRef, useState } from 'react';
import WorkoutDetail from '../workoutDetail/workoutDetail';
import styles from './workout.module.css'

const Workout = ({title, date, addExercise, workout, onDelete, onDateDelete}) => {   

    const weightRef = useRef();
    const repsRef = useRef();
    const [arrow, setArrow] = useState(false);
    const [weight, setWeight] = useState([]);
    const [dateArr, setDateArr] = useState([])

    // useEffect(()=>{
    //     setDateArr([...dateArr, date])
    // },[date])

    const onSubmit = (event) => {
        event.preventDefault();
        const exercise = {date: date, weight:weightRef.current.value, reps:repsRef.current.value}
        addExercise(exercise)
        // const asdf = {date: date, weight:weightRef.current.value, reps:repsRef.current.value}
        // setWeight([...weight, {weight:++weightRef.current.value, reps:+repsRef.current.value}])
        // const asdf = [date, {if(date===date){weightRef.current.value, repsRef.current.value]
        // setWeight([...weight, asdf])
        // console.log(weight)
        // console.log(dateArr)
    }

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
            <section>
                <form onSubmit={onSubmit}>
                    <input ref={weightRef} type="text" placeholder='weight' required/>
                    <input ref={repsRef} type="text" placeholder='reps' required/>
                    <button>+</button>
                </form>
                <ul>
                    {workout.map(detail=> <WorkoutDetail detail={detail} date={date} addDelete={addDelete} />)}
                </ul>
            </section>}
        </li>
    )};

export default Workout;