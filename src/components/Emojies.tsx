import { useState } from "react";
import Picker from "emoji-picker-react";
import { BsEmojiSmile } from "react-icons/bs";
  
function Emojies ({setMsg}:{setMsg:React.Dispatch<React.SetStateAction<string>>}) {
  const [inputStr, setInputStr] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  
   const  handleEmojiClick= ( emojiObject) => {
          setMsg((prevMsg) => prevMsg + emojiObject.emoji)
          setShowPicker(false)
    }

  return (
      <div className="z-50">
        <BsEmojiSmile   
          onClick={() => setShowPicker((val) => !val)}
        />
        {showPicker && (
          <Picker  onEmojiClick={handleEmojiClick} />
        )}
      </div>
  );
         
}

export default Emojies;
