import React from 'react';
import styles from './workoutDetail.module.css'

const WorkoutDetail = ({detail, date, addDelete}) => {

    const onClick = () => {
        addDelete(detail)
    }

    const content = () => {
        if (detail.date === date) {
            return (
            <div className={styles.main}>
                <div>{detail.weight}kg, {detail.reps}reps, {detail.weight * detail.reps}volumn</div>
                <button onClick={onClick}>xxxx</button>
            </div>
        )}
    }

    return(
        <li>
            {content()}
        </li>
    )};

export default WorkoutDetail;