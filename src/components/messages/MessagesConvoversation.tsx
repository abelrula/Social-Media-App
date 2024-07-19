import { Fragment, memo, useEffect, useState } from "react";
import { FaVideo } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { useParams } from "react-router-dom";
 import { GrAttachment } from "react-icons/gr";
import { BsEmojiSmile } from "react-icons/bs";
import MessageInfo from "./MessageInfo";


 const MessagesConvoversation = memo(() => {
   const [ message, setMessage ] = useState<MessageConvoType>({
     id: 0,
     name: "",
     profile: "",
     message:[ {
       sender: "",
       reciever: ""
     }]
   });
  const { id } = useParams();
   useEffect(() => {
    async function fetchMessages() {
      const res = await fetch("http://localhost:3500/conversations/" + id);
      const data = await res.json();
      console.log(data);
      setMessage(data);
    }
    fetchMessages();
  }, [ id ] );
  console.log(message);
  console.log(message.message);
  
 
  return (
    <div className="flex w-full ">
      <div className="bg-white flex flex-col w-full h-screen">
        <div className="flex justify-between bg-white py-2 px-5 w-full border border-b-slate-400">
          <div
            className="flex gap-2.5">
            <img className="w-10 h-10 object-cover rounded-full cursor-pointer" src={message.profile} alt="profile" />
            <div className="flex items-center gap-2.5">
              <p className="text-black text-sm items-center flex cursor-pointer">
                {message.name}
              </p>
              <span className="bg-green-800 w-2 h-2 rounded-full flex relative t-1 left-0.5"></span>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="">
              <IoIosCall fill="black" fontSize={19} className="infoIcon" />
            </div>
            <div className="">
              <FaVideo fill="black" fontSize={19} className="infoIcon" />
            </div>
          </div>
        </div>
        <div className= "bg-white h-[545px] flex flex-col p-8 gap-3.5 overflow-scroll  element-with-scroll">
          {message.message.map((item, i) => (
            <Fragment key={i}>
              <div className="flex flex-col w-fit h-fit">
                <p className="w-auto p-2  text-start bg-green-800 max-w-80 rounded-xl font-thin text-xs text-white">
                  {item.sender}
                </p>
                <p className="text-[9px] text-end">
                  at 12:24 pm
                </p>
              </div>
              <div className="h-fit w-fit flex flex-col self-end">
                <p className="w-auto p-2  text-start bg-green-800 max-w-80 rounded-xl font-thin text-xs text-white">
                  {item.reciever}
                </p>
                <p className="text-[9px] text-end">
                  at 12:24 pm
                </p>
              </div>
            </Fragment>
          ))}
        </div>
        <div className="flex justify-center items-center w-full h-20 bg-white gap-x-3.5">
          <div className="bg-white flex items-center p-3.5 h-16 gap-1.5 rounded-lg ">
            <GrAttachment fontSize={24} className="infoIcon" />
            <textarea className="w-[430px] rounded-2xl outline-none text-sm" placeholder="hy"></textarea>
            <BsEmojiSmile fontSize={24} className="infoIcon" />
          </div>
          <button className="py-2.5 px-8 text-white text-base font-thin h-fit w-fit rounded-lg">send</button>
        </div>
      </div>
        <MessageInfo />

    </div>
  );
});
export default MessagesConvoversation;
