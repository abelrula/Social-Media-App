import { BiSearch } from "react-icons/bi";
import Friend from "../../components/Friend";
import { friends } from "../../data/data";
 
  const Friends = () => {
   

     
   
     return (

        <div className="container">
           <h5 className="text-lg text-slate-600 font-mono">Find Your Friends Here</h5>
           <div className='w-96 bg-slate-100 flex items-center rounded-lg  p-2 h-6 cursor-pointer border border-zinc-200'>
            <BiSearch className='text-gray-600' />
            <input className='outline-none rounded-none text-sm font-mono bg-transparent' type='text' placeholder='Search'/>
        </div> 
           <div className="flex flex-wrap mt-10 gap-x-14 gap-y-3">
           {
              friends.map((friend, i) => (
                 <Friend mutualFriendes={friend.mutualFriendes} name={friend.name} profile={friend.profile} />
               ))
            }
           </div>
            </div>
   );
};

export default Friends;
