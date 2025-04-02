import React from 'react';
import Logo from '../assets/contact.jpg';

const Callus = () => {
  const divStyle = {
    backgroundImage: `url(${Logo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '60vh',
  };

  return (
    <div className='flex flex-col items-center justify-center gap-4 lg:gap-5 px-4 lg:px-8 text-white text-center' style={divStyle} data-aos="fade-right">
      <h2 className='text-xl md:text-2xl lg:text-4xl xl:text-5xl font-semibold'>Event is ready to give you a wonderful service</h2>
      <p className='text-sm lg:text-lg italic'>Would love to talk to you, contact us any way you feel comfortable, we'll be waiting</p>
      <div className='flex items-center justify-center gap-5'>
          <button className="border-2 rounded-[40px] text-base lg:text-lg py-2 lg:py-3 bg-[#12121259] px-6 md:px-8 text-center border-white text-white font-semibold hover:bg-[#00A4EF] hover:border-[#00A4EF] focus:outline-none uppercase">
            <div className='flex items-center justify-center gap-2'>
            <span className='text-[#05A010] text-2xl mt-1'><ion-icon name="logo-whatsapp"></ion-icon></span>
            <p>Whatsapp</p>
            </div>
          </button>
          <button className="border-2 rounded-[40px] text-base lg:text-lg py-2 lg:py-3 bg-[#12121259] px-6 md:px-8 text-center border-white text-white font-semibold hover:bg-[#00A4EF] hover:border-[#00A4EF] focus:outline-none uppercase">
            <div className='flex items-center justify-center gap-2'>
            <span className='text-white text-2xl mt-1'><ion-icon name="call-outline"></ion-icon></span>
            <p>Call</p>
            </div>
          </button>
        </div>
    </div>
  );
};

export default Callus;

