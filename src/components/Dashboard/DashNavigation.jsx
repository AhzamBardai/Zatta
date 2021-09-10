import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import userStore  from '../Users/GetUsers';
import axios from 'axios';



function Navigation() {

    // modal state
    const [openMenu,setopenMenu]=useState(false)

    // zustand states
    const setLogedIn = userStore(state => state.setLoggedIn)
    const isLoggedIn = userStore(state => state.isLoggedIn)
    const setNotes = userStore(state => state.setNotes) 
    const setTodos = userStore(state => state.setTodos) 
    const setUser = userStore(state => state.setCurrentUser)
    const user = userStore(state => state.currentUser)
    const urlUsers = userStore(state => state.urlUsers)

    // logout functionality
    const logout = () => {
        setUser({})
        setLogedIn(false)
        setNotes([])
        setTodos([])
        window.sessionStorage.removeItem('username')
        axios.delete(`${urlUsers}session/${user.userAuth.SessionID}`)
        axios.put(urlUsers + user._id, { userAuth: { isLoggedin: false, sessionID: '' }})
    } 

    function handleClick(){
        setopenMenu(!openMenu);
    }


    // tail wind nav
      return (
        <div>
            <nav className="bg-gray-50 shadow-lg dark:bg-gray-800">
              <div className="container px-6 py-4 mx-auto">
                  <div className="lg:flex lg:items-center lg:justify-between align">
                      <div className="flex items-center justify-between">
                          <div className="text-xl font-semibold text-gray-700">
                              <p className="text-2xl font-bold text-black dark:text-white lg:text-4xl hover:text-gray-700 dark:hover:text-gray-300 no-underline" >Hello, {user.name}</p>
                          </div>

                          <div className='flex lg:hidden '>
                              <button type="button" onClick={handleClick} className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400 " aria-label="toggle menu">

                                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                  {!openMenu &&(<path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />)} 

                                  {openMenu &&(<path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />)}
                                  </svg>
                              </button>
                          </div>
                      </div>
                      <div className={`lg:flex lg:align-items-center mb-2  ${openMenu ? "block transform translate-y-6":"hidden "}`}>
                      <a href='/' className="block mx-4 mt-3 text-md text-black lg:mt-0 hover:text-gray-600 no-underline">Home</a>
                      <Link to="/Login" className="no-underline">
                            <button className=" block py-1.5 px-2.5 mt-2.5 mx-4 bg-black rounded-md text-md
                                font-medium text-white 
                                focus:outline-none hover:bg-gray-300 hover:shadow-none " onClick={() => isLoggedIn && logout()  }>
                                { !isLoggedIn ? 'Login' : 'Log Out' }
                            </button>
                        </Link>
                      </div>
                  </div>
              </div>
            </nav>
    
        </div>
      );
}

export default Navigation;