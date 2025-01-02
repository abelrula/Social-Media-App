import { Outlet } from "react-router-dom";
import MessageList from "../components/messages/MessageList";
import { useState } from "react";
  const MessageLayout = () => {
    const [chatListToggle,setChatListToggle]=useState(true)
  return (
    <div className="flex" >
      <MessageList chatListToggle={chatListToggle} setChatListToggle={setChatListToggle} />
      <Outlet context={{chatListToggle,setChatListToggle}}/>
    </div>
  );
};

export default MessageLayout;
