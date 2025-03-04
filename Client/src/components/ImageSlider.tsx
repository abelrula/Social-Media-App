import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
 import { Stories } from "../lib/data";
import { SlLike } from "react-icons/sl";
 function ImageSlider({currentIndex, setCurrentIndex}) {
   
   
   const [ stories, setStories ] = useState(Stories) 
 
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? stories.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === stories.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
 
  // const goToSlide = (slideIndex) => {
  //   setCurrentIndex(slideIndex);
  // };
  const prevImage =currentIndex !== 0 ? stories[currentIndex - 1] :stories[stories.length -1] ;
   const nextImage =stories[currentIndex + 1];
  const afterNextImage =stories[currentIndex + 2];
  
   

  return (
    <div className="!bg-[rgb(0,0,0)]  flex gap-4 items-center justify-around  h-screen sm:max-md:h-auto  w-full md:m-auto md:py-16 md:px-4 relative group bg  ">
      {/* before the current image */}
      <div style={ { backgroundImage: `url(${prevImage.image})` } }
        className="relative w-[200px] h-[200px]  rounded-2xl brightness-50 ounded-2xl bg-center bg-cover duration-500 sm:max-md:hidden">
      <div className="absolute w-full p-3 top-[30%]  flex gap-4">
        <img className='w-14 h-14 rounded-full object-cover object-center' src={prevImage.ProfileImage } />
      <span className="flex flex-col  flex-start">
        <p className='text-sm font-bold font-mono text-white' >{prevImage.owner}</p>
      <time className="text-xs text-white">20 hours ago</time>
      </span>
      </div>
      </div>
      {/* the current image */}
        <div style={{ backgroundImage: `url(${stories[currentIndex].image})` }}
        className="relative w-[350px] h-[550px]   rounded-2xl bg-center bg-cover duration-500  ">
        {/* Left Arrow */}
          <div className="bg-white hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-0 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft color="black" onClick={prevSlide} size={30} />
        </div>
       
        {/* image */ }
        <div className="absolute bg-[#434c5326] w-full top-0  flex gap-4 p-3">
        <img className='w-8 h-8 flex  flex-col rounded-full object-cover object-center' src={ stories[currentIndex].ProfileImage } />
      <span className="flex flex-col  flex-start">
        <p className='text-sm font-bold font-mono text-white' >{ stories[currentIndex].owner}</p>
      <time className="text-xs text-[white]">20 hours ago</time>
          </span>
          
        </div>
        
        {/* Right Arrow */ }
          <div className="bg-white hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-0 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight color="black" onClick={nextSlide} size={30} />
         </div>
        {/* like button interactions  */}
            <span className="text-white cursor-pointer   flex gap-1 absolute bottom-0 left-[20%]">25<SlLike className="text-white" fontSize={20}/></span>
        </div>
     
      {/* After the current image */ }
        <div style={{ backgroundImage: `url(${nextImage.image})`  }}
        className="relative w-[200px] h-[200px]  brightness-50 rounded-2xl bg-center bg-cover duration-500 sm:max-md:hidden">
      <div className="absolute   sm:max-md:h-20 w-full p-3 top-[30%]  flex gap-4">
        <img className='w-14 h-14 rounded-full object-cover object-center' src={ nextImage.ProfileImage } />
      <span className="flex flex-col  flex-start">
        <p className='text-sm font-bold font-mono text-white' >{ nextImage.owner}</p>
      <time className="text-xs text-white">20 hours ago</time>
      </span>
      </div>
      </div>
    
      {/* after next after the current image */ }
       <div style={{ backgroundImage: `url(${afterNextImage.image})` }}
        className="relative  w-[200px] h-[200px] sm:max-md:hidden rounded-2xl brightness-50 ounded-2xl bg-center bg-cover duration-500">
      <div className="absolute w-full p-3 top-[30%]  flex gap-4">
        <img className='w-8 h-8 rounded-full object-cover object-center' src={afterNextImage.ProfileImage } />
      <span className="flex flex-col  flex-start">
        <p className='text-sm font-bold font-mono text-white' >{afterNextImage.owner}</p>
      <time className="text-xs text-white">20 hours ago</time>
      </span>
      </div>
      </div>
    
      
    </div>
  );
}

export default ImageSlider;