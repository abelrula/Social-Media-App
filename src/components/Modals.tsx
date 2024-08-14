import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

import React, { useRef, useState } from 'react'
import ProfileImage from './ProfileImage'
import { IoIosClose, IoMdClose } from 'react-icons/io'
import Comments from './Comments'
import TextBox from './TextBox'
import { profileImg } from '../lib/data'
import  { ReactionsButtons } from './Reactions'
import 'react-quill/dist/quill.snow.css';

 
type propsTypes = {
  currentModal: postedContentsDataType,
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>,

}   
export const PostedContentModal = ({currentModal,setCurrentIndex}:propsTypes) => {
 
  const [ scrollPosition, setScrollPosition ] = useState(0)
  const [ imageNums, setImageNums ] = useState(0)

  currentModal.image.length - 1
  console.log(imageNums);
  
    const imageRef = useRef<HTMLImageElement>()
   
  const handleNextImage = (imgWidth:number) => {
    
    setScrollPosition(scrollPosition + imgWidth)
    imageRef.current.scrollLeft = imgWidth + scrollPosition
   
      // imageNums < currentModal.image.length
   
  }

  return (
    <div className=" bg-[#000000ad] fixed top-0 bottom-0 flex items-center justify-center left-0 right-0  z-50">
            <div className="bg-white relative w-[820px] h-[450px] flex gap-4 border rounded-[5px] p-1.5 border-[#d9d9d9] z-50" >
               <div className="w-11/12 relative flex h-auto flex-col gap-6 overflow-hidden ">
                  { currentModal.image.length > 1 && imageNums > 0   &&  <GrPrevious onClick={()=>{handleNextImage(-400); setImageNums(prev=>prev-1)}} fontSize={ 25 } className="bg-black  rounded-full p-2 absolute top-[50%] left-0 text-white" />}
                 <div ref={imageRef} className="flex w-full  gap-0.5 overflow-x-scroll scroll-smooth">
                      {
                        currentModal.image.map((img,i)=>(
                          <img className='min-h-[500px] min-w-[400px] object-cover rounded-md object-center self-center items-end  h-auto' key={i} src={img}  />
                        ))
                      }
                 </div>
          { currentModal.image.length > 1  && imageNums < currentModal.image.length - 1  && <GrNext onClick={ () => { handleNextImage(400); setImageNums(prev=>prev+1)} } fontSize={ 25 } className="bg-black  rounded-full p-2 absolute top-[50%] right-0 text-white" /> }
                <div className="flex absolute bottom-0 gap-2 left-1/2">
                  { currentModal.image.map((_item, i)=>(
                    <span key={i} className={`w-2 h-2 rounded-full ${imageNums === i ?"bg-slate-900":"bg-white"}`}></span>
                  ))}
                </div>
               </div>
               <div className="w-full flex flex-col gap-4">
               <IoIosClose  fontSize={23} className='text-lg absolute top-0 right-0 hover:text-3xl' onClick={()=>setCurrentIndex(undefined)} />
                   <div className="flex justify-start self-baseline ml-2.5 gap-2.5">
            { currentModal.image ?
              <img className='w-6 h-6 rounded-full object-cover object-center ' src={ currentModal.image[ 0 ] } /> : <ProfileImage profileName={ currentModal.owner } /> }
            <div> 
               <p className='text-sm font-thin text-black font-sans leading-tight'>
                {currentModal.owner}
               </p>
               <p className='text-xs font-thin text-slate-500 font-sans leading-tight'>1 hour ago</p>
            </div>
              </div>
                 <p className="w-5/6 font-sans text-xs ml-2.5 text-yellow-900 font-thin"  >{currentModal.titleDescription}</p>
                  <TextBox placeholder="add comments" buttonName="send" />
                   <ReactionsButtons />
                   <Comments comments={ currentModal.comments } />
             
                </div>
    </div>
         </div>
  )
}

type propsType = {
  posted: imagesPostedByTheOwner,
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}


  // Open modal  on profilepage/photos onclick

export const PhotoModal = ({ posted, setOpenModal }: propsType) => {
    
  
 
  return (
    <>
     <div className=" bg-[#000000ad] fixed top-0 bottom-0 flex items-center justify-center left-0 right-0  z-50">
          <div className="relative bg-white h-[450px] w-[700px] flex" key={posted.image}  >
                <IoMdClose onClick={()=>setOpenModal(false)} className="absolute top-0 right-0" fontSize={30} />
              <img src={ posted.image } className='rounded-lg w-1/2 h-full object-center object-cover' />                      
            <div className="w-full flex flex-col gap-4">
               <IoIosClose fontSize={23} className='text-lg absolute top-0 right-0 hover:text-3xl' onClick={()=>setOpenModal(false)} />
                   <div className="flex justify-start self-baseline ml-2.5 gap-2.5">
            { posted.image ?
              <img className='w-6 h-6 rounded-full object-cover object-center ' src={profileImg} /> : <ProfileImage profileName="{ posted.owner }" /> }
            <div> 
               <p className='text-sm font-thin text-black font-sans leading-tight'>
                You
               </p>
               <p className='text-xs font-thin text-slate-500 font-sans leading-tight'>1 hour ago</p>
            </div>
              </div>
                 <p className="w-5/6 font-sans text-xs ml-2.5 text-black font-normal"  >{posted.titleDescription}</p>
            <TextBox placeholder="add comments" buttonName="send" /> 
           
            {/* interacted reactions  by users */ }
                      <ReactionsButtons />
             {/* Commentes  by users */ }
               <Comments comments={ posted.comments } />
             
            </div>        
        </div>
              
      </div>
    </>
  )
}





 