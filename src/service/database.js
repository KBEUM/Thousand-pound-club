import {firebaseDatabase} from './firebase'

class WokroutDatabase {
    saveDate(userId, title, date) {
        firebaseDatabase.ref(`${userId}/${title}/${title}${date}`).set(date);
    }

    saveWorkout(userId, title, workout) {
        firebaseDatabase.ref(`${userId}/${title}/workouts/${workout.id}`).set(workout);
    }

    deleteDate(userId, title, date) {
        firebaseDatabase.ref(`${userId}/${title}/${title}${date}`).remove();
    }

    deleteWorkout(userId, title, workout) {
        firebaseDatabase.ref(`${userId}/${title}/workouts/${workout.id}`).remove();
    }

    updateDate(userId, title, onUpdate) {
        const dateRef = firebaseDatabase.ref(`${userId}/${title}`);
        dateRef.on('value', snapshot => {
            const value = snapshot.val();
            value && onUpdate(value);
        });
    };

    updateWorkout(userId, title, onUpdate) {
        const dateRef = firebaseDatabase.ref(`${userId}/${title}/workouts`);
        dateRef.on('value', snapshot => {
            const value = snapshot.val();
            value && onUpdate(value);
        });
    };
}

export default WokroutDatabase;