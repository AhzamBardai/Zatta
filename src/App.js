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
>>>>>>> 2936829 (Modified for the routes)
=======
import Dashboard from './components/Dashboard'

>>>>>>> fd3e4c5 (merge with zavier)

function App() {

  const [files, setFiles] = useState([])                      //setting state and variable for the files
  const [user, setUser] = useState('')
  const [note, setNote] = useState('')
  const urlNotes = "https://zatta1.herokuapp.com/api/notes/"
  const urlUser = `https://zatta1.herokuapp.com/api/users/${user}`


  useEffect(() => {                                           //fetching backend data
    
    axios.get(urlNotes).then((res) => {
        setFiles(res.data)
        
    })
    
  }, [])

  return (
<<<<<<< HEAD
    <div>
      <Route  exact path = '/dashboard' component = { () => <Dashboard files={files} /> } />

      <Route exact path = '/notes/:id' component={(routerProps) => <MainApp note={routerProps.match.params.id} /> } />
    <div class='bg-gray-50' >
      
      
    
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
      
      
    <Switch>
    <Route exact path="/Login" component ={Login}/>
    
    <Landing/>
    
    </Switch>
<<<<<<< HEAD
    
    
     
>>>>>>> 2936829 (Modified for the routes)
=======
      <Route  exact path = '/dashboard'
              component = { Dashboard } />
>>>>>>> fd3e4c5 (merge with zavier)
    </div>
  );
}

export default App;
