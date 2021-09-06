<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import MainApp from './components/Main App/MainApp';
import axios from 'axios'
import './App.css'
import Landing from './components/Landing'
import { Route , Switch } from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup.jsx';
=======
import './App.css';
<<<<<<< HEAD
import Landing from './components/Landing'
<<<<<<< HEAD
import Navigation from './components/Navigation';
import Footer from './components/Footer';
<<<<<<< HEAD
>>>>>>> 5b9aa22 (Push for Loging page and Landing page components)
=======
=======
>>>>>>> 8c1b8e0 (Added commments for the sections of the landing page)
import { Route , Switch } from 'react-router-dom'
import Login from './components/Login';
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2936829 (Modified for the routes)
=======
import Dashboard from './components/Dashboard'
import MainApp from './components/mainApp';

>>>>>>> fd3e4c5 (merge with zavier)
=======
=======
=======
import { Route, Redirect } from 'react-router-dom'
import React, { useEffect } from 'react'
import axios from 'axios'

// Importing Components
>>>>>>> 6b6d706 (Routes working with Login)
import Landing from './components/Landing/Landing'
import Login from './components/login/Login';
<<<<<<< HEAD
>>>>>>> 2c98d9e (MVP Merge Complete)

import React, { useState, useEffect } from 'react'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import MainApp from './components/Main App/MainApp';
import axios from 'axios'
>>>>>>> 41446ce (merge with zavier)
=======
import Dashboard from './components/Dashboard/Dashboard.jsx'
import MainApp from './components/Main App/MainApp';
import userStore  from './components/Users/GetUsers';

>>>>>>> 6b6d706 (Routes working with Login)

function App() {

  const urlNotes = "https://zatta1.herokuapp.com/api/notes/"
  const urlUsers = "https://zatta1.herokuapp.com/api/users/"
  const setUsers = userStore(state => state.setUsers)
  const setNotes = userStore(state => state.setNotes) 
  const isLoggedIn = userStore(state => state.isLoggedIn)

  useEffect(() => {
    axios.get(urlUsers).then(res => setUsers(res.data)) // store all users in the Zustand store
    axios.get(urlNotes).then((res) => setNotes(res.data))  // Get all notes

  }, [])

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div>
      <Route  exact path = '/dashboard' component = { () => <Dashboard files={files} /> } />

      <Route exact path = '/notes/:id' component={(routerProps) => <MainApp note={routerProps.match.params.id} /> } />
    <div class='bg-gray-50' >
=======
    <div >
>>>>>>> 6b6d706 (Routes working with Login)
      
<<<<<<< HEAD
      
    
    <Route exact path="/Login" component ={Login}/>
    <Route exact path="/Signup" component ={Signup}/>
    <Route exact path="/" component={Landing}/>

    
   
    
    
     
    </div>
=======
    <div class='bg-gray-50' >
<<<<<<< HEAD
      <Login/>
      <Navigation/>
     <Landing/>
     <Footer/>
>>>>>>> 5b9aa22 (Push for Loging page and Landing page components)
=======
      
      
      <Route exact path="/Login" component ={Login}/>
      
=======
>>>>>>> 2c98d9e (MVP Merge Complete)
      <Route exact path='/' component={Landing} />

      <Route exact path="/login" component={ routerProps => <Login history={routerProps.history} />}/>
    
<<<<<<< HEAD
<<<<<<< HEAD
    </Switch>
<<<<<<< HEAD
    
    
     
>>>>>>> 2936829 (Modified for the routes)
=======
      <Route  exact path = '/dashboard'
              component = { Dashboard } />
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> fd3e4c5 (merge with zavier)
=======

      <MainApp />
>>>>>>> 4faebad (merge with zavier)
=======
=======
>>>>>>> 17a48f7 (Merged MVP)
      <Route  exact path = '/dashboard' component = { () => <Dashboard files={files} /> } />

      <Route exact path = '/notes/:id' component={(routerProps) => <MainApp note={routerProps.match.params.id} /> } />
>>>>>>> 41446ce (merge with zavier)
=======
      <Route  exact path = '/dashboard' component = { (routerProps) => isLoggedIn ? <Dashboard history={routerProps.history} /> : <Login {...routerProps.history.push('/login')} /> } />

      <Route exact path = '/notes/:id' component={(routerProps) => isLoggedIn ? <MainApp note={routerProps.match.params.id} /> : <Login />} /> 

>>>>>>> 6b6d706 (Routes working with Login)
    </div>
  );
}

export default App;
