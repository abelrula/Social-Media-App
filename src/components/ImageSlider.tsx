import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { Stories } from "../data/data";
function ImageSlider() {
   const [stories,setStories]=useState(Stories) 
  const [currentIndex, setCurrentIndex] = useState(0);
console.log(stories);

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

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const prev =stories[currentIndex + 1] ;
  const next =stories[currentIndex + 2];
  console.log(prev);
  console.log(next);

  return (
    <div className="!bg-[#ff2f2f8a]  flex gap-4 items-center max-w-[900px] h-full w-full m-auto py-16 px-4 relative group bg  ">
      <div
        style={{ backgroundImage: `url(${next.image})` ,width:"250px",height:"300px" }}
        className="relative blur  rounded-2xl bg-center bg-cover duration-500"
      >
      <div className="absolute p-3 top-0  flex gap-4">
        <img className='w-8 h-8 rounded-full object-cover object-center' src={next.ProfileImage } />
      <span className="flex flex-col  flex-start">
        <p className='text-sm font-mono text-white' >{next.owner}</p>
      <time className="text-xs text-white">20 hours ago</time>
      </span>
      </div>
      </div>
        <div
        style={{ backgroundImage: `url(${stories[currentIndex].image})` ,width:"400px",height:"500px" }}
        className="relative blur rounded-2xl bg-center bg-cover duration-500"
      >
      <div className="absolute top-0  flex gap-4 p-3">
        <img className='w-8 h-8 rounded-full object-cover object-center' src={ stories[currentIndex].ProfileImage } />
      <span className="flex flex-col  flex-start">
        <p className='text-sm font-mono text-white' >{ stories[currentIndex].owner}</p>
      <time className="text-xs text-white">20 hours ago</time>
      </span>
        </div>
          <div className="bg-white hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-0 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft color="black" onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className="bg-white hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-0 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight color="black" onClick={nextSlide} size={30} />
      </div>
      </div>
        <div
        style={{ backgroundImage: `url(${prev.image})` ,width:"250px",height:"300px" }}
        className="relative  rounded-2xl bg-center bg-cover duration-500"
      >
      <div className="absolute p-3 top-0  flex gap-4">
        <img className='w-8 h-8 rounded-full object-cover object-center' src={ prev.ProfileImage } />
      <span className="flex flex-col  flex-start">
        <p className='text-sm font-mono text-white' >{ prev.owner}</p>
      <time className="text-xs text-white">20 hours ago</time>
      </span>
      </div>
      </div>
      {/* Left Arrow */}
     
    </div>
  );
}

export default ImageSlider;