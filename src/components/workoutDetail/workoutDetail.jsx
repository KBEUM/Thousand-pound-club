import React, { useState } from 'react';
import styles from './workoutDetail.module.css'

const WorkoutDetail = ({detail, date, addDelete}) => {

    const onClick = () => {
        addDelete(detail)
    }

    const content = () => {
        if (detail.date === date) {
            return (
            <div className={styles.detail}>
                <div>◽ {detail.weight}kg, {detail.reps}reps, Volume = {detail.weight * detail.reps}KG</div>
                <button className={styles.cancel} onClick={onClick}>
                    <i class="fas fa-window-close"></i>
                </button>
            </div>
        )}
    }

    return(
        <div className={styles.main}>
            {content()}
        </div>
    )};

export default WorkoutDetail;