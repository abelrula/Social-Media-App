import { useState } from "react";
import Picker from "emoji-picker-react";
import { BsEmojiSmile } from "react-icons/bs";
import { useLocation } from "react-router-dom";
  
function Emojies ({setMsg}:{setMsg:React.Dispatch<React.SetStateAction<string>>}) {
  const [inputStr, setInputStr] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  
   const  handleEmojiClick= ( emojiObject) => {
          setMsg((prevMsg) => prevMsg + emojiObject.emoji)
          setShowPicker(false)
    }
 const { pathname } = useLocation()
  console.log(pathname.includes("message"));
  return (
      <div className="relative z-50">
        <BsEmojiSmile   
          onClick={() => setShowPicker((val) => !val)}
        />
        {showPicker && (
        <span className={`${pathname.includes("message") && showPicker ? "absolute -top-[510px]" : null}`}>
          <Picker  onEmojiClick={handleEmojiClick} />

        </span>
        )}
      </div>
  );
         
}

export default Emojies;
