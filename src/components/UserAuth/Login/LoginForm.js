import React, { useState } from 'react';
import axios from 'axios'
import userStore  from '../../Users/GetUsers';
import PasswordModal from '../PasswordModal';
import LoginFormInput from './LoginFormInput';

function LoginForm({ history }) {

    // data from user store
    const urlNotes = userStore(state => state.urlNotes)
    const urlTodos = userStore(state => state.urlTodos)
    const urlUsers = userStore(state => state.urlUsers)
    // set state functions
    const setNotes = userStore(state => state.setNotes) 
    const setTodos = userStore(state => state.setTodos) 
    const setLogedIn = userStore(state => state.setLoggedIn)
    const setUser = userStore(state => state.setCurrentUser)
    
    const [modal, setModal] = useState(false)
    const [loginInfo, setLoginInfo] = useState({
        username: '',
        password: '',
        email: '',
        _id: '',
    })

    // backend calls for validating user info and populating notes and todos in zustand
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(urlUsers + 'login', loginInfo)
            .then(res => {
                if(res.data.length){
                    const sessionID = res.data
                    axios.get(urlUsers + `session/${res.data}`)
                        .then(res => {
                            axios.get(urlNotes + `author/${res.data.user._id}`).then(res => {
                                setNotes(res.data)
                            })
                            return res.data.user
                        })
                        .then(res => {
                            axios.get(urlTodos + `author/${res._id}`).then(res => {
                                setTodos(res.data)
                            })
                            return res
                        })
                        .then(res => {
                            axios.put(urlUsers + `${res._id}`, { userAuth: { isLoggedin: true, SessionID: sessionID }})
                            return res
                        })
                        .then(res => {
                            setUser(res)
                            window.sessionStorage.setItem('username', res.username)
                        }).then(() => {
                            setLogedIn(true)
                            window.location.reload()   
                        })                    

                    }  
                    // incorrect password
                    else {
                        setLogedIn(false)
                        setModal(true)
                    }
                })
                
        window.sessionStorage.getItem('username') && history.push('/dashboard')
        setLoginInfo({username: '', password: ''})
    }


    return (
        <form className="mt-10" method="POST" onSubmit={handleSubmit}>
                            
            <LoginFormInput loginInfo={loginInfo} setLoginInfo={setLoginInfo} />

            { modal && <PasswordModal modal={modal} setModal={setModal} string={'Username or Password Incorrect'}/> }

        </form>
    )
}

export default LoginForm
