import React from 'react'
import { Link } from 'react-router-dom';

function LandingFive() {
    return (
        <div className="bg-white ">
            <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">

                <h2 className="text-3xl font-bold text-black  sm:text-4xl">
                    <span className="block">
                        Ready to be Productive?
                    </span>
                    <span className="block mt-6 text-black">
                        Sign Up Today
                    </span>
                </h2>

                <div className="lg:mt-0 lg:flex-shrink-0">
                    <div className="mt-12 inline-flex rounded-md shadow">

                        <Link to='/signup'>
                            <button type="button" className="py-2.5 px-6  bg-black hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Sign Up
                            </button>
                        </Link>
    
                    </div>
                </div>

            </div>
        </div>
)
}

export default LandingFive
