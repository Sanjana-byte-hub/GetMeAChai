import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
   <footer className='bg-gray-600 text-white h-16 flex justify-center items-center px-4'>
<p className='text-center'>Copyright &copy; {currentYear} Get me a Chai - All rights reserved</p>
   </footer>
  )
}

export default Footer