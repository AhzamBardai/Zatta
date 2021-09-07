import React from 'react';

function Signup(props) {
      return (
            <div>
                  <div class="flex flex-col h-screen sm:h-auto bg-gray-100 overflow-scroll ">
    
    <div class="grid place-items-center mx-2 my-10 sm:my-auto ">
        
        <div class="w-11/12 p-10 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
            px-6 py-10 sm:px-10 sm:py-6 sm:mt-auto
            bg-white rounded-lg shadow-md lg:shadow-lg md:h-auto">

            
            <h2 class="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
               Sign Up
            </h2>

            <form class="mt-10" method="POST">
                
                <label for="email" class="block text-xs font-semibold text-gray-600 uppercase">First Name</label>
                <input id="username" type="name" name="first name" placeholder="First Name" autocomplete="name"
                    class="block w-full py-3 px-2 mt-2 
                    text-gray-800 appearance-none 
                    border-solid border-2 rounded-2xl border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200 mb-2"
                    required />
                <label for="email" class="block text-xs font-semibold text-gray-600 uppercase">Email Address</label>
                <input id="username" type="email" name="last name" placeholder="Email Address" autocomplete="name"
                    class="block w-full py-3 px-2 mt-2 
                    text-gray-800 appearance-none 
                    border-solid border-2 rounded-2xl border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200 mb-2"
                    required />
                <label for="email" class="block text-xs font-semibold text-gray-600 uppercase mt-2">Username</label>
                <input id="username" type="email" name="username" placeholder="Username" autocomplete="username"
                    class="block w-full py-3 px-2 mt-2 
                    text-gray-800 appearance-none 
                    border-solid border-2 rounded-2xl border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200 mb-2"
                    required />

                
                <label for="password" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
                <input id="password" type="password" name="password" placeholder="Password" autocomplete="current-password"
                    class="block w-full py-3 px-2 mt-2
                    text-gray-800 appearance-none 
                    border-solid border-2 rounded-2xl border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200 mb-2"
                    required />

                
                <button type="submit"
                    class="w-full py-3 mt-10 bg-black rounded-md
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none">
                    Sign Up
                </button>
                <div class="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm justify-center text-center">
                    
                  <p>If you have an account
                        <a href="register" class=" text-black  ml-2 hover:text-gray-900 ">
                         Sign In
                    </a>
                    
                         </p>
                    
                </div>

            </form>
        </div>
    </div>
</div>
                  
                  
            </div>
      );
}

export default Signup;