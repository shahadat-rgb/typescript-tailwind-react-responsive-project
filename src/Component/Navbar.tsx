import React from 'react';


import logo from '../UI/logo_white.png'

const Navbar = () => {
     
     // const menuToggle = {
     //      display: block,
     // 
    return (
         <div >
             
             <header className="lg:px-16 px-6 flex flex-wrap items-center lg:py-0 py-2 ">
    <div className="flex-1  flex justify-between items-center">
      <a href="#">
           <img className='h-10' src={logo} alt="" />
            {/* <p className='f'>arfdfdfdf</p> */}
    </a>
  </div>

  {/* <div className="lg:flex-1  content-none  lg:justify-center ">
      <a href="#" className='text-white font-body font-bold mr-3.5'>  Home   </a>
      <a href="#" className='text-white '>Portfolio</a>
  </div> */}



  <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden block"><svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></label>
  <input className="hidden" type="checkbox" id="menu-toggle" />


  <div className="hidden lg:flex  lg:w-auto w-full" id="menu">
    <nav>
      <ul className="lg:flex text-base text-white pt-4 lg:py-2">
      <li className='text-white font-body pt-2 font-bold mr-3.5'>  Home   </li>
      <li className='text-white mr lg:mr-48 pt-2 '>Portfolio </li>
     <button className='uppercase mr-5 lg:ml-48   text-xs rounded-full text-purple-600 font-body font-bold mx-auto shadow bg-white    pt-3  pl-9  pb-3 pr-9'> hire me  </button>             
  </ul>
    </nav>
     
  </div>

  </header>
  <hr className='bg-gray-600 bg-opacity-100'/>
         </div>
         
    );
};

export default Navbar;