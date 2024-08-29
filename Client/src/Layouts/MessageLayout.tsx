import { Outlet } from "react-router-dom";
import MessageList from "../components/messages/MessageList";
  const MessageLayout = () => {
  return (
    <div className="flex" >
      <MessageList />
      <Outlet />
    </div>
  );
};

export default MessageLayout;
