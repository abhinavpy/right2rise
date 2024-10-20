import React, { useState, useRef } from 'react';
import './IncidentReport.css';
import { FaExclamationTriangle, FaCheckCircle, FaShieldAlt, FaUsers, FaFileUpload } from 'react-icons/fa';
import { MdCategory, MdSubdirectoryArrowRight } from 'react-icons/md';

const IncidentReport = () => {
  const [report, setReport] = useState('');
  const [files, setFiles] = useState([]);
  const [location, setLocation] = useState('');
  const [severity, setSeverity] = useState(5); // Default to middle severity
  const [submitted, setSubmitted] = useState(false);
  const [classification, setClassification] = useState({
    category: '',
    subcategories: [],
    severityLevel: 0,
    priorityStatus: '',
    recommendedActions: {
      personalProtection: '',
      institutionalActions: '',
      resources: [],
    },
  });

  const classificationRef = useRef(null);

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy classification response
    const dummyClassification = {
      category: 'Workplace Harassment',
      subcategories: ['Verbal Abuse', 'Discrimination'],
      severityLevel: parseInt(severity, 10),
      priorityStatus: parseInt(severity, 10) >= 8 ? 'High' : parseInt(severity, 10) >= 5 ? 'Medium' : 'Low',
      recommendedActions: {
        personalProtection: 'Document all incidents and seek support from HR.',
        institutionalActions: 'Conduct a thorough investigation and provide training.',
        resources: [
          { name: 'Legal Aid', link: 'https://www.legalaid.org' },
          { name: 'Counseling Services', link: 'https://www.counseling.org' },
        ],
      },
    };

    setClassification(dummyClassification);
    setSubmitted(true);

    // Scroll to classification results
    if (classificationRef.current) {
      classificationRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to get severity icon based on level
  const getSeverityIcon = (level) => {
    if (level >= 8) return <FaExclamationTriangle color="#C0392B" size={24} />;
    if (level >= 5) return <FaExclamationTriangle color="#E67E22" size={24} />;
    return <FaCheckCircle color="#27AE60" size={24} />;
  };

  // Function to get category icon (generic for demo)
  const getCategoryIcon = () => <MdCategory size={20} />;

  // Function to get subcategory icon (generic for demo)
  const getSubcategoryIcon = () => <MdSubdirectoryArrowRight size={20} />;

  return (
    <div className="incident-report-container">
      {/* Incident Reporting Section */}
      <section className="incident-report-section">
        <h2>Automated Incident Classification</h2>
        <form onSubmit={handleSubmit} className="incident-form">
          {/* Text Box for User to Input Report */}
          <div className="form-group">
            <label htmlFor="report"><FaShieldAlt className="icon-label" /> Incident Report</label>
            <textarea
              id="report"
              value={report}
              onChange={(e) => setReport(e.target.value)}
              placeholder="Describe the incident..."
              required
            ></textarea>
          </div>

          {/* File Upload */}
          <div className="form-group">
            <label htmlFor="files"><FaFileUpload className="icon-label" /> Attach Supporting Documents</label>
            <div className="custom-file-upload">
              <input
                type="file"
                id="files"
                accept=".pdf, .txt"
                multiple
                onChange={handleFileChange}
              />
              <label htmlFor="files" className="file-upload-label">
                Choose Files
              </label>
            </div>
            {files.length > 0 && (
              <div className="selected-files">
                <p>Selected Files:</p>
                <ul>
                  {files.map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Location of Incident */}
          <div className="form-group">
            <label htmlFor="location"><FaUsers className="icon-label" /> Location of Incident</label>
            <select
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            >
              <option value="">Select Location</option>
              <option value="New York, NY, USA">New York, NY, USA</option>
              <option value="Los Angeles, CA, USA">Los Angeles, CA, USA</option>
              <option value="London, UK">London, UK</option>
              <option value="Toronto, Canada">Toronto, Canada</option>
              <option value="Sydney, Australia">Sydney, Australia</option>
              {/* Add more locations as needed */}
            </select>
          </div>

          {/* Severity Slider */}
          <div className="form-group">
            <label htmlFor="severity">Perceived Severity Level: {severity} {getSeverityIcon(severity)}</label>
            <input
              type="range"
              id="severity"
              min="1"
              max="10"
              value={severity}
              onChange={(e) => setSeverity(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="cta-button submit-button">
            Submit Report
          </button>
        </form>
      </section>

      {/* Classification Results Section */}
      {submitted && (
        <section
          className="classification-results-section"
          ref={classificationRef}
        >
          <h2>Incident Classification</h2>
          <div className="classification-content">
            <div className="classification-item">
              <MdCategory className="icon-classification" /> <strong>Category:</strong> {classification.category}
            </div>
            {classification.subcategories.length > 0 && (
              <div className="classification-item">
                <MdSubdirectoryArrowRight className="icon-classification" /> <strong>Subcategories:</strong> {classification.subcategories.join(', ')}
              </div>
            )}
            <div className="classification-item">
              <FaExclamationTriangle className="icon-classification" /> <strong>Severity Level:</strong>{' '}
              <span
                className={`severity-badge severity-${classification.severityLevel}`}
              >
                {classification.severityLevel}
              </span>
            </div>
            <div className="classification-item">
              <FaCheckCircle className="icon-classification" /> <strong>Priority Status:</strong> {classification.priorityStatus}
            </div>
          </div>

          {/* Recommended Solutions */}
          <div className="recommended-actions">
            <h3>Recommended Actions</h3>
            <div className="action-section">
              <strong>Personal Protection Measures:</strong>
              <p>{classification.recommendedActions.personalProtection}</p>
            </div>
            <div className="action-section">
              <strong>Institutional Actions:</strong>
              <p>{classification.recommendedActions.institutionalActions}</p>
            </div>
            <div className="action-section">
              <strong>Resources:</strong>
              <ul>
                {classification.recommendedActions.resources.map((resource, index) => (
                  <li key={index}>
                    <a href={resource.link} target="_blank" rel="noopener noreferrer">
                      {resource.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default IncidentReport;
