import React from 'react'

export default function Nav() {
  return (
    <div>
 <div className="App">
      {/* <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav> */}
      <nav className='h-[80px] w-[100%] border-2 border-black flex'>
        <div className='a h-100 w-[17.5%] border-2 border-red-700'>
          <img src="http://www.w3.org/1999/xlink" alt="" />
        </div>
        <div className='b h-100 w-[65%] border-2 border-green-500 flex justify-evenly  list-none '>
          <li className='h-100 py-[25px] hover:text-blue-600 ease-in-out duration-300'>Home</li>
          <li className='h-100 py-[25px] hover:text-blue-600 ease-in-out duration-300'>Products</li>
          <li className='h-100 py-[25px] hover:text-blue-600 ease-in-out duration-300'>E-Store</li>
          <li className='h-100 py-[25px] hover:text-blue-600 ease-in-out duration-300'>vivo Executive store</li>
          <li className='h-100 py-[25px] hover:text-blue-600 ease-in-out duration-300'>Community</li>
          <li className='h-100 py-[25px] hover:text-blue-600 ease-in-out duration-300'>Support</li>
          <li className='h-100 py-[25px] hover:text-blue-600 ease-in-out duration-300'>Funtouch OS</li>
          <li className='h-100 py-[25px] hover:text-blue-600 ease-in-out duration-300'>Explore vivo</li>
          <li className='h-100 py-[25px] hover:text-blue-600 ease-in-out duration-300'>iQOO</li>
        </div>
        <div className='c h-100 w-[17.5%] border-2 border-red-700'>

        </div>
      </nav>




    </div>
    </div>
  )
}
