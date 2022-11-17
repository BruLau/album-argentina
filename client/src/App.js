import React from 'react';
import './App.css';
import { Route, BrowserRouter, Switch, Navigate, Outlet, Redirect } from 'react-router-dom'; 
import Home from './components/home/home.jsx';
import styles from "./components/home/home.module.css";

function App() {
  return (
   <div className={styles.fondo}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
   </div>
  );
}

export default App;