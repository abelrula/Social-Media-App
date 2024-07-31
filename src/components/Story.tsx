import { NavLink } from "react-router-dom"
import { onlineContacts, Stories } from "../data/data"
import ProfileImage from "./ProfileImage";
import { BsEggFried } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import ImageSlider from "./ImageSlider";

const Story = () => {
  const [scrolledImageNum,setScrolledImageNum]=useState(0)
  const [stories,setStories]=useState(Stories)
  console.log(stories);
  // console.log(stories.map((item, i) => (
  //  return  setStories(prev=>{...prev, item.idNum = i})
  // )));
  
          function onLeft() {
             
          }
          function onRight() {
            
          }
  // const ScrolledImages=Stories.map(())
  const selectedObj: React.CSSProperties = {
    color: "black",
    background: "rgb(195 195 195)",
    };
            const img = "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  
    return (
      <div className="flex gap-2 border-b-zinc-200 border-x">
          <div className="w-auto bg-white h-screen text-center m-t-8 overflow-y-scroll overflow-x-hidden scroll-smooth scrollbar-thin ">
          <div className="w-[220px]  h-screen text-center m-t-8 overflow-y-scroll overflow-x-hidden scroll-smooth scrollbar-thin flex flex-col gap-6"> 
             <h4 className=" ml-2 text-lg text-black  font-thin font-mono  text-start  ">Your Stories</h4>
                   <NavLink
                    style={({ isActive }) => (isActive ? selectedObj : null)}
                    to="stories/abel zewdu"
                    className=" w-3/4 flex flex-col items-center h-6 no-underline"
            >
                         <div className="flex items-center justify-evenly w-full">
                           <img className="w-10 h-10 rounded-full object-cover object-center " src={img} /> 
                          <label className=" flex flex-col text-slate-800 text-xs cursor-pointer font-mono font-thin">Abel Zewdu
                          <span className="font-thin w-full text-end text-slate-500 text-xs">20 hours ago</span>
                         </label>
                        </div>
                  </NavLink>
             <h3 className=" ml-2 text-xs text-black  font-thin font-mono  text-start  ">Followed Stories</h3>
                  { Stories.map((stories, i) => (
                       <NavLink
                            style={({ isActive }) => (isActive ? selectedObj : null)}
                            to={`stories/${stories.owner}`}
                            className="w-3/4 flex flex-col items-center gap-0 no-underline"
                            key={i}
                         >
                         <div className="flex items-center justify-evenly w-full">
                               <img className="w-10 h-10 rounded-full object-cover object-center" src={stories.ProfileImage} />
                        <label className=" flex flex-col text-slate-800 text-xs cursor-pointer font-mono font-thin">{ stories.owner }
                          <span className="font-thin w-full text-end text-slate-500 text-xs">20 hours ago</span>
                        </label>
                        </div>
                  </NavLink>
                  ))}
              </div>
            </div>
            {/* <div className="relative h-screen bg-slate-600  gap-3 ">
                <IoIosArrowBack onClick={onLeft} className="absolute left-0 z-50 text-4xl bg-white  top-1/2 " />   
              <div className="gap-2 h-screen flex overflow-x-scroll">
                {
                    Stories.map((stories, i) => (
                        <div className="relative w-[370px] h-2/3 m-auto" key={i}>
                                <img className=' w-full h-full rounded-xl object-cover object-center' src={stories.image} />
                                <img className='absolute top-0  w-8 h-8 rounded-full object-cover object-center' src={ stories.ProfileImage } />
                                <p className='absolute bottom-0 text-tiny text-white' >{ stories.owner }</p>
                        </div>
                      ))
                  }
            </div>      
          <IoIosArrowForward onClick={onRight} className="absolute right-0 z-50 text-4xl bg-white  top-1/2 " />
            </div> */}
        <ImageSlider />
      </div>
  )
}

export default Story
