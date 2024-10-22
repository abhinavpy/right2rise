import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Chat from './components/Chat';
import IncidentReport from './components/IncidentReport';
import SmartResourceLocator from './components/SmartResourceLocator'; // Import the new component
import Layout from './components/Layout';
import Dashboard from './components/Dashboard'; // Import Dashboard component
import NotFound from './components/NotFound'; // If you have a NotFound component

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Route - No Navbar and Footer */}
        <Route path="/" element={<Home />} />

        {/* Other Routes - Wrapped with Layout */}
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} /> {/* New Dashboard Route */}
          <Route path="about" element={<About />} />
          <Route path="chat" element={<Chat />} />
          <Route path="incident-report" element={<IncidentReport />} />
          <Route path="resource-locator" element={<SmartResourceLocator />} /> {/* New Route */}
          {/* Add more routes here as needed */}
        </Route>

        {/* NotFound Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
