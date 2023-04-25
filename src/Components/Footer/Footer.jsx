import React from 'react'

const Footer = () =>{
  return (
    <footer className="bg-white rounded-lg shadow m-4 h-0 dark:bg-gray-800">
        <div className="bg-white w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className=" text-sm text-black sm:text-center">© 2023 <a href="https://flowbite.com/" class="hover:underline">BulletJournal™</a>. All Rights Reserved.
        </span>
        <ul className=" flex flex-wrap items-center mt-1 text-sm font-medium text-black sm:mt-0">
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
            </li>
            <li>
                <a href="#" class="hover:underline">Contact</a>
            </li>
        </ul>
        </div>
    </footer>
  )
}

export default Footer

