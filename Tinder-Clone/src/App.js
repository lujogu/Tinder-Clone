import './App.css';
import Header from './Header';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/chat/:person" element={<>
            <Header backButton="/" />
            <ChatScreen />
            </>} />
          <Route path="/chat" element={<>
            <Header backButton="/" />
            <Chats />
            </>} />
          <Route path="/"  element={<>
            <Header />
            <TinderCards />
            <SwipeButtons />
            </>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
