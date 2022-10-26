import React, { useState } from "react";
import Avatar from '@mui/material/Avatar';
import './ChatScreen.css';

function ChatScreen() {
  const [messages, setMessages] = useState([
    {
      name: 'zadathon',
      image: 'https://media-exp1.licdn.com/dms/image/C4E03AQESVJmmSCmmAA/profile-displayphoto-shrink_200_200/0/1649380925951?e=2147483647&v=beta&t=uo-QyobwfSrE5osbL7ii1YCOsoxLHJgHfJiYucVfOCQ',
      message: "What's up :)"
    },
    {
      name: 'zadathon',
      image: 'https://media-exp1.licdn.com/dms/image/C4E03AQESVJmmSCmmAA/profile-displayphoto-shrink_200_200/0/1649380925951?e=2147483647&v=beta&t=uo-QyobwfSrE5osbL7ii1YCOsoxLHJgHfJiYucVfOCQ',
      message: "I miss you"
    },
    {
      name: 'zadathon',
      image: 'https://media-exp1.licdn.com/dms/image/C4E03AQESVJmmSCmmAA/profile-displayphoto-shrink_200_200/0/1649380925951?e=2147483647&v=beta&t=uo-QyobwfSrE5osbL7ii1YCOsoxLHJgHfJiYucVfOCQ',
      message: "Let me get a tickle in"
    },
    {
      message: "ofc big بابا"
    }
  ]);

  return (
    <div className="chatScreen">
      <p className="chatScreen_timestamp"> YOU MATCHED WITH ZADIMANGO ON 10/25/2022 </p>
      {messages.map(message => (
        message.name ? (
          <div className="chatScreen_message">
            <Avatar
              className="ChatScreen_image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen_text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen_message">
            <p className="chatScreen_textUser">{message.message}</p>
          </div>
        )
      ))}
    </div>
  );
}

export default ChatScreen;
