import Friend from "../../components/Friend";
import { friends } from "../../data/data";
 
  const Friends = () => {
   

     
   
     return (
           <div className="flex flex-wrap mt-10 gap-x-14 gap-y-3">
           {
              friends.map((friend, i) => (
                 <Friend mutualFriendes={friend.mutualFriendes} name={friend.name} profile={friend.profile} />
              ))
       }
           </div>
   );
};

export default Friends;
