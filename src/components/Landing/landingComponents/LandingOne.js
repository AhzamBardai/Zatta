import React from 'react'
import imageMock from '../../images/Zatta-app2.png'

function LandingOne() {

    
    // Left First component on the landing page with mock mackbook and hash link    

    return (
        <div className="  relative flex flex-col py-10 lg:pt-8 mt-6 mb-32 lg:flex-col lg:pb-8">
            <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl ">
            <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">

                <div className="max-w-xl mb-6">

                <h1 className='text-gray-900 text-4xl font-bold'>Take Notes and <br/>Manage Tasks With Ease</h1>

                <p className="text-base text-gray-700 md:text-lg lg:text-xl mt-3">
                    Zatta is a note taking platform, allowing users to write, access, edit, and save their notes. 
                </p>

                </div>

                {/*Button with animation */}   
                <div className=" flex flex-col items-center md:flex-row">
                
                <a href="#how-it-works" className='no-underline'>

                <button className='justify-center w-full shadow-md md:w-auto  md:mb-0 py-3.5 px-6 mt-2.5  mb-3 bg-black rounded-md  text-white inline-flex'>
                    See How It Works
                    <svg className='ml-3 animate-bounce' xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='white' stroke='white' viewBox="0 0 24 24">
                        <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/>
                    </svg>
                </button>

                </a>

                </div>
            </div>
            </div>

            {/*Image Section*/} 
            <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-auto">
            <img className="object-cover w-full h-56 lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
                src={imageMock} alt="Mock macbook" />
            </div>
        </div>

      
    )
}

export default LandingOne
