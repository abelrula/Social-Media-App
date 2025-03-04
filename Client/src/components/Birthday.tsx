 import { IoCloseCircle } from 'react-icons/io5'
import TextBox from './TextBox'
import Comments from './Comments'
import { postedContentsData, profileImg } from '../lib/data'
import { useState } from 'react'
import { FaBirthdayCake } from 'react-icons/fa'


type propsTypes = {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}
 
const Birthday = ({setOpenModal}:propsTypes) => {
    const [ birthdayComments,setBirthdayComments ] = useState<commentType[]>(postedContentsData[0].comments)
    console.log(postedContentsData[0].comments);
    
    return (
         <div className='bg-[#00000085] fixed z-50 top-0 right-0 left-0 bottom-0 w-full opacity-95 h-full  flex justify-center items-center'>
      <div className='relative bg-[#ffffff] w-[510px] p-2 h-[510px] overflow-hidden items-center justify-around rounded-lg  flex flex-col  '>
          <IoCloseCircle  className='absolute right-0 top-0 hover:scale-110 cursor-pointer'  fontSize={30} onClick={ () => setOpenModal(false) } />
            <h1 className=' text-lg flex items-center gap-3'><FaBirthdayCake fontSize={10} />Wish them happy Birthday for their <span className='text-indigo-700' >28 years  </span>            </h1>
           <span className='flex gap-2 items-center'>
                    <img className="w-14 h-14 object-cover object-center rounded-full" src={profileImg } />
                    <p className='text-xs text-black'>Miko Landueber</p>
            <FaBirthdayCake fontSize={ 90 } /> 
            </span>
            <h5 className='text-start self-start text-xs'>Birthday Comments</h5>
            <Comments comments={birthdayComments} />
            <TextBox placeholder="wish birthday" buttonName='Send10'/>
      </div>
      </div>
  )
}

export default Birthday