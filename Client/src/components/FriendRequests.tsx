import { IoIosClose } from "react-icons/io";
import { friends } from "../lib/data"

 
const FriendRequests = () => {
    const filteredFriends = friends.filter((friends, i) => { return i % 2 !== 0 })
    console.log(filteredFriends);
    return (
      <div className=" flex flex-col gap-4 border p-2">
          <h5 className="text-sm text-slate-600">Friend Requests <span>see all</span></h5>
          { filteredFriends.map((friendRequests, i) => (
              <div className=" flex gap-2 border p-1 justify-around" key={i}>
              <div className="flex items-center gap-3 self-end">
                 <img src={ friendRequests.profile } aria-placeholder="avatar" className="w-8 h-8 rounded-full object-cover" />
                  <h6 className="text-[10px] font-mono text-slate-700 items-center justify-center">   { friendRequests.name }</h6>
                 </div>
                  <span className="flex gap-.5 items-center">
                         <h6 className="bg-sky-950 flex gap-20 items-center border text-white hover:bg-gray-800 w-auto h-5 hover:cursor-pointer p-1  rounded-xl text-start font-mono  text-[8px]"> accept
                       </h6>
                       <IoIosClose className="hover:bg-black text-[8px] hover:text-white" size={22} />
                 </span>
          </div>
          ))}
      </div>
  )
}

export default FriendRequests