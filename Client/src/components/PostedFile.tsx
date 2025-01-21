import React, { useRef, useState } from 'react'
import { GrNext, GrPrevious } from 'react-icons/gr'

const PostedFile  = ({currentModal,width,height="h-full"}) => {
  
  const [ scrollPosition, setScrollPosition ] = useState(0)
  // const [ currentImage, setcurrentImage ] = useState(0)
  const [ imageNums, setImageNums ] = useState(0)
    const imageRef = useRef<HTMLImageElement>()
 
  const handleNextImage = ( imgWidth: number,i:number=1 ) =>{ 
    
    setScrollPosition(scrollPosition +imgWidth)
    imageRef.current.scrollLeft = imgWidth + scrollPosition
   console.log(imageRef.current.scrollLeft = imgWidth + scrollPosition);
   
      // imageNums < currentModal.image.length
   
  }
// console.log(currentModal.image);
// console.log(scrollPosition);

    return (
      <div className={` sm-max-md:min-h-screen relative flex ${width}  ${height} flex-col  gap-6 overflow-hidden`}>
          { currentModal?.image.length > 1 && imageNums > 0 &&
            <GrPrevious onClick={ () => { handleNextImage(-400); setImageNums(prev => prev - 1) } } fontSize={ 25 }
            className="bg-black  rounded-full p-2 absolute top-[50%] left-0 text-white" /> }
               
                 <div ref={imageRef} className="right-0 flex w-full  gap-0.5 overflow-x-scroll scroll-smooth">
                      {
                        currentModal?.image.map((img,i)=>(
                          <img className={ `md:min-h-[500px] md:min-w-[400px] ${width} ${height} object-cover rounded-md object-center self-center items-end` }
                            key={ i } src={ img } />
                        ))
                      }
                 </div>
          { currentModal?.image?.length > 1 && imageNums < currentModal?.image.length - 1 &&
            <GrNext onClick={ () => { handleNextImage(400); setImageNums(prev => prev + 1) } } fontSize={ 25 }
              className="bg-black  rounded-full p-2 absolute top-[50%] right-0 text-white" /> }
              
        {/*viewing list of images at the bottom of the main content*/}
           <div className="flex absolute bottom-0 gap-1 bg-[#ffffff38] h-auto">
                       {
                        currentModal?.image.map((img,i)=>(
                          <img className={`max-h-[50px] min-w-[70px]  object-cover ${imageNums === i && "border border-x-cyan-50"} rounded-md object-center self-center`}
                            key={ i } src={ img }
                            onClick={ () => { setImageNums(i); handleNextImage(400); console.log(handleNextImage(400));
                            }}/>
                        ))
                      }
                 </div> 
             </div>
  )
}

export default PostedFile
             
         
             
 