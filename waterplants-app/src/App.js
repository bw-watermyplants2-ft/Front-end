import React from 'react';
import './App.css';
import RegisterForm from "./components/RegisterForm";
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import {Route} from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import AddPlantForm from './components/AddPlantForm';
import DeletePlantForm from './components/DeletePlantForm';
import EditPlantForm from './components/EditPlantForm';
import UpdatePhonePassForm from './components/UpdatePhonePassForm';
import MyPlants from './components/MyPlants';

function App() {


  return (
    <div className="App">
      <Header/>
      <Route exact path='/' component={WelcomePage}/>
      <Route path='/register/' component={RegisterForm}/>
      <Route path='/login/' component={LoginForm} />
      <Route path='/addplant/' component={AddPlantForm}/>
      <Route path='/deleteplant/' component={DeletePlantForm}/>
      <Route path='/editplant/' component={EditPlantForm}/>
      <Route path='/myplants/' component={MyPlants} />
      <Route path='/updatephonepass/' component={UpdatePhonePassForm}/>
    </div>
  );
}

export default App;
