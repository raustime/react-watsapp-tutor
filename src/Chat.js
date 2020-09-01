import React, { useState, useEffect } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined, AttachFile, MoreVert } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";

function Chat() {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessage=(e)=>{
      e.preventDefault();
      console.log('You typed >>>', input);
      setInput('');
  };
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat_headerInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className={`chat__message ${true && 'chat__receiver'}`}>
          <span className="chat__name">Sonny Changa</span>
            Hey Guys
          <span className="chat__timestamp">3:52 pm</span>
        </p>
      </div>
      <div className="chat__footer">
          <InsertEmoticonIcon />
          <form>
              <input 
                type="text" 
                placeholder="Type a message" 
                onChange={(e)=>setInput(e.target.value)}
                value={input}
              />
              <button onClick={sendMessage}>Send a message</button>
          </form>
          <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
