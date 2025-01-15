import React, {useRef, useState } from 'react'
import ProfileImage from './ProfileImage'
import { IoIosArrowRoundBack, IoIosClose, IoMdClose } from 'react-icons/io'
import Comments from './Comments'
import TextBox from './TextBox'
import { profileImg } from '../lib/data'
import  { ReactionsButtons } from './Reactions'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import { SlPicture } from 'react-icons/sl'
import Emojies from './Emojies'
 import Posted_owner_profile_with_Title from "./Posted_owner_profile_with_Title"
 import { FaRegComment } from 'react-icons/fa'
import { BiLike } from 'react-icons/bi'
 import PostedFile from './PostedFile'
import { PiDotsThreeVertical } from 'react-icons/pi'
 
type propsTypes = {
  currentModal: postedContentsDataType,
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>,

}   
export const PostedContentModal = ({currentModal,setCurrentIndex}:propsTypes) => {
 
 
    
   

  return (
    <div className=" bg-[#000000ad] fixed top-0 bottom-0 flex items-center justify-center left-0 right-0  z-50 ">
            <div className="bg-white w-[750px] relative h-full  md:h-[450px] sm-max-md:min-h-screen flex overflow-hidden gap-4 border rounded-[5px] p-1.5 border-[#d9d9d9] z-50 sm:max-md:flex-col" >
        
        {/* modal closing */ }
           <IoIosClose fontSize={ 23 } className='text-lg absolute top-0 right-0 hover:text-3xl'
          onClick={ () => setCurrentIndex(undefined) } />
        
        {/* posted file can be image or video */}
          <PostedFile width="w-11/12"  currentModal={ currentModal } />
        
        
          <div className="flex flex-col w-[515px] overflow-hidden justify-start self-baseline ml-2.5 gap-2.5">
            
           {/* post owner profile and post titleDescription  */}
            <Posted_owner_profile_with_Title currentModal={ currentModal } />
            
            {/* text writing for giving  comment */ }
            <TextBox placeholder="add comments" buttonName="comment" />
            
            {/* reaction buttons */ }
            <ReactionsButtons />

            {/* comments by other users  */}
            <Comments comments={ currentModal?.comments } />

          </div>
          </div>
    </div>
   )
}

   
// Open modal  on smaller devices with differnet design
  
export const SmallerDeviceModal = ({currentModal,setCurrentIndex}) => {
   const [openCommnets,setOpenComments]=useState(false)
  console.log(currentModal)
  return (
   
    <div className=" bg-black fixed top-0 bottom-0 flex items-center justify-center left-0 right-0  z-50">
            <div className="w-full  flex flex-col h-full py-12 justify-between gap-4 p-1.5 " >
        
        {/* modal closing */ }
        
            {/* posted file can be image or video */ }
    {  !openCommnets &&   
          <>
        <div className="flex justify-between text-xl">
          <span className='flex gap-2 text-white font-thin text-lg'>
          <IoIosArrowRoundBack fontSize={ 23 } className='text-white text-2xl  hover:text-3xl'
            onClick={ () => setCurrentIndex(undefined) } />
            <img src={currentModal.image[0]} className='w-7 h-7 rounded-full object-cover' alt="profile" />
            {currentModal.owner}
          </span>
          <PiDotsThreeVertical className='text-white text-2xl  hover:text-3xl'  />
           </div>
        
          <PostedFile height={ `max-h-[600px] ` } width={ `min-w-full` } currentModal={ currentModal } />
        
          {/* title description & reactions buttons   */ }
          <p className='text-sm text-white self-center'>{ currentModal.titleDescription }</p>
          <div className='flex gap-2 items-center justify-around  text-2xl   cursor-pointer'>
              <span className='text-white flex items-center gap-2'>225<BiLike className='text-white' /></span>
            <FaRegComment className='text-white' onClick={ () =>setOpenComments(true)} />
         </div>
        </>
        }
            
        
        

        
        {
          openCommnets &&  <div className="bg-white  flex flex-col h-screen w-full overflow-hidden justify-start self-baseline ml-2.5 gap-2.5">
           
              <IoIosArrowRoundBack fontSize={ 23 } className='text-black text-3xl  hover:text-3xl mt-2'
            onClick={ () => setCurrentIndex(undefined) } />
            <Posted_owner_profile_with_Title currentModal={ currentModal } />
             <img src={currentModal.image[0]}  className='h-36 w-full object-cover'/>
          
          
            {/* text writing for giving  comment */ }
           
            <TextBox placeholder="add comments" buttonName="comment" />
            
             {/* reaction buttons */ } 
            <ReactionsButtons />

            {/* comments by other users  */}
            <Comments comments={ currentModal.comments }  width="w-full" />

          </div>
        }
       
          </div>
      </div>
      )

}





 

type PostModalPropsTypes = {
  onclick: () => void,
  postType:string
}

export const PostModal = ({ onclick,postType }: PostModalPropsTypes) => {
  
  const [ msg, setMsg ] = useState('');
  const [ PreviewUrl, setPreviewUrl ] = useState(undefined)
  const fileRef = useRef<HTMLInputElement>()
  
  const OpenFile = () => {
    fileRef.current.click()
  }
  function readAndPreview (e) {
    const files = e.target.files 
    if (files) {
           
        const filese=Array.from(files).map((img:Blob)=>URL.createObjectURL(img))
        console.log(filese);
        setPreviewUrl(filese)
    }
      
  }
  return (
      <div className=" bg-[#000000ad] fixed top-0 bottom-0 flex items-center justify-center left-0 right-0  z-50">
        <form className=" relative bg-white h-min-[250px] h-auto w-[475px] flex gap-2.5 flex-col p-2.5">
        <header className="flex gap-2 items-center"><img className='w-6 h-6 rounded-full object-cover object-center' src={ profileImg } /> Abel Zewdu</header>
        <IoMdClose onClick={ onclick } className="absolute top-0 right-0" fontSize={ 30 } />
        <div className="flex flex-col gap-2 w-11/12 ">
            <ReactQuill  theme="snow" value={msg} onChange={setMsg} />
          { PreviewUrl &&
             <div className="flex gap-1 flex-wrap max-h-48 h-auto overflow-y-scroll ">
               {PreviewUrl?.map((previewImage)=>(
                <img className="w-24 h-24 object-cover object-center rounded-lg" src={ previewImage } />
                 ))} 
         </div>}
       
        </div>  
            <span className="ml-2 flex items-center gap-1 z-50">
            <SlPicture className='icon' color='red' onClick={OpenFile} />
            <input type='file' onChange={readAndPreview} className='hidden' multiple={true} ref={fileRef}  />
                  <Emojies setMsg={setMsg}  />       
             </span> 
         <button className="bg-black py-1 px-4 self-end text-white hover:bg-[#0000005e]"  type="submit">{postType}</button>
        </form>
          </div>
  )

}


type UploadCoverImagePropsTypes = {
  onclick: () => void
 } 

export const UploadCoverImage=({onclick}:UploadCoverImagePropsTypes)=>{
 const [ PreviewUrl, setPreviewUrl ] = useState(undefined)
  const fileRef = useRef<HTMLInputElement>()
  
  const OpenFile = () => {
    fileRef.current.click()
  }
  function readAndPreview (e) {
    const file = e.target.files[0] 
    if (file) {
        const previewFile=URL.createObjectURL(file)
         setPreviewUrl(previewFile)
    }
  }
   
  return (
    <>
      <div className=" bg-[#000000ad] fixed top-0 bottom-0 flex items-center justify-center left-0 right-0  z-50">
          <IoMdClose onClick={ onclick } className="absolute top-0 right-0 text-white" fontSize={ 35 } />
        <form className={`relative  ${PreviewUrl ?"rounded-lg" :"rounded-full" } bg-white ${PreviewUrl ? "h-[380px]" : "h-[275px]"} ${PreviewUrl ? "w-[475px]" :"w-[275px]" } items-center justify-center  flex gap-2.5 flex-col p-2.5`}>
          <header className="flex gap-2 items-center">
            <img className='w-6 h-6 rounded-full object-cover object-center' src={ profileImg } /> Abel Zewdu</header>
          { PreviewUrl &&
            <div className="flex flex-col w-96 h-[80%] gap-2  ">
              <div className="flex gap-1 flex-wrap max-h-72 h-auto overflow-y-scroll ">
                <img className="w-full h-full object-cover object-center rounded-lg" src={ PreviewUrl } />
              </div>
            </div> }
            <span className="ml-2 flex  items-center justify-between gap-1 z-50">
              <SlPicture  className="text-black text-4xl self-start" onClick={OpenFile} />
                {PreviewUrl && <button className="bg-black py-1 px-4 self-end text-white hover:bg-[#0000005e]"  type="submit">Add</button>}
            <input type='file' onChange={readAndPreview} className='hidden' ref={fileRef}  />
             </span> 
        </form>
          </div>
    </>
   )
  
}
 
// const MessageInfoPhotoModalPropsType = {
  
// }
 export const MessageInfoPhotoModal = ({ openModalData, setOpenModal }) => {
    
  
 
  return (
    <>
     <div className=" bg-[#000000ad] fixed top-0 bottom-0 flex items-center justify-center left-0 right-0  z-50">
                <IoIosClose fontSize={23} className='text-4xl absolute text-white cursor-pointer  top-1 right-2 hover:text-5xl' onClick={()=>setOpenModal(false)} />
          <div className="relative bg-white h-[400px] w-[350px] flex flex-col" key={openModalData.image}  >
              <img src={ openModalData.image } className='rounded-lg w-full h-full object-center object-cover' />                      
              <div className="absolute w-full flex flex-col bottom-0 bg-white p-2 h-auto"> 
                 <p className="w-5/6 font-sans text-xs ml-2.5 text-black font-normal"  >{openModalData.titleDescription}</p>
              <span className="self-end mr-2 mt-2 flex gap-2">
                 <p className='text-xs font-thin text-black font-sans leading-tight'>
                You
               </p>
               <p className='text-xs font-thin text-slate-500 font-sans leading-tight'>1 hour ago</p>
              </span>
                </div>
        </div>
              
      </div>
    </>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const ReplyOnComment = ({comment,setReplyComment}) => {
    
  return (
    <div className='bg-[#1413132e] fixed top-0 bottom-0 flex items-center justify-center left-0 right-0  z-50'>
           <IoIosClose fontSize={23} className='text-4xl absolute text-white cursor-pointer  top-1 right-2 hover:text-5xl' onClick={()=>setReplyComment(false)}  />
      <div className="relative bg-white h-[200px] w-[350px] flex flex-col p-2">
     <span className='flex gap-2 items-center'>
                    <img className="w-6 h-6 object-cover object-center rounded-full" src={ comment.profileImg } />
                    <p className='text-xs text-black'>{ comment.owner }</p>
                       <p className='text-[9px] text-start font-thin text-slate-500 font-sans leading-tight  '>1 hour ago</p>

                  </span>
        <p className='font-sans mr-3 text-xs px-3 ml-2.5 text-yellow-900 font-thin'>{ comment.comment }</p>
            <TextBox placeholder='reply' buttonName="reply"  />
      </div>
    </div>
   )

} 