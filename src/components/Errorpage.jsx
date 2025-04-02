import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
 
  return (
    <div>
      <div className="lg:px-24 lg:py-16 md:py-8 md:px-32 px-4 py-4 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-10 lg:gap-24 gap-6">
        <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12">
          <div className="relative lg:pb-14 flex flex-col items-center justify-center">
            <div className="absolute">
              <div className="flex flex-col items-center justify-center text-center gap-4">
                <h1 className="my-2 text-gray-800 font-bold text-4xl md:text-5xl">
                404! Page Not Found
                </h1>
                <p className="my-2 text-gray-800">
                Sorry, the page you're looking for doesn't exist. If you think something is broken, report a problem.
                </p>
                <div className='flex items-center justify-center gap-4 md:gap-6'>
                <Link to='/'>                
                <button
                  className="my-2 border-2 border-[#00A4EF] rounded-[40px] lg:text-sm xl:text-lg py-2.5 md:py-3 px-6 md:px-10 text-center bg-[#00A4EF] text-white hover:bg-[#0d93e1] focus:outline-none"
                >Go Back
                </button></Link>
                <Link to='/'>                
                <button
                  className="my-2 border-2 rounded-[40px] lg:text-sm xl:text-lg py-2.5 md:py-3 px-4 md:px-8 text-center border-[#00A4EF] hover:text-white font-semibold hover:bg-[#00A4EF] focus:outline-none"
                >Report Problem
                </button></Link>
                </div>
              </div>
            </div>
            <div>
              <img src="https://i.ibb.co/G9DC8S0/404-2.png" alt="Error" />
            </div>
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co/m4vmmVY/errorpage.gif" alt="Image" />
        </div>
      </div>
    </div>
  );
}
