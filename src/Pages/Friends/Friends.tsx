import { BiSearch } from "react-icons/bi";
import Friend from "../../components/Friend";
 import FriendRequests from "../../components/FriendRequests";
import { friends } from "../../lib/data";
 
  const Friends = () => {
   

     
   
     return (

        <div className="container flex gap-2 mt-5 justify-around">
           <FriendRequests />
           <section className="w-2/3 border p-2">
                <h5 className="text-sm text-slate-600 font-mono">Find Your Friends Here</h5>
                  <div className='w-96 bg-slate-100 flex items-center rounded-lg  p-2 h-6 cursor-pointer border border-zinc-200'>
                     <BiSearch className='text-gray-600' />
                     <input className='outline-none rounded-none text-sm font-mono bg-transparent' type='text' placeholder='Search'/>
                  </div> 
           <div className="flex flex-wrap mt-10 gap-x-14 gap-y-3 ">
           {
              friends.map((friend, i) => (
                 <Friend key={i} mutualFriendes={friend.mutualFriendes} name={friend.name} profile={friend.profile} />
               ))
            }
           </div>
         </section>
            </div>
   );
};

export default Friends;
