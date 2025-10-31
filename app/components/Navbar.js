"use client"
import React,{useState} from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'


const Navbar = () => {
    const { data: session } = useSession()
    const [showdropdown, setShowdropdown] = useState(false)



  return (
   <nav className='bg-blue-950 text-lg text-white md:h-16 items-center flex justify-between px-4 flex-col md:flex-row'> 
   
   <Link className='logo font-bold text-2xl flex justify-center items-center' href={"/"}> <img  src="/cup.png" alt="Fund yourself" className="invert w-[60px] h-[60px] rounded-full  object-cover   " />
    <span className='mt-5 text-xl md:text-base'>GetMeaChai</span>
   </Link>
  
   
  <div className='relative flex flex-col md:block gap-4'>
   {session && <>
<button
  onClick={() => setShowdropdown(!showdropdown)}
  id="dropdownDefaultButton"
  className="text-white mx-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  type="button"
>
  Welcome {session.user.email}
  <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
  </svg>
</button>

<div className={`z-10 ${showdropdown ? "" : "hidden"} absolute left-[125px] bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700`}>
  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
    <li>
      <Link
        href="/dashboard"
        onClick={() => setShowdropdown(false)}
        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        Dashboard
      </Link>
    </li>
    <li>
      <Link
        href={`/${session.user.name}`}
        onClick={() => setShowdropdown(false)}
        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        Your Page
      </Link>
    </li>
    <li>
      <button
        onClick={() => signOut()}
        className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        Sign out
      </button>
    </li>
  </ul>
</div>



<div id="dropdown" className={`z-10 ${showdropdown?"":"hidden"} absolute left-[125px] bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700`}>
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <Link href= "/dashboard" 
        onClick={() => setShowdropdown(false)} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
      </li>

      <li>
      {session?.user?.name ? (
  <Link
    prefetch={false}
    href={`/${session.user.name}`}
    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
  >
    Your page
  </Link>
) : (
  <button
    disabled
    className="block px-4 py-2 text-gray-400 cursor-not-allowed"
  >
    Loading...
  </button>
)}

      </li>



     
      <li>
        <Link onClick={()=>{signOut()}}  href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
      </li>
    </ul>
</div></>
 }
   
   

 {session && 
   <button  onClick={()=>{signOut()}} class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
Logout
</span></button>}


    {!session && <Link href={"/login"}>
   <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"   >
<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
Login
</span></button></Link>}
  </div>
   </nav>
  )
}

export default Navbar
