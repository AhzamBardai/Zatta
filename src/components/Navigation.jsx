import React, { useState } from 'react';
import { Link , Switch } from 'react-router-dom'
import Login from './Login';


function Navigation(props) {

    const [openMenu,setopenMenu]=useState(false)

    function handleClick(){
        setopenMenu(!openMenu);
    }
      return (
            <div>
      <nav class="bg-gray-50 shadow dark:bg-gray-800">
        <div class="container px-6 py-4 mx-auto">
            <div class="lg:flex lg:items-center lg:justify-between">
                <div class="flex items-center justify-between">
                    <div class="text-xl font-semibold text-gray-700">
                        <a class="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300 no-underline" href="/">Zatta</a>
                    </div>
        
                    
                    <div class='flex lg:hidden '>
                        <button type="button" onClick={handleClick} class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400 " aria-label="toggle menu">
                            
                            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                            {openMenu &&(<path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />)} 
                               
                            {!openMenu &&(<path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />)}
                            </svg>
                        </button>
                    </div>
                </div>
                
                <div class="hidden mx-4 lg:flex lg:items-center">
                    <a href='#' class="block mx-4 mt-2 text-sm text-gray-700 capitalize lg:mt-0 dark:text-gray-200 ">Home</a>
                    <a href="#" class="block mx-4 mt-2 text-sm text-gray-700 capitalize lg:mt-0 dark:text-gray-200 ">About</a>
                  
                <Switch>

                <Link to="/Login"><button class=" block py-3 px-4 mt-2 mx-4 bg-black rounded-md text-sm
                    font-medium text-white 
                    focus:outline-none hover:bg-gray-300 hover:shadow-none ">
                    Login
                </button></Link>

                </Switch>
                
                
                </div>
            </div>
        </div>
    </nav>
            </div>
      );
}

export default Navigation;