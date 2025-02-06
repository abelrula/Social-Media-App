import { Fragment, memo, useEffect, useState } from "react";
import { FaVideo } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { useOutletContext, useParams } from "react-router-dom";
import MessageInfo from "./MessageInfo";
import TextBox from "../TextBox";
import { AiOutlineBars } from "react-icons/ai";
import useScreenSize from "../../hooks/useScreenSize"

type outletContextTypes={
  chatListToggle:boolean,
  setChatListToggle:React.Dispatch<React.SetStateAction<boolean>>
}
 const MessagesConvoversation = memo(() => {
   const { chatListToggle, setChatListToggle }: outletContextTypes = useOutletContext()
   const [ screenSize ] = useScreenSize()
   console.log(screenSize);
   
   const [toggle,setToggele]=useState(false)
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
      setMessage(data);
    }
    fetchMessages();
  }, [ id ] );
  // console.log(message);
  // console.log(chatListToggle,setChatListToggle);
  
 
  return (
    <div className="flex w-full overflow-clip   ">
      <div className="bg-white  flex flex-col w-full h-screen">
        <div className="flex justify-between   bg-white py-2 px-5 w-full border border-b-slate-400">
          {!chatListToggle &&  <AiOutlineBars className="self-center md:hidden" onClick={()=>setChatListToggle(true)} />}
          <div className="flex gap-2.5 items-center"
            onClick={ () => setToggele(prev => !prev) }>
            <img className="w-10 h-10 object-cover rounded-full cursor-pointer" src={message.profile} alt="profile" />
            <div className="flex  flex-col ">
              <p className="text-black text-sm items-center flex cursor-pointer">
                {message.name}
              </p>
              <span className="text-green-600 text-xs mr-2">online</span>
            </div>
          </div>
          <div className={`flex items-center gap-5`}>
            <div className="">
              <IoIosCall fill="black" fontSize={19} className="infoIcon" />
            </div>
            <div className="">
              <FaVideo fill="black" fontSize={19} className="infoIcon" />
            </div>
          </div>
        </div>
        <div className= "bg-white aspect h-screen flex flex-col p-8 gap-3.5 overflow-scroll sm:max-md:h-5/">
          {message.message.map((item, i) => (
            <Fragment key={i}>
              <div className="flex flex-col w-fit h-fit">
                <p className="w-auto p-2  text-start bg-[#000b2d] max-w-80 rounded-xl font-thin text-xs text-white">
                  {item.sender}
                </p>
                <p className="text-[9px] text-end">
                  at 12:24 pm
                </p>
              </div>
              <div className="h-fit w-fit flex flex-col self-end">
                <p className="w-auto p-2  text-start bg-[#1e3b29] max-w-80 rounded-xl font-thin text-xs text-white">
                  {item.reciever}
                </p>
                <p className="text-[9px] text-end">
                  at 12:24 pm
                </p>
              </div>
            </Fragment>
          ))}
        </div>
        <TextBox  placeholder="send message" buttonName="send" />
      </div>
        <MessageInfo toggle={toggle} setToggele={setToggele} />
    </div>
  );
});
export default MessagesConvoversation;
