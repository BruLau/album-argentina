import React from 'react';
import './App.css';
import { Route, BrowserRouter, Switch, Navigate, Outlet, Redirect } from 'react-router-dom'; 
import Home from './components/home/home.jsx';
import styles from "./components/home/home.module.css";
import FormRegister from './components/formRegister/formRegister';
import FormLogin from './components/formLogin/formLoging.jsx';
import Perfil from './components/perfil/perfil';
import Quiz from './components/Quiz/Quiz';
function App() {
  return (
   <div className={styles.fondo}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={FormRegister} />
          <Route exact path="/login" component={FormLogin} />
          <Route exact path="/perfil" component={Perfil} />
          <Route exact path="/quiz" component={Quiz} />
        </Switch>
      </BrowserRouter>
   </div>
  );
}

export default App;