import React from 'react';
import LogWorkout from '../logWorkout/logWorkout';
import styles from './log.module.css'

const Log = ({title, workout, date, addDelete, onDateDelete}) => {

    const onDelete =(detail) => {
        addDelete(detail)
    }  

    const dateDelete = (dateValue) => {
        onDateDelete(dateValue)
    }

    return(
        <ul>{date.map(value => <LogWorkout 
            title={title} date={value} workout={workout} 
            onDelete={onDelete} onDateDelete={dateDelete}/>)}
        </ul>
    )};

export default Log;