import React from 'react'
import zattaTasks from '../../Videos/Zatta Create Tasks.gif'

function LandingFour() {
    return (
        <div className="px-4 py-16 md:flex-col-reverse mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
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
)
}

export default LandingFour
