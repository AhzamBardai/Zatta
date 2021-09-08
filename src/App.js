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

  const isLoggedIn = userStore(state => state.isLoggedIn)
  const urlNotes = userStore(state => state.urlNotes)
  const urlTodos = userStore(state => state.urlTodos)
  const urlUsers = userStore(state => state.urlUsers)
  const user = userStore(state => state.currentUser)

  const setLogedIn = userStore(state => state.setLoggedIn)
  const setUser = userStore(state => state.setCurrentUser)
  const setNotes = userStore(state => state.setNotes) 
  const setTodos = userStore(state => state.setTodos) 

  const username = window.sessionStorage.getItem('username')


  useEffect(() => {
    if(!isLoggedIn && username){
      axios.post("https://zatta1.herokuapp.com/api/users/username", { username: username })
            .then(res => {
              setLogedIn(true)
              setUser(res.data[0])
              return res.data[0]
            })
            .then((res) => {
              axios.get(`https://zatta1.herokuapp.com/api/todos/author/${res._id}`).then(res => {
                setTodos(res.data)
              })
              axios.get(`https://zatta1.herokuapp.com/api/notes/author/${res._id}`).then(res => {
                setNotes(res.data)
              })
            })
    } else if (!isLoggedIn && !username) {
      // axios.delete(`https://zatta1.herokuapp.com/api/users/session/${user.userAuth.SessionID}`)
      axios.put(`https://zatta1.herokuapp.com/api/users/${user._id}`, { userAuth: { isLoggedin: false, sessionID: '' }})
    }
  }, [])

  return (
    <div >

      {/* Works like a swicth...case in JS and will only pick the route that matches and the exact path so we get all the exact paths and any extras go to the empty route on the bottom */}
      <Switch>

        <Route exact path='/' component={Landing} />

        <Route exact path="/login" component={ routerProps => !username ? <Login history={routerProps.history} /> : <Dashboard {...routerProps.history.push('/dashboard')}/>}/>

        <Route exact path="/signup" component={ routerProps => !username ?  <Signup history={routerProps.history} /> : <Dashboard {...routerProps.history.push('/dashboard')} />}/>
      
        <Route exact path = '/dashboard' component = { (routerProps) => username ? <Dashboard history={routerProps.history} /> : <Login {...routerProps.history.push('/login')} /> } />

        <Route exact path = '/notes/:id' component={(routerProps) => username ? <MainApp note={routerProps.match.params.id} /> : <Login {...routerProps.history.push('/login') } />} /> 

        {/* will send any other route which doesn't exist above in here and send it to the login page */}
        <Route component={ routerProps => <Login {...routerProps.history.push('/login') } history={routerProps.history} /> } />

      </Switch>

    </div>
  );
}

export default App;
