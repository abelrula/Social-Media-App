import { Outlet } from "react-router-dom";
import MessageList from "../components/messages/MessageList";
import { useState } from "react";
  const MessageLayout = () => {
    const [chatListToggle,setChatListToggle]=useState(true)
  return (
    <div className="flex top-0 left-0 right-0 fixed  sm:max-md:top-0 sm:max-md:absolute" >
      <MessageList chatListToggle={chatListToggle} setChatListToggle={setChatListToggle} />
      <Outlet context={{chatListToggle,setChatListToggle}}/>
    </div>
  );
};

export default MessageLayout;
