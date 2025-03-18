import Friend from "../../components/Friend";
 import FriendRequests from "../../components/FriendRequests";
import { friends } from "../../lib/data";
 

import Search from "../../components/Search";
import { useState } from "react";
 
  const Friends = () => {
   
   const [ filterdContent, setFilterdContent ] = useState <string[]>([]); 

   
     return (

        <div className="flex gap-2 mt-5 justify-around sm:max-md:justify-center sm:flex-col">
           <FriendRequests />
           <section className="w-full border p-2">
              <Search placeholder="Find Your Friends Here" setFilterdContent={ setFilterdContent } />
             <div className="w-full grid grid-cols-3 mt-10 gap-x-1 gap-y-2 sm:grid-cols-2  md:max-lg:grid-cols-2 lg:grid-cols-3 ">
                 {friends.map((friend, i) => (
                  <Friend key={i} mutualFriendes={friend.mutualFriendes} name={friend.name} profile={friend.profile} />
                ))}
              </div>
           </section>
            </div>
   );
};

export default Friends;
