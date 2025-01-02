import Friend from "../../../components/Friend";
import { friends } from "../../../lib/data";
 
const MyFriends = () => {
  
 return (
           <div className="flex flex-wrap justify-center gap-4  mt-10">
           {
              friends.map((friend, i) => (
                 <Friend key={ i }  mutualFriendes={friend.mutualFriendes} name={friend.name} profile={friend.profile} />
              ))
       }
           </div>
   );
}

export default MyFriends