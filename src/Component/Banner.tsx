import React from 'react'
import banner from "../UI/image_01.png"
import shape from "../UI/Shape_02.png"
import Navbar from './Navbar'

const Banner = () => {
    return (
        
        <div className="bg-gradient-to-r from-orchid to-purple-800 h-auto">
          <Navbar></Navbar>
            <div className="container mx-auto lg:px-20 flex md:flex-row flex-col lg:pt-16 items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 pt-5 md:pr-16 flex flex-col md:items-start md:text-left  md:mb-0 items-center text-center">
                    <h1 className="title-font   text-4xl  mb-4  text-white font-body font-bold "> <span className='text-xs font-body'>Business  Workfollow</span> <br className="hidden lg:inline-block " /> <br />  Get the most <br /> efficent design Ui design for your business now </h1>
                    <p className="mb-16 leading-relaxed mt-3 text-gray-200 font-body">Copper mug try-hard for webiste pitchfork pour-over freegan heirloom neutra .</p>
                    <div className=" lg:mx-px">

                  <button className='uppercase mr-2 text-xs rounded-full text-purple-600 font-body font-bold mx-auto shadow bg-white   lg:px-14 lg:py-3.5   sm:px-14 sm:py-3.5  l px-left  py-4 mb-3 '> hire me </button>             
                  <button className='uppercase  text-xs rounded-full  text-white font-body  shadow  border-white border-2   lg:py-3 lg:px-12    px-24 py-3  mb-3'> Portfolio</button>             

                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="hero" src={banner} />
                </div>
            </div>  
            <img className='object-cover w-full   lg:-mt-28 ' src={shape} alt="" />
        </div>
    )
}
export default Banner;