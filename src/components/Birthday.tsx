 import { IoCloseCircle } from 'react-icons/io5'
import TextBox from './TextBox'
import Comments from './Comments'
import { postedContentsData, profileImg } from '../lib/data'
import { useState } from 'react'
import { FaBirthdayCake } from 'react-icons/fa'

const Birthday = ({setOpenModal}) => {
    const [ birthdayComments ] = useState(postedContentsData[0].comments)
    console.log(postedContentsData[0].comments);
    
    return (
      <div className='relative bg-[#f8f8f8] w-[510px] p-2 h-[510px] overflow-hidden items-center justify-around rounded-lg  flex flex-col  '>
          <IoCloseCircle  className='absolute right-0 top-0 hover:scale-110 cursor-pointer'  fontSize={30} onClick={ () => setOpenModal(false) } />
            <h1 className='text-indigo-700 text-lg'>Wish them happy Birthday for their <span className='' >28 years <FaBirthdayCake fontSize={10} /> </span>
                <span className='flex gap-2'>
                    <img className="w-6 h-6 object-cover object-center rounded-full" src={profileImg } />
                    <p className='text-xs text-black'>Miko Landueber</p>
                </span>
            </h1>
                 <FaBirthdayCake fontSize={90} /> 
            <h5 className='text-start self-start text-sm'>Birthday Comments</h5>
            <Comments comments={birthdayComments} />
            <TextBox placeholder="wish birthaday"/>
             
      </div>
  )
}

export default Birthday