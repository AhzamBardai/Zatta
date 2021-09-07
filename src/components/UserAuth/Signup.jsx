import React from 'react';
import SignupForm from './SignupForm';
import { useMediaQuery } from 'react-responsive'

function Signup({ history }) {

    const isHeight = useMediaQuery({ query: '(min-height: 700px )' })

      return (
            <div class="flex flex-col justify-center ">
                  <div class={`flex flex-col ${ isHeight ? 'h-screen' : 'max-h-full' } bg-gray-100 overflow` }>
    
                    <div class="grid place-items-center mx-2 my-20 sm:my-auto">
                        
                        <div class={` ${ !isHeight && 'my-10' } w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
                            px-6 py-10 sm:px-10 sm:py-6 
                            bg-white rounded-lg shadow-md lg:shadow-lg`}>

                            
                            <h2 class="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
                            Sign Up
                            </h2>

                            <SignupForm history={history} />

                        </div>
                    </div>
                </div> 
                  
            </div>
      );
}

export default Signup;