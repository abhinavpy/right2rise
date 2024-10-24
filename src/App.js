import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Chat from './components/Chat';
import IncidentReport from './components/IncidentReport';
import SmartResourceLocator from './components/SmartResourceLocator';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute'; // Import ProtectedRoute
import Logout from './components/Logout'; // Import the Logout component


function App() {
  return (
    <Router>
      <Routes>
        {/* Home Route - No Navbar and Footer */}
        <Route path="/" element={<Home />} />

        {/* Login Route */}
        <Route path="/login" element={<Login />} />

        {/* Other Routes - Wrapped with Layout and Protected */}
        <Route path="/" element={<Layout />}>
          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
          <Route
            path="chat"
            element={
              <ProtectedRoute>
                <Chat />
              </ProtectedRoute>
            }
          />
          <Route
            path="incident-report"
            element={
              <ProtectedRoute>
                <IncidentReport />
              </ProtectedRoute>
            }
          />
          <Route
            path="resource-locator"
            element={
              <ProtectedRoute>
                <SmartResourceLocator />
              </ProtectedRoute>
            }
          />
          {/* Add more routes here as needed */}
        </Route>
        {/* Logout Route */}
        <Route path="/logout" element={<Logout />} />
        {/* NotFound Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
