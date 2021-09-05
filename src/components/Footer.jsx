import React from 'react';

function Footer(props) {
      return (
            <div>
                  <footer class="bg-black dark:bg-gray-800 w-full py-8  h-50">
    <div class="max-w-screen-xl mx-auto px-4">
        <ul class="max-w-screen-md mx-auto text-lg font-light flex flex-wrap justify-between">
            <li class="my-2">
                <a class="text-gray-400 hover:text-gray-300 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="#">
                    FAQ
                </a>
            </li>
            <li class="my-2">
                <a class="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="#">
                    Github
                </a>
            </li>
            <li class="my-2">
                <a class="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="#">
                    LinkedIn
                </a>
            </li>
        </ul>
        
    </div>
</footer>

            </div>
      );
}

export default Footer;