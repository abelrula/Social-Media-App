 import { useState } from 'react';
import  Picker  from 'emoji-picker-react';

const Emojii = () => {

  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [openEmoji, setOpenEmoji] = useState(false);
  const [postContenet, setPostContenet] = useState("");const onEmojiClick = (event, emojiObject) => {
      setChosenEmoji(emojiObject?.emoji);
    };
  
    return (
      <div>
        <Picker onEmojiClick={onEmojiClick} />
    </div>
    );
}

export default Emojii

 