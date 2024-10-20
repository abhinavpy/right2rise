import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Chat from './components/Chat'; // Import the Chat component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/chat" element={<Chat />} /> {/* Add Chat route */}
      </Routes>
    </Router>
  );
}

export default App;
