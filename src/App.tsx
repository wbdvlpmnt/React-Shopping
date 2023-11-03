import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";

function App() {
  return (
    <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
