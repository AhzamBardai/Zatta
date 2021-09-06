import { Route, Switch } from 'react-router-dom'
import React, { useEffect } from 'react'
import axios from 'axios'

// Importing Components
import Landing from './components/Landing/Landing'
import Login from './components/UserAuth/Login';
import Signup from './components/UserAuth/Signup';
import Dashboard from './components/Dashboard/Dashboard.jsx'
import MainApp from './components/Main App/MainApp';
import userStore  from './components/Users/GetUsers';


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
    <div >

      {/* Works like a swicth...case in JS and will only pick the route that matches and the exact path so we get all the exact paths and any extras go to the empty route on the bottom */}
      <Switch>

        <Route exact path='/' component={Landing} />

        <Route exact path="/login" component={ routerProps => <Login history={routerProps.history} />}/>

        <Route exact path="/signup" component={ routerProps => <Signup history={routerProps.history} />}/>

        <Route  exact path = '/dashboard' component = { (routerProps) => isLoggedIn ? <Dashboard history={routerProps.history} /> : <Login {...routerProps.history.push('/login')} /> } />

        <Route exact path = '/notes/:id' component={(routerProps) => isLoggedIn ? <MainApp note={routerProps.match.params.id} /> : <Login {...routerProps.history.push('/login') } />} /> 

        {/* will send any other route which doesn't exist above in here and send it to the login page */}
        <Route component={ routerProps => <Login {...routerProps.history.push('/login') } history={routerProps.history} /> } />

      </Switch>

    </div>
  );
}

export default App;
