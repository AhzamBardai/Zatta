import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import MainApp from './components/Main App/MainApp';
import axios from 'axios'
import './App.css'
import Landing from './components/Landing'
import Navigation from './components/Navigation';
import Login from './components/Login';
import Footer from './components/Footer';

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
    <div>
      <Route  exact path = '/dashboard' component = { () => <Dashboard files={files} /> } />

      <Route exact path = '/notes/:id' component={(routerProps) => <MainApp note={routerProps.match.params.id} /> } />
    <div class='bg-gray-50' >
      <Login/>
      <Navigation/>
     <Landing/>
     <Footer/>
    </div>
    </div>
  );
}

export default App;
