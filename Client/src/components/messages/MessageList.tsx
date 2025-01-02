import  { useEffect, useState } from "react";
 import { NavLink } from "react-router-dom";
import Search from "../Search";
import { AiOutlineBars } from "react-icons/ai";
const selectedObj = {
  color: "black",
  background: "#194b006b",
};
const MessageList = ({chatListToggle,setChatListToggle}) => {
  const [ messages, setMessages ] = useState( [] );
   
  useEffect(() => {
    async function fetchMessages() {
      const res = await fetch("http://localhost:3500/conversations");
      const data = await res.json();
      setMessages(data);
      console.log(data);
    }
    fetchMessages();
  }, [] );
   return (
    <div className={`bg-white w-72  min-h-screen md:min-w-52 flex flex-col gap-4  py-2.5 px-1 border-r-lime-950 border sm:max-md:w-64 ${!chatListToggle ? "sm:max-md:hidden" :"sm:max-md:visible" }`}>
     <AiOutlineBars className="md:hidden" onClick={()=>setChatListToggle(false)} />
       <NavLink to="." className=" bg-[#032225] p-1.5 rounded-lg  text-[30px] text-white font-mono sm:max-md:text-xs">
        Chats
      </NavLink>
        <Search placeholder="Search contacts" />
            <hr></hr>
      <div className="flex flex-col gap-1   ">
        {messages.map((message, i) => (
          <NavLink 
            style={({ isActive }) => (isActive ? selectedObj : null)}
            to={`/message/${message.id}`}
            className="flex gap-2.5 no-underline text-black rounded-xl font-mono text-[8px] relative hover:bg-[#194b006b] p-2 border-slate-300 border"
            key={i}
          >
            <img className="w-10 h-10   object-center object-cover rounded-full sm:max-md:w-7 sm:max-md:h-7" src={message.profile} alt="profile" />
            <div className="flex flex-col items-start w-full">
              <div className="flex w-full justify-between ">
                <p className="font-bold text-xs font-mono text-black te ">{message.name}</p>
              </div>
              <p className="relative left-2.5 font-mono   text-xs text-slate-500 ">
                hey where h...
              </p>
                <p className="text-xs font-mono text-green-700 absolute right-3.5 top-7 sm:max-md:static sm:max-md:self-end"> at 03:23pm</p>
            </div>
            <span className="bg-black h-4 font-thin w-4 absolute top-1 right-1 text-center text-white p-1 text-tiny rounded-full">4</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default MessageList;
