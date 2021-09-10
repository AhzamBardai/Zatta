import React,{ useState } from 'react'
import axios from 'axios'
import userStore  from '../Users/GetUsers';


function SignupForm({ history }) {

    // data from User Store
    const urlUsers = userStore(state => state.urlUsers)
    const setLogedIn = userStore(state => state.setLoggedIn)
    const setUser = userStore(state => state.setCurrentUser)

    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        username: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(urlUsers, userInfo)
            .then(res => {
                setUser(res.data)
                setLogedIn(true)
                window.sessionStorage.setItem('username', res.data.username)
                window.location.reload()
            })
            .catch((err) => {
                setLogedIn(false)
                window.alert('Please try again')
            })
        
    }



    return (
        <form className="mt-10" method="POST" onSubmit={handleSubmit} >
                
            <label htmlFor="name" className="block text-xs font-semibold text-gray-600 uppercase">Full Name</label>
            <input id="name" type="name" name="name" placeholder="First & Last Name" autoComplete="name" minLength='2'
                className="capitalize block w-full py-3 px-2 mt-2 
                text-gray-800 appearance-none 
                border-solid border-2 rounded-2xl border-gray-100
                focus:text-gray-500 focus:outline-none focus:border-gray-200 mb-2"
                required value={userInfo.name} onChange={(e) => {e.preventDefault(); setUserInfo({...userInfo, name: e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)})}} />
 
            <label htmlFor="email" className="block text-xs font-semibold text-gray-600 uppercase">Email Address <span style={{color:'gray'}}><i>(optional)</i></span></label>
            <input id="email" type="email" name="email" placeholder="Email Address" autoComplete="email"
                className="block w-full py-3 px-2 mt-2 
                text-gray-800 appearance-none 
                border-solid border-2 rounded-2xl border-gray-100
                focus:text-gray-500 focus:outline-none focus:border-gray-200 mb-2"
                 value={userInfo.email} onChange={(e) => {e.preventDefault(); setUserInfo({...userInfo, email: e.target.value})}} />

            <label htmlFor="username" className="block text-xs font-semibold text-gray-600 uppercase mt-2">Username</label>
            <input id="username" type="text" name="username" placeholder="Username" autoComplete="name" minLength='5'
                className="block w-full py-3 px-2 mt-2 
                text-gray-800 appearance-none 
                border-solid border-2 rounded-2xl border-gray-100
                focus:text-gray-500 focus:outline-none focus:border-gray-200 mb-2"
                required value={userInfo.username} onChange={(e) => {e.preventDefault(); setUserInfo({...userInfo, username: e.target.value})}} />

            
            <label htmlFor="password" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
            <input id="password" type="password" name="password" placeholder="Password" autoComplete="current-password" minLength='8'
                className="block w-full py-3 px-2 mt-2
                text-gray-800 appearance-none 
                border-solid border-2 rounded-2xl border-gray-100
                focus:text-gray-500 focus:outline-none focus:border-gray-200 mb-2"
                required value={userInfo.password} onChange={(e) => {e.preventDefault(); setUserInfo({...userInfo, password: e.target.value})}} />

            
            <button type="submit"
                className="w-full py-3 mt-10 bg-black rounded-md
                font-medium text-white uppercase
                focus:outline-none hover:bg-gray-700 hover:shadow-none">
                Sign Up
            </button>
            <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm justify-center text-center">
                
            <p>If you have an account
                    <a href="register" className=" text-black  ml-1 ">
                    Sign In
                </a>
                
                    </p>
                
            </div>

        </form>

    )
}

export default SignupForm
