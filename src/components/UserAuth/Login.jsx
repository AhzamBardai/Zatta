import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';

function Login({ history }) {
      return (
            <div>

                
            <div className="flex flex-col h-screen bg-gray-100">
                
                <div className="grid place-items-center mx-2 my-20 sm:my-auto">
                    
                    <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
                        px-6 py-10 sm:px-10 sm:py-6 
                        bg-white rounded-lg shadow-md lg:shadow-lg">

                        <Link to='/'><button className='text-black underline'>Back to home</button></Link>

                        <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
<<<<<<< HEAD
                            Log in
=======
                            login
>>>>>>> c91fa35 (merge with finaltodd)
                        </h2>

                        <LoginForm history={history} />

                    </div>
                </div>
            </div>
                
        </div>
      );
}

export default Login;