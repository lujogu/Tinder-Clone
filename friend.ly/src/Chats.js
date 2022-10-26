import "./Chats.css";
import Chat from "./Chat.js";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Mom"
        message="Come home, the food's getting cold"
        timestamp="1 second ago"
        profilePic="https://www.emmys.com/sites/default/files/shows/mom-2016-600x600.jpg"
      />
      <Chat
        name="Bro"
        message="I love you bro ;)"
        timestamp="40 seconds ago"
        profilePic=""
      />
      <Chat
        name="Red Guy"
        message="ashdlfk;jahsdfkjhasikljdf"
        timestamp="2 hours ago"
        profilePic="https://pioneeroptimist.com/wp-content/uploads/2021/03/among-us-6008615_1920-838x900.png"
      />
      <Chat
        name="Bob"
        message="hey there"
        timestamp="4 years ago"
        profilePic=""
      />
    </div>
  );
}

export default Chats;
