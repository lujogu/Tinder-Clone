import "./Chats.css";
import Chat from "./Chat.js";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Lucas"
        message="yoyoyo"
        timestamp="40 seconds ago"
        profilePic="data:image/jpeg;base64,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"
      />
      <Chat
        name="Zad"
        message="I like Iranian things"
        timestamp="2 hours ago"
        profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/1200px-Flag_of_Iran.svg.png"
      />
      <Chat
        name="Mark"
        message="bleep bloop"
        timestamp="80 seconds ago"
        profilePic="https://media.wired.com/photos/599cbdf191885f7b084d37f7/125:94/w_1374,h_1033,c_limit/Robot-Video.jpg"
      />
      <Chat
        name="Bricen"
        message="I have a nice back"
        timestamp="20 days ago"
        profilePic="https://www.ties.com/blog/wp-content/uploads/2019/04/69c3ae4pmu.jpg"
      />
    </div>
  );
}

export default Chats;
