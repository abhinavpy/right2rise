import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Chat from './components/Chat';
import IncidentReport from './components/IncidentReport'; // Import the IncidentReport component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/incident-report" element={<IncidentReport />} /> {/* Add IncidentReport route */}
      </Routes>
    </Router>
  );
}

export default App;
