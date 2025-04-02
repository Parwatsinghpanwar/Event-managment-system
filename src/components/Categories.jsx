import React from 'react'

export default function Categories() {
  return (
    <div className='py-10 md:py-16' data-aos="zoom-in">
        <div className='flex flex-col items-center justify-center gap-6 lg:gap-10'>
            <div className='container mx-auto'>
            <h2 className='text-center text-3xl md:text-4xl lg:text-5xl font-semibold'>Categories</h2>
            <hr className="my-8 mx-5 lg:mx-0 border-gray-200" />
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-10 lg:gap-14'>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <span className='text-5xl hover:text-[#00A4EF]'><ion-icon name="gift-outline"></ion-icon></span>
                    <h3 className='text-2xl text-[#00A4EF] font-medium'>Wedding Planner</h3>
                    <p className='text-gray-500 text-center lg:text-left px-4 md:px-6 w-80 xl:w-96'>Every wedding weaves a unique tale. What will yours convey? Your day, etched as the most unforgettable moment, is crafted for a lifetime of memories.</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <span className='text-5xl hover:text-[#00A4EF]'><ion-icon name="sparkles-outline"></ion-icon></span>
                    <h3 className='text-2xl text-[#00A4EF] font-medium'>Birthday Parties</h3>
                    <p className='text-gray-500 text-center lg:text-left px-4 md:px-6 w-80 xl:w-96'>Vibrant birthdays come to life with us. Create cherished memories, surrounded by laughter and joy. Let's make your special day extraordinary!</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <span className='text-5xl hover:text-[#00A4EF]'><ion-icon name="people-outline"></ion-icon></span>
                    <h3 className='text-2xl text-[#00A4EF] font-medium'>Anniversaries</h3>
                    <p className='text-gray-500 text-center lg:text-left px-4 md:px-6 w-80 xl:w-96'>Celebrate enduring love and milestones with elegance. Our curated anniversary events capture the essence of your journey, creating timeless memories.</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <span className='text-5xl hover:text-[#00A4EF]'><ion-icon name="heart-outline"></ion-icon></span>
                    <h3 className='text-2xl text-[#00A4EF] font-medium'>Engagement Parties</h3>
                    <p className='text-gray-500 text-center lg:text-left px-4 md:px-6 w-80 xl:w-96'>Embark on the journey to forever with a celebration of love and commitment. Our engagement parties are crafted to make your moment magical and unforgettable.</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <span className='text-5xl hover:text-[#00A4EF]'><ion-icon name="ribbon-outline"></ion-icon></span>
                    <h3 className='text-2xl text-[#00A4EF] font-medium'>Retirement Parties</h3>
                    <p className='text-gray-500 text-center lg:text-left px-4 md:px-6 w-80 xl:w-96'>Cheers to a new chapter! Honor a lifetime of achievements with a retirement celebration. Let us curate an event that reflects your distinguished career.</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <span className='text-5xl hover:text-[#00A4EF]'><ion-icon name="color-wand-outline"></ion-icon></span>
                    <h3 className='text-2xl text-[#00A4EF] font-medium'>Baby Shower</h3>
                    <p className='text-gray-500 text-center lg:text-left px-4 md:px-6 w-80 xl:w-96'>Welcome the arrival of joy with a heartwarming baby shower. For a thoughtful details, let's create a magical celebration for the growing family.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
