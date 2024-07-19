 import image1 from "../../assets/messaging.jpg";
const MessageListheader = () => {
  return (
    <div className="flex w-full  flex-col gap-24 bg-[#032225] items-center justify-center text-center">
      <h1 className="font-mono text-white"> Click the side Notifiaction </h1>
      <img className="h-[350px] w-[520px] object-cover" src={image1} alt="background" />
    </div>
  );
};

export default MessageListheader;
