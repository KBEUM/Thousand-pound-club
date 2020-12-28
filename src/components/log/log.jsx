import React from 'react';
import styles from './log.module.css'
import WorkoutLog from '../workout_log/workout_log';

const Log = ({title, workout, date, addDelete, onDateDelete}) => {

    const onDelete =(detail) => {
        addDelete(detail)
    }  

    const dateDelete = (dateValue) => {
        onDateDelete(dateValue)
    }

    return(
        <section>
            <div className={styles.log}>Workout Logs</div>
            <ul>
                {Object.keys(date)
                    .filter(key => key === `${title}${date[key]}`)
                    .map(key => <WorkoutLog key={key}
                        date={date[key]} workout={workout} 
                        onDelete={onDelete} onDateDelete={dateDelete}/>)
                    }
            </ul>
        </section>
    )};

export default Log;