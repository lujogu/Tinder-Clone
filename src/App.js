import './App.css';
import Header from './Header';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/chat" element={<>
            <Header backButton="/" />
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
}

export default App;
