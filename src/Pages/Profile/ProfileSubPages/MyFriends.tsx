import Friend from "../../../components/Friend";
import { friends } from "../../../data/data";

const MyFriends = () => {
  
 return (
           <div className="flex flex-wrap gap-8  mt-10">
           {
              friends.map((friend, i) => (
                 <Friend mutualFriendes={friend.mutualFriendes} name={friend.name} profile={friend.profile} />
              ))
       }
           </div>
   );
}

export default MyFriends