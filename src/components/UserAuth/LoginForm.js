import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import userStore  from '../Users/GetUsers';

function LoginForm({ history }) {

    // data from user store
    const urlNotes = userStore(state => state.urlNotes)
    const urlUsers = userStore(state => state.urlUsers)
    const setNotes = userStore(state => state.setNotes) 
    const setLogedIn = userStore(state => state.setLoggedIn)
    const user = userStore(state => state.currentUser)
    const setUser = userStore(state => state.setCurrentUser)
    const [currUser, setCurrUser] = useState({})
    const [response, setResponse] = useState(null)


    const [loginInfo, setLoginInfo] = useState({
        username: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(urlUsers + '/login', loginInfo)
            .then(res => {
                if(res.data){

                    axios.get(urlUsers).then(res => {
                        const arr = res.data.filter(item => item.username === loginInfo.username)
                        console.log(arr[0])
                        setCurrUser(arr)
                        const haha = res
                        setResponse(haha)
                        console.log(haha)
                        console.log(currUser)
                    })
                    .then(() =>  axios.get(urlNotes + `/author/${currUser._id}`).then(res => {
                        setNotes(res.data)
                    }) )
                    setUser(currUser)
                    setLogedIn(true)
                    history.push('/dashboard')
                } else {
                    setLogedIn(false)
                    window.alert('Incorrect username or password')
                }
            })
        
        setLoginInfo({username: '', password: ''})
    }
    


    return (
        <form class="mt-10" method="POST" onSubmit={handleSubmit}>
                            
        <label for="username" class="block text-xs font-semibold text-gray-600 uppercase">Username</label>
        <input id="username" type="text" name="username" placeholder="username" autocomplete="username"
            class="block w-full py-3 px-2 mt-2 
            text-gray-800 appearance-none 
            border-solid border-2 rounded-2xl border-gray-100
            focus:text-gray-500 focus:outline-none focus:border-gray-200"
            required value={loginInfo.username} onChange={(e) => {e.preventDefault(); setLoginInfo({...loginInfo, username: e.target.value})}} />

        
        <label for="password" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
        <input id="password" type="password" name="password" placeholder="password" autocomplete="current-password"
            class="block w-full py-3 px-2 mt-2 mb-4
            text-gray-800 appearance-none 
            border-solid border-2 rounded-2xl border-gray-100
            focus:text-gray-500 focus:outline-none focus:border-gray-200"
            required value={loginInfo.password} onChange={(e) => {e.preventDefault(); setLoginInfo({...loginInfo, password: e.target.value})}} />

        
        <button type="submit"
            class="w-full py-3 mt-10 bg-black rounded-md
            font-medium text-white uppercase
            focus:outline-none hover:bg-gray-700 hover:shadow-none"
            >
            Login
        </button>

        
        <div class="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
            <a href="forgot-password" class="flex-2 underline">
                Forgot password?
            </a>

            <p class="flex-1 text-gray-500 text-md mx-4 my-1 sm:my-auto">
                or
            </p>

            <Link to='/signup' class="flex-2 underline">
                Create an Account
            </Link>
        </div>
    </form>
)
}

export default LoginForm
