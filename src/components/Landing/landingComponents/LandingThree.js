import React from 'react'
import zattaNotes from '../../Videos/Zatta Note Taking.gif'

function LandingThree() {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
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

                    <img className="bg-contain md:w-full lg:w-auto lg:object-contain md:shadow-lg h-56 rounded-md shadow-lg sm:h-96 transform hover:scale-110 transition duration-500 xl:ml-10"
                        src={zattaNotes} alt="" />

                </div>

        </div>
      </div>

)
}

export default LandingThree
