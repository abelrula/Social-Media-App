import React, { useEffect, useState } from "react";
 import { NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
const MessageList = () => {
  const [ messages, setMessages ] = useState( [] );
  const [ filter, setFilter ] = useState("" );
  
  const selectedObj = {
    color: "black",
    background: "#194b006b",
  };
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
    <div className="bg-white min-h-screen flex flex-col gap-4  py-2.5 px-1 min-w-52 border-r-lime-950 border">
      <NavLink to="." path="relative" className="text-[30px] text-green-950 font-mono">
        Chats
      </NavLink>
        <span className="bg-slate-100 rounded-xl p-1.5 w-[420px] flex items-center border-[#d9d9d9] border">
            <BiSearch className='text-zinc-700' /> 
            <input onChange={(e)=>{setFilter(e.target.value)}}
            className="bg-slate-100 h-6 w-full rounded-none outline-none text-xs font-mono text-zinc-700" type='text' placeholder='search message' />
          </span>
            <hr></hr>
      <div className="flex flex-col gap-1   ">
        {messages.map((message, i) => (
          <NavLink 
            style={({ isActive }) => (isActive ? selectedObj : null)}
            to={`/message/${message.id}`}
            className="flex gap-2.5 no-underline text-black rounded-xl font-mono text-[8px] relative hover:bg-[#194b006b] p-2 border-slate-300 border"
            key={i}
          >
            <img className="w-10 h-10   object-center object-cover rounded-full" src={message.profile} alt="profile" />
            <div className="flex flex-col items-start w-full">
              <div className="flex w-full justify-between ">
                <p className="font-bold text-xs font-mono text-black te ">{message.name}</p>
                <p className="text-xs font-mono text-green-700 absolute right-3.5 top-7"> at 03:23pm</p>
              </div>
              <p className="relative left-2.5 font-mono   text-xs text-slate-500">
                hey where have...
              </p>
            </div>
            <span className="bg-black h-4 font-thin w-4 absolute top-1 right-3.5 text-center text-white p-1 text-tiny rounded-full">4</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default MessageList;
