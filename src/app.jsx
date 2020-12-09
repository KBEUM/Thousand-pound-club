import Menu from './components/menu/menu';
import MainWorkout from './components/mainWorkout/mainWorkout';
import Home from './components/home/home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/login/login';
import AuthService from './service/authService';
import WokroutDatabase from './service/database';

const authService = new AuthService();
const workoutDatabase = new WokroutDatabase();

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login authService={authService}/>
        </Route>
        <Route exact path="/main">
          <div>
            <Menu />
            <section>
              <Home authService={authService}/>
              <MainWorkout title='BENCH PRESS' authService={authService} 
                            workoutDatabase={workoutDatabase}/>
              <MainWorkout title='DEADLIFT' authService={authService} 
                            workoutDatabase={workoutDatabase}/>
              <MainWorkout title='SQUAT' authService={authService} 
                            workoutDatabase={workoutDatabase}/>
            </section>
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
