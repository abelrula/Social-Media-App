import Friend from "../../components/Friend";
 import FriendRequests from "../../components/FriendRequests";
import { friends } from "../../lib/data";
 

import Search from "../../components/Search";
 
  const Friends = () => {
   

     
   
     return (

        <div className="container flex gap-2 mt-5 justify-around">
           <FriendRequests />
           <section className="w-2/3 border p-2">
               <Search placeholder="Find Your Friends Here" />
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
