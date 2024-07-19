import React from "react";
import { Outlet } from "react-router-dom";
import MessageList from "./MessageList";
  const MessageLayout = () => {
  return (
    <div className="flex" >
      <MessageList />
      <Outlet />
    </div>
  );
};

export default MessageLayout;
