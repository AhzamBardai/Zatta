import React from 'react';
import { zavier, ahzam, todd, troi, alec } from './TeamMembers'

function Footer() {

      return (
            <div id='footer'>
                  <footer className="bg-black dark:bg-gray-800 w-full py-8  h-50">
                        <div className="max-w-screen-xl mx-auto px-4">
                              <div className='flex justify-center m-5 '>
                                    <h3 className='text-white'>Zatta App built by</h3>
                              </div>
        
        
                        </div>

                        {/* Orignal team members on this project */}
                        <div className='max-w-screen-md mx-auto font-light flex justify-between mt-3 px-1.5 sm:text-sm'>

                              {zavier}

                              {ahzam}

                              {todd}

                              {troi}
                              
                              {alec}
    
                        </div>
                  </footer>


            </div>
      );
}

export default Footer;