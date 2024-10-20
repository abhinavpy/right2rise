// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Chat from './components/Chat';
import IncidentReport from './components/IncidentReport';
import Layout from './components/Layout'; // Import Layout component

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Route - No Navbar and Footer */}
        <Route path="/" element={<Home />} />

        {/* Other Routes - Wrapped with Layout */}
        <Route path="/" element={<Layout />}>
          <Route path="about" element={<About />} />
          <Route path="chat" element={<Chat />} />
          <Route path="incident-report" element={<IncidentReport />} />
          {/* Add more routes here as needed */}
        </Route>

        {/* Optional: Add a NotFound component for undefined routes */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
