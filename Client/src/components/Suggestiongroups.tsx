 import { useState } from 'react';
import {  SuggestedGroups } from '../lib/data';

const Suggestiongroups = () => {
  
    const [ groups, setGroups ] = useState<SuggestedGroupsType[]>(SuggestedGroups)
  
   function joiningGroup(grp:SuggestedGroupsType) {
     
    setGroups(groups.map((group) =>
      group.id === grp.id ?
        { ...group, joined:!grp.joined ? true : false }
        : group
      
    ))

    }
    return (
      <>
            {/* list of suggested groups */}
         <div className=" p-2.5 w-56 h-auto rounded-lg overflow-hidden bg-white ">
            <h4 className="text-center text-zinc-400 font-mono text-sm">Suggested groups</h4>
            <ul className="flex flex-col ">
                 {
                  groups.map((group:SuggestedGroupsType)=>(
                    <li className="flex items-center justify-between gap-3 no-underline h-8" key={group.id}>
                      <span className="flex gap-1 items-center">
                         <img className='w-7 h-7 rounded-full object-cover object-center' src={group.image} />
                          <p className="text-xs font-mono  text-zinc-600">{ group.owner }</p>
                       </span>
                      <button
                        className={`${!group.joined ? "bg-sky-700" : "bg-green-400"} self-end flex gap-2 items-start border text-white text-bold hover:bg-gray-800  hover:cursor-pointer p-1  k rounded-xl text-start font-mono  text-[9px] outline-none` }
                        onClick={ () => { joiningGroup(group); console.log(group.joined)}
                         } >
                        { !group.joined ? "join" :"joined"}
                     </button>
                   </li>
                  ))
                 }
            </ul>
           </div> 
    </>
  )
}

export default Suggestiongroups