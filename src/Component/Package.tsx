import React from 'react';

const Package = () => {
    return (
          <div className="mb-10">

                 <h1 className='mt-5 text-center text-4xl font-bold font-body'> Packages</h1>
                 <div className='h-1 w-1/6 mt-2 rounded-lg bg-purple-200 mx-auto'/>
           
           <div className="grid grid-cols-1  sm:grid-cols-2 xs:grid-cols-2 lg:grid-cols-3 mt mt-20 justify-items-ccenter justify-center">

                   <div className=" rounded-lg shadow-shadow max-w-sm overflow-hidden font-body p-6 m-3">
                        <p className='uppercase text-xs text-purple-400 '>Gettting started</p>
                        <h1 className='font-bold pt-2 text-lg' >Singularity</h1 >
                        <p className='text-sm pt-1 font-sans text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae amet ratione voluptates voluptatum odio illo eum laboriosam non eveniet pariatur. amet consectetur adipisicing elit</p>
                        <button className='uppercase text-xs rounded-full text-white bg-purple-600 bg-opacity-75 pt-2 pl-5 pb-2 pr-5 mt-4'> see more </button>
                   </div>

                   <div className="rounded shadow-shadow overflow-hidden max-w-sm font-body p-6 m-3">
                        <p className='uppercase text-xs text-purple-400'>business workflow</p>
                        <h1 className='font-bold pt-2 text-lg' >Pularity</h1 >
                        <p className='text-sm pt-1 font-sans text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae amet ratione voluptates voluptatum odio illo eum laboriosam non eveniet pariatur. amet consectetur adipisicing elit.</p>
                        <button className='uppercase text-xs rounded-full text-white bg-purple-600 bg-opacity-75 pt-2 pl-5 pb-2 pr-5 mt-4'> see more </button>
                  </div>
            

                   <div className="rounded   shadow-shadow overflow-hidden max-w-sm font-body p-6 m-3" >
                        <p className='uppercase text-xs text-purple-400 '>interaction</p>
                        <h1 className='font-bold pt-2 text-lg' >Professional</h1 >
                        <p className='text-sm pt-1 font-sans text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae amet ratione voluptates voluptatum odio illo eum laboriosam non eveniet pariatur. amet consectetur adipisicing elit.</p>
                        <button className='uppercase text-xs rounded-full text-white bg-purple-600 bg-opacity-75 pt-2 pl-5 pb-2 pr-5 mt-4'> see more </button>
                   </div>
               
           </div>
      </div>   
         
    );
};

export default Package;