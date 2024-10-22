import React, { useState } from 'react';
import './SmartResourceLocator.css';
import { FaMapMarkerAlt, FaSearchLocation } from 'react-icons/fa';

const SmartResourceLocator = () => {
  const [location, setLocation] = useState(null);
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Placeholder function to simulate fetching resources
  const fetchResources = (latitude, longitude) => {
    // Placeholder data
    const placeholderResources = [
      {
        id: 1,
        name: 'Women\'s Support Center',
        address: '123 Main St, Cityville',
        type: 'Support Center',
      },
      {
        id: 2,
        name: 'Legal Aid Society',
        address: '456 Elm St, Cityville',
        type: 'Legal Aid',
      },
      {
        id: 3,
        name: 'Equality Lawyers',
        address: '789 Oak St, Cityville',
        type: 'Law Firm',
      },
    ];

    // Simulate API response delay
    setTimeout(() => {
      setResources(placeholderResources);
      setLoading(false);
    }, 1500);
  };

  const handleFindResources = () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.');
      return;
    }

    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        fetchResources(latitude, longitude);
      },
      () => {
        setError('Unable to retrieve your location.');
        setLoading(false);
      }
    );
  };

  return (
    <div className="resource-locator-container">
      <h1>Smart Resource Locator</h1>
      <p>
        Find nearby lawyers and support centers tailored to your needs. Our AI-driven system recommends essential services based on your location and preferences.
      </p>
      <button className="cta-button locate-button" onClick={handleFindResources} disabled={loading}>
        {loading ? 'Finding Resources...' : 'Find Resources Near Me'}
      </button>

      {error && <p className="error-message">{error}</p>}

      {location && (
        <div className="location-info">
          <FaMapMarkerAlt className="location-icon" />
          <p>Your Location: Latitude {location.latitude.toFixed(4)}, Longitude {location.longitude.toFixed(4)}</p>
        </div>
      )}

      {resources.length > 0 && (
        <div className="resources-list">
          <h2>Recommended Resources</h2>
          <ul>
            {resources.map((resource) => (
              <li key={resource.id} className="resource-item">
                <FaSearchLocation className="resource-icon" />
                <div className="resource-details">
                  <h3>{resource.name}</h3>
                  <p>{resource.address}</p>
                  <span className="resource-type">{resource.type}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {!loading && resources.length === 0 && location && (
        <p className="no-resources-message">No resources found near your location.</p>
      )}
    </div>
  );
};

export default SmartResourceLocator;
