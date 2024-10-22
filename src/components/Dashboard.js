// src/components/Dashboard.js
import React from 'react';
import './Dashboard.css';
import { FaUsers, FaShieldAlt, FaRegFileAlt, FaChartBar } from 'react-icons/fa';

const Dashboard = () => {
  // Placeholder data
  const stats = [
    {
      id: 1,
      icon: <FaUsers />,
      title: 'Total Users',
      value: 1500,
    },
    {
      id: 2,
      icon: <FaShieldAlt />,
      title: 'Active Support Centers',
      value: 45,
    },
    {
      id: 3,
      icon: <FaRegFileAlt />,
      title: 'Incident Reports',
      value: 320,
    },
    {
      id: 4,
      icon: <FaChartBar />,
      title: 'Resources Available',
      value: 120,
    },
  ];

  const recentReports = [
    {
      id: 1,
      user: 'Jane Doe',
      type: 'Harassment',
      status: 'Open',
      date: '2024-04-15',
    },
    {
      id: 2,
      user: 'Emily Smith',
      type: 'Discrimination',
      status: 'Resolved',
      date: '2024-04-10',
    },
    {
      id: 3,
      user: 'Maria Garcia',
      type: 'Safety Concern',
      status: 'In Progress',
      date: '2024-04-12',
    },
  ];

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      
      {/* Statistics Section */}
      <div className="stats-section">
        {stats.map((stat) => (
          <div key={stat.id} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-info">
              <h3>{stat.value}</h3>
              <p>{stat.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Incident Reports */}
      <div className="reports-section">
        <h2>Recent Incident Reports</h2>
        <table className="reports-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Type</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {recentReports.map((report) => (
              <tr key={report.id}>
                <td>{report.user}</td>
                <td>{report.type}</td>
                <td>
                  <span className={`status ${report.status.replace(' ', '-').toLowerCase()}`}>
                    {report.status}
                  </span>
                </td>
                <td>{report.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Resources Section */}
      <div className="resources-section">
        <h2>Available Resources</h2>
        <div className="resources-list">
          {/* Placeholder for resources */}
          <div className="resource-item">
            <h3>Legal Aid Society</h3>
            <p>456 Elm St, Cityville</p>
            <span className="resource-type">Legal Aid</span>
          </div>
          <div className="resource-item">
            <h3>Women’s Support Center</h3>
            <p>123 Main St, Cityville</p>
            <span className="resource-type">Support Center</span>
          </div>
          <div className="resource-item">
            <h3>Equality Lawyers</h3>
            <p>789 Oak St, Cityville</p>
            <span className="resource-type">Law Firm</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
