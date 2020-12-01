import styles from './app.module.css'
import Menu from './components/menu/menu';
import MainWorkout from './components/mainWorkout/mainWorkout';

function App() {
  return (
    <div className={styles.main}>
      <Menu />
      <section className={styles.workouts}>
        <MainWorkout title='BENCH PRESS'/>
        <MainWorkout title='DEADLIFT'/>
        <MainWorkout title='SHUT UP & SQUAT'/>
      </section>
    </div>
  );
}

export default App;
