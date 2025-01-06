import Friend from "../../../components/Friend";
import { friends } from "../../../lib/data";
 
const MyFriends = () => {
  
 return (
           <div className="grid grid-cols-3 justify-center gap-4  mt-10 sm:max-md:grid-cols-2">
           {
              friends.map((friend, i) => (
                 <Friend key={ i }  mutualFriendes={friend.mutualFriendes} name={friend.name} profile={friend.profile} />
              ))
       }
           </div>
   );
}

export default MyFriends