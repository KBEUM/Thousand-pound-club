import React from 'react';
import styles from './workoutDetail.module.css'

const WorkoutDetail = ({detail}) => {
    return(
        <div>{detail.weight}kg, {detail.reps}reps, {detail.weight * detail.reps}volumn</div>
    )};

export default WorkoutDetail;