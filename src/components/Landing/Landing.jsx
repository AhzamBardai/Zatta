import React from 'react';
import './styles/navbar.css'
import Navigation from './Navigation';
import Footer from './Footer';



function Landing(props) {
     

      return (
            <div className='bg-gray-50'>
              {/* Navigation Component */}
              <Navigation/>
            
                <div className="bg-gray-50 dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
                    <div className="container mx-auto px-6 flex relative py-8 mt-10">
                        <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                        {/* Heading Text*/}
                            <h1 className="text-6xl sm:text-8xl font-bold flex flex-col  dark:text-white text-black">
                                Take Notes
                                <span className="text-3xl sm:text-7xl mt-4 text-black">
                                With Ease 
                                </span>
                            </h1>
                            {/* Paragraph Description */}
                            <p className="text-lg sm:text-base md:text-2xl text-gray-700 dark:text-white mt-8">
                            Zatta is a breathtaking note taking platform, allowing users to log in to their respective accounts write new, access, edit, save their notes. Anyone wanting to write notes and having them saved forever for them to refer back to later,will be in perfect line of our use case.
                            </p>
                            
                        </div>
                        {/* Image Section*/}
                        <div className=" hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                            <img alt='nav' src="https://www.datocms-assets.com/31864/1603288258-macbook-clay-black-white-frontal-8-psd-2x-1.jpg?auto=format" className=" ml-4 p-4 rounded-md w-full"/>
                        </div>
                    </div>
                </div>
                {/* How it works section */}
                <h1 className="mt-32 text-center text-5xl text-black-600 font-bold mb-10">How it works</h1>

                {/* Box 1 */}
                <div className="sm:flex flex-wrap justify-center items-center text-center gap-8 mb-10 mt-10">
                
                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6  shadow-lg rounded-lg dark:bg-gray-800 transform hover:scale-110 transition duration-500">
                        <div className="flex-shrink-0">
                            <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-black text-white">
                                <svg width="20" height="20" fill="currentColor" className="h-6 w-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
                            First Reason
                        </h3>
                        <p className="text-md  text-gray-500 dark:text-gray-300 py-4">
                        Dummy Text for the reasons of how the applicaiton works
                        </p>
                    </div>
                    {/* Box 2 */}
                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4  mt-6 bg-white shadow-lg rounded-lg dark:bg-gray-800 transform hover:scale-110 transition duration-500">
                        <div className="flex-shrink-0">
                            <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-black text-white">
                                <svg width="20" height="20" fill="currentColor" className="h-6 w-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
                            Second Reason
                        </h3>
                        <p className="text-md text-gray-500 dark:text-gray-300 py-4">
                        Dummy Text for the reasons of how the applicaiton works
                        </p>
                    </div>
                    {/* Box 3 */}
                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mt-6  px-4 py-4 bg-white shadow-lg rounded-lg dark:bg-gray-800 transform hover:scale-110 transition duration-500">
                        <div className="flex-shrink-0">
                            <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-black text-white">
                                <svg width="20" height="20" fill="currentColor" className="h-6 w-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
                            Third Reason
                        </h3>
                        <p className="text-md  text-gray-500 dark:text-gray-300 py-4">
                        Dummy Text for the reasons of how the applicaiton works
                        </p>
                    </div>
                </div>
                {/* Footer Component */}
                <Footer/>
            
            </div>
      );
}

export default Landing;