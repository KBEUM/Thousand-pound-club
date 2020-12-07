import styles from './app.module.css'
import Menu from './components/menu/menu';
import MainWorkout from './components/mainWorkout/mainWorkout';
import Home from './components/home/home';

function App() {
  return (
    <div className={styles.main}>
      <Menu />
      <section className={styles.workouts}>
        <Home />
        <MainWorkout title='BENCH PRESS'/>
        <MainWorkout title='DEADLIFT'/>
        <MainWorkout title='SQUAT'/>
      </section>
    </div>
  );
}

export default App;
