import React from 'react';
import styles from './workoutDetail.module.css'

const WorkoutDetail = ({detail, date}) => {

    const temp = () => {
        if (detail.date === date) {
            return <div>{detail.weight}kg, {detail.reps}reps, {detail.weight * detail.reps}volumn</div>
        }
    }

    return(
        <div>
            {temp()}
        </div>
    )};

export default WorkoutDetail;