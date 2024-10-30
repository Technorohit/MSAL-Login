// src/Dashboard.js
import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    // Mock data for the dashboard
    const stats = [
        { label: 'Total Users', value: 1200 },
        { label: 'Active Sessions', value: 320 },
        { label: 'Sales Today', value: 50 },
    ];

    const activities = [
        { id: 1, activity: 'User JohnDoe logged in', time: '10 mins ago' },
        { id: 2, activity: 'New sale completed - $50', time: '30 mins ago' },
        { id: 3, activity: 'User JaneSmith signed up', time: '1 hour ago' },
        { id: 4, activity: 'New sale completed - $100', time: '2 hours ago' },
    ];

    return (
        <div className="dashboard-container">
            <h1>Welcome to the Dashboard(Dummy Data)</h1>

            {/* Statistics Section */}
            <div className="stats-section">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-card">
                        <h2>{stat.value}</h2>
                        <p>{stat.label}</p>
                    </div>
                ))}
            </div>

            {/* Recent Activities Section */}
            <div className="activities-section">
                <h2>Recent Activities</h2>
                <ul>
                    {activities.map(activity => (
                        <li key={activity.id} className="activity-item">
                            <span>{activity.activity}</span>
                            <span className="time">{activity.time}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
