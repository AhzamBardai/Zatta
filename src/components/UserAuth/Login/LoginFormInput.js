import React from 'react'
import { Link } from 'react-router-dom';


function LoginFormInput({ loginInfo, setLoginInfo }) {
    return (
        <>
                    <label htmlFor="username" className="block text-xs font-semibold text-gray-600 uppercase">Username<span style={{color:'gray'}}><i>(Case Sensitive)</i></span></label>
        <input id="username" type="text" name="username" placeholder="username" autoComplete="username"
            className="block w-full py-3 px-2 mt-2 
            text-gray-800 appearance-none 
            border-solid border-2 rounded-2xl border-gray-100
            focus:text-gray-500 focus:outline-none focus:border-gray-200"
            required value={loginInfo.username} onChange={(e) => {e.preventDefault(); setLoginInfo({...loginInfo, username: e.target.value})}} />

        
        <label htmlFor="password" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
        <input id="password" type="password" name="password" placeholder="password" autoComplete="current-password"
            className="block w-full py-3 px-2 mt-2 mb-4
            text-gray-800 appearance-none 
            border-solid border-2 rounded-2xl border-gray-100
            focus:text-gray-500 focus:outline-none focus:border-gray-200"
            required value={loginInfo.password} onChange={(e) => {e.preventDefault(); setLoginInfo({...loginInfo, password: e.target.value})}} />

        
        <button type="submit"
            className="w-full py-3 mt-10 bg-black rounded-md
            font-medium text-white uppercase
            focus:outline-none hover:bg-gray-700 hover:shadow-none"
            >
            Login
        </button>

        
        <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
            <a href="forgot-password" className="flex-2 underline text-black">
                Forgot password?
            </a>

            <p className="flex-1 text-gray-500 text-md mx-4 my-1 sm:my-auto">
                or
            </p>

            <Link to='/signup' className="flex-2 underline text-black">
                Create an Account
            </Link>
        </div>

        </>
    )
}

export default LoginFormInput
