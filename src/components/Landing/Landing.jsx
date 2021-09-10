import React from 'react';
import { Link } from 'react-router-dom';
import './styles/navbar.css'
import Navigation from './Navigation';
import Footer from './Footer';
import imageMock from '../images/Zatta-app2.png'
import zattaSignup from '../Videos/Zatta Signup Cropped.gif'
import zattaNotes from '../Videos/Zatta Note Taking.gif'
import zattaTasks from '../Videos/Zatta Create Tasks.gif'


function Landing(props) {
     

      return (
            <div className='bg-gray-100'>
                {/* Navigation Component */}
                          <Navigation/>
                        
                          
                {/*Left column text */}      
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
                        See How It Works<svg className='ml-3 animate-bounce' xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='white' stroke='white' viewBox="0 0 24 24">
                        <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/>
                        </svg></button>


                        </a>
                      </div>
                    </div>
                  </div>
                  {/*Image Section*/} 
                  <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-auto">
                    <img
                      className="object-cover w-full h-56 lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
                      src={imageMock}
                      alt=""
                    />
                  </div>
                </div>

              
                          
                          
                          
                          
                          
                          
                          
              

            {/* How It Works Section*/}
                <h1 id='how-it-works' className="mt-48 text-center sm:text-2xl md:text-4xl xl:mt-96 text-black-600 font-bold mb-10">How it works</h1>


                            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full h-screen lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                  <div className="grid gap-12 row-gap-8 lg:grid-cols-2 ">
                    <div className=''>
                      <img
                        className="object-contain w-full h-56 rounded-lg  sm:h-96 transform hover:scale-110 transition duration-500"
                        src={zattaSignup}
                        alt=""
                      />
                    

                    
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="max-w-xl mb-6 sm:mt-15">
                      <div className="flex-shrink-0">
                                        <div className="flex items-center  justify-center h-12 w-12 rounded-md bg-black text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='currentColor'viewBox="0 0 24 24">
                                            <path d="M8.793 8.951c1.062-.757 2.542-.239 2.912 1-.655-.502-1.528-.482-2.2-.002-.677.482-.976 1.303-.716 2.082-1.05-.755-1.055-2.325.004-3.08zm3.164 10.8c.841.283 3.443 1.003 6.458 3.249l5.585-3.984c-1.448-2.031-1.05-3.452-2.489-5.471-.726-1.017-1.222-1.294-1.845-1.294-.22 0-.456.035-.724.084l.507.71c.306.428-.34.889-.646.46l-.452-.634c-.149-.21-.357-.281-.596-.281-.345 0-.753.148-1.141.237l.615.862c.304.428-.34.889-.646.46l-.533-.747c-.148-.208-.353-.28-.586-.28-.359 0-.787.17-1.186.271l.65.912c.306.429-.343.887-.646.46l-2.638-3.693c-.817-1.148-2.612.07-1.765 1.259l3.895 5.461c-.418-.154-1.152-.295-1.632-.295-1.481.003-2.051 1.628-.185 2.254zm-2.715-2.751h-6.242v-14h18v7.516c1.359.555 2.391 2.046 3 3.372v-10.888c0-1.104-.896-2-2-2h-20c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h6.825c-.111-.69.002-1.358.417-2z"/>
                                        </svg>
                                        </div>
                                    </div>
                          
                          
                        <h2 className="flex-row max-w-lg mt-6 mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                        Sign Up
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                        Click the Sign Up Button to create an account with a username and password.
                        </p>
                      </div>
                      
                    </div>
                  </div>
                </div>

                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full h-screen lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                  <div className="flex flex-col-reverse sm:flex-col-reverse md:flex-col-reverse lg:flex-row xl:flex-row ">
                    
                    <div className="flex flex-col justify-center">
                      <div className="max-w-xl mt-6 mb-6 sm:mt-20">
                      <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-black text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='currentColor' viewBox="0 0 24 24">
                                            <path d="M15.812 4.819c-.33-.341-.312-.877.028-1.207l3.469-3.365c.17-.164.387-.247.603-.247.219 0 .438.085.604.257l-4.704 4.562zm-5.705 8.572c-.07.069-.107.162-.107.255 0 .194.158.354.354.354.089 0 .178-.033.247-.1l.583-.567-.493-.509-.584.567zm4.924-6.552l-1.994 1.933c-1.072 1.039-1.619 2.046-2.124 3.451l.881.909c1.419-.461 2.442-.976 3.514-2.016l1.994-1.934-2.271-2.343zm5.816-5.958l-5.137 4.982 2.586 2.671 5.138-4.98c.377-.366.566-.851.566-1.337 0-1.624-1.968-2.486-3.153-1.336zm-11.847 12.119h-4v1h4v-1zm9-1.35v1.893c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-7.362v-20h12.629l2.062-2h-16.691v24h10.189c3.163 0 9.811-7.223 9.811-9.614v-4.687l-2 1.951z"/>
                                            </svg>
                                        </div>
                                    </div>
                        <h2 className="max-w-lg mt-6 mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                        Take Your Notes
                        
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                        On the dashboard add a new note and write your desired notes.
                        </p>
                      </div>
                      
                    </div>
                    <div >
                      <img
                        className="bg-contain md:w-full lg:w-auto lg:object-contain md:shadow-lg h-56 rounded-md shadow-lg sm:h-96 transform hover:scale-110 transition duration-500 xl:ml-10"
                        src={zattaNotes}
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div className="px-4 py-16 md:flex-col-reverse mx-auto sm:max-w-xl h-screen md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                  <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row">
                    <div>
                      <img
                        className=" mb-6 md:object-contain lg:object-contain md:w-full md:shadow-lg lg:w-auto h-56 rounded-md  sm:h-96 transform hover:scale-110 transition duration-500 "
                        src={zattaTasks}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col justify-center ">
                      <div className="max-w-xl mb-6 lg:ml-10 xl:ml-10 sm:mt-20">
                      <div className="flex-shrink-0 ">
                                        <div className="flex items-center  justify-center h-12 w-12 rounded-md mb-6 bg-black text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" fill='currentColor' height="24" viewBox="0 0 24 24">
                                            <path d="M10.041 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591zm-5.041-15c-1.654 0-3 1.346-3 3v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-14c0-1.654-1.346-3-3-3h-14zm19 3v14c0 2.761-2.238 5-5 5h-14c-2.762 0-5-2.239-5-5v-14c0-2.761 2.238-5 5-5h14c2.762 0 5 2.239 5 5z"/>
                                            </svg>

                                        </div>
                                    </div>
                        <h2 className="max-w-lg font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                        Manage Your Tasks
                        
                        </h2>
                        <p className="text-base mt-6 text-gray-700 md:text-lg">
                        Create your task for the day and check them off as you are done.
                        </p>
                      </div>
                      
                    </div>
                  </div>
                </div>

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
            


            {/* Footer Component */}
            <Footer/>
            
            </div>
      );
}

export default Landing;