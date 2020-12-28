import Menu from './components/menu/menu';
import WorkoutMain from './components/workout_main/workout_main';
import Home from './components/home/home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginHome from './components/login_home/login_home';
import AuthService from './service/auth_service';
import WokroutDatabase from './service/database';

const authService = new AuthService();
const workoutDatabase = new WokroutDatabase();

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LoginHome authService={authService}/>
        </Route>
        <Route exact path="/main">
          <div>
            <Menu />
            <section>
              <Home authService={authService}/>
              <WorkoutMain title='BENCH PRESS' authService={authService} 
                            workoutDatabase={workoutDatabase}/>
              <WorkoutMain title='DEADLIFT' authService={authService} 
                            workoutDatabase={workoutDatabase}/>
              <WorkoutMain title='SQUAT' authService={authService} 
                            workoutDatabase={workoutDatabase}/>
            </section>
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
