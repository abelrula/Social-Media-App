import React from 'react'
import ProfileImage from './ProfileImage'

const Posted_owner_profile_with_Title = ({currentModal}) => {

console.log(currentModal);

    return (
      <>
        <div className="flex gap-1 flex-col">
            <div className='flex gap-2'> 
            {currentModal?.image ?
              <img className='w-6 h-6 rounded-full object-cover object-center '
                  src={ currentModal.image[ 0 ] } /> : <ProfileImage profileName={`${ currentModal?.owner }`}/> }
               <p className='text-sm font-thin text-black font-sans leading-tight'>
                {currentModal?.owner}
               </p>
            </div>
               <p className='text-xs self-end font-thin text-slate-500 font-sans leading-tight'>1 hour ago</p>
            </div>
                 <p className="w-5/6 font-sans text-xs ml-2.5 text-yellow-900 font-thin"  >{currentModal?.titleDescription}</p>

      </>
  )
}

export default Posted_owner_profile_with_Title