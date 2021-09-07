import React ,  {useState} from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import userStore  from '../Users/GetUsers';
import DashNewNote from './DashNewNote';




function DashHeader(props) {

    const setLoggedIn = userStore(state => state.setLoggedIn)
    const setUser = userStore(state => state.setCurrentUser)
    const [openMenu,setopenMenu]=useState(false)


    function handleClick(){
        setopenMenu(!openMenu);
    }

    
    return (
            <div>
            
            <nav class="bg-gray-50 shadow dark:bg-gray-800">
        <div class="container px-6 py-4 mx-auto ">
            <div class="lg:flex lg:justify-between lg:align-items-center">
                <div class="flex align-items-center justify-between">
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
                

                <div class={`mx-4 mt-1 lg:flex lg:align-items-center transform ${!openMenu ? "block":"hidden"}`}>

                    <Link to="/login" style={{textDecoration: "none", marginRight: '10px'}}>
                        <Button style={{display: "flex", justifyContent: "right"}} onClick={() => {setLoggedIn(false); setUser({})}} variant="primary">Log out</Button>
                    </Link>

                   
                   <DashNewNote/>
                </div>
            </div>
        </div>
    </nav>
            
            </div>
           
            
           
    );
}

export default DashHeader;