import React from 'react'
import pic1 from '/src/assets/images/avatar-mark-webber.webp'
import pic2 from '/src/assets/images/avatar-angela-gray.webp'
import pic3 from '/src/assets/images/avatar-rizky-hasanuddin.webp'
import pic4 from '/src/assets/images/avatar-kimberly-smith.webp'
import pic5 from '/src/assets/images/image-chess.webp'
import pic6 from '/src/assets/images/avatar-nathan-peterson.webp'
import pic7 from '/src/assets/images/avatar-jacob-thompson.webp'
import pic8 from '/src/assets/images/avatar-anna-kim.webp'

function Box() {
  return (
    <div className='w-full h-full flex items-center sm:p-8 justify-center bg-gray-300'>
        <div className='bg-white sm:max-w-[750px] w-full rounded-xl py-20 px-5 sm:p-8 min-h-[1000px]'>
         <div className='flex justify-between items-center'> 
         <span className='flex items-center'><h1 className='font-bold text-2xl'>Notifications</h1><h1 className='ml-[12px] mt-[5px] text-white bg-blue-600 py-0 px-[10px] rounded-lg'>3</h1></span>
         <h3 className=' font-medium text-gray-400'>Mark all as read</h3>
         </div>
         <div className='bg-gray-50 relative max-w-[1250px] rounded-lg p-5 mt-[25px] flex'>
            <img src={pic1} className='max-w-[100px] max-h-[50px]'/>
            <div className='ml-[20px] text-wrap relative w-[800px]'>
                <div className='sm:flex block items-center'>
                <span className='font-bold text-nowrap'>Mark Webber</span>
                <span className='ml-[10px] text-pretty  text-gray-500 font-semibold'>reacted to your recent post</span>
                <br className='lg:hidden'/>
                    <span className='sm:ml-[10px] ml-[0px] font-bold text-gray-500'>My first tournament today!</span>
                    <div className='bg-red-500 sm:static absolute top-[33px] left-[205px] rounded-xl px-1 py-0 w-[8px] h-[8px] text-red-500 ml-[10px]'></div>
                </div>
                <p className='text-gray-400 font-medium'>5m ago</p>
            </div>
         </div>


         <div className='bg-gray-50 relative max-w-[1250px] rounded-lg p-5 mt-[25px] flex'>
            <img src={pic2} className='max-w-[100px] max-h-[50px]' />
            <div className='ml-[20px] relative max-w-[800px]'>
           <div className='sm:flex block items-center'>
           <span className='font-bold'>Angela Gray</span>
            <span className='text-gray-500 ml-[10px] font-semibold'>followed you</span>
            <div className='bg-red-500 sm:static absolute top-[11px] left-[195px] rounded-xl px-1 py-0 w-[8px] h-[8px] text-red-500 ml-[10px]'></div>
           </div>
             <p className=' text-gray-400 font-medium'>5m ago</p>
            </div>
         </div>


         <div className='bg-gray-50 max-w-[1250px] rounded-lg p-5 mt-[25px] flex'>
            <img src={pic7} className='max-w-[100px] max-h-[50px]' />
            <div className='ml-[20px] relative  max-w-[800px]'>
            <div className='sm:flex block items-center'>
            <span className='font-bold '>Jacob Thompson</span>
            <span className='ml-[10px] text-gray-500 font-semibold'>has join your group</span>
            <br className='sm:hidden'/>
            <span className='sm:ml-[10px] ml-[0px] font-extrabold  text-blue-500'>Chess Club</span>
            <div className='bg-red-500 sm:static absolute top-[33px] left-[85px] rounded-xl px-1 py-0 w-[8px] h-[8px] text-red-500 ml-[10px]'></div>
            </div>
              <p className=' text-gray-400 font-medium'>5m ago</p>
            </div>
         </div>


         <div className='w-full p-5 mt-[25px] flex'>
            <img src={pic3} className='max-w-[100px] max-h-[50px]'/>
            <div className='max-w-[500px] ml-[10px]'>
                <span className='font-bold'>Rizky Hasanuddin</span>
                <span className='ml-[10px] text-gray-400 font-semibold'>sent you a private message</span>
                <p className='text-gray-400 font-semibold'>5 days</p>
            </div>
         </div>
         <div>
                <div className='max-w-[1400px] border rounded-lg ml-[80px]'>
                <h1 className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem debitis, distinctio totam numquam dolorem tempora perferendis sapiente voluptate natus dolore omnis eligendi saepe. Quis perferendis, fuga ea vero sapiente perspiciatis.</h1>
                </div>
            </div>


            <div className='mt-[25px] p-5 relative flex'>
            <img src={pic4} className='max-w-[100px] max-h-[50px]'/>
                <div className='max-w-[220px] sm:max-w-[1000px] ml-[10px]'>
                    <span className='font-bold'>Kimberry Smith</span>
                    <span className='ml-[10px] text-gray-400 font-semibold'>commented on your picture</span>
                    <h1 className='text-gray-400 font-medium'>1 week ago</h1>
                </div>
               <img src={pic5} className='max-w-[45px] absolute top-12 right-12 sm:top-5 sm:right-10 max-h-[45px]'/>
            </div>
            <div className='mt-[25px] p-5 flex'>
              <img src={pic6}  className='max-w-[100px] max-h-[50px]'/>
              <div className='ml-[10px]'>
                <span className='font-bold'>Nathan Pateson</span>
                <span className='ml-[5px] font-semibold text-gray-400'>reacted to your recent post</span>
                <span className='ml-[5px] text-gray-600 font-bold'>5 end-game strategle to increase your win rate</span>
                <p>2 weeks ago</p>
              </div>
            </div>
            <div className='mt-[25px] p-5 flex'>
              <img src={pic8} className='max-w-[100px] max-h-[50px]'/>
              <div className='ml-[10px]'>
                <span className='font-bold'>Anna Kim</span>
                <span className='ml-[10px] text-gray-400 font-medium'>left the group</span>
                <span className='ml-[10px] font-extrabold  text-blue-500'>Chess Club</span>
                <p className='font-semibold text-gray-400'>2 weeks ago</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Box