import React from 'react';
import './App.css';
import RegisterForm from "./components/RegisterForm";
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import {Route} from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import AddPlantForm from './components/AddPlantForm';

function App() {
  return (
    <div className="App">
      <Header/>
      <Route exact path='/' component={WelcomePage}/>
      <Route path='/register/' component={RegisterForm}/>
      <Route path='/login/' component={LoginForm} />
      <Route path='/addplant/' component={AddPlantForm}/>
    </div>
  );
}

export default App;
