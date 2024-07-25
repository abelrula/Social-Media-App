import { IoIosClose } from "react-icons/io";
import { friends } from "../data/data"

 
const FriendRequests = () => {
    const filteredFriends = friends.filter((friends, i) => { return i % 2 !== 0 })
    console.log(filteredFriends);
    return (
      <div className=" flex flex-col gap-4 border p-2">
          <h5 className="text-sm text-slate-600">Friend Requests <span>see all</span></h5>
          { filteredFriends.map((friendRequests, i) => (
              <div className=" flex gap-2 border p-1" key={i}>
              <div className="flex items-center gap-3">
                 <img src={ friendRequests.profile } aria-placeholder="avatar" className="w-8 h-8 rounded-full object-cover" />
                  <h6 className="text-sm font-mono text-slate-700 items-center justify-center">   { friendRequests.name }</h6>
                 </div>
              <span className=" flex gap-2 items-center border text-black hover:bg-gray-800 w-14 h-5 hover:cursor-pointer p-1  rounded-xl text-start font-mono  text-[9px]"> accept
              <IoIosClose size={22} />
              </span>
          </div>
          ))}
      </div>
  )
}

export default FriendRequests