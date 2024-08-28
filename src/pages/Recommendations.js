//pages/Recommendations.js

import React from 'react';
import { useLocation } from 'react-router-dom';
import '../static/css/recommendations.css';

function Recommendations() {
    const location = useLocation();
    const { colleges, message } = location.state || { colleges: [], message: '' };

    return (
        <div className="recommendations-container">
            <h1>College Recommendations</h1>
            {message && <p className="message">{message}</p>}
            {colleges.length > 0 ? (
                <div className="college-grid">
                    {colleges.map(college => (
                        <div key={college._id} className="college-card">
                            <h2>{college.inst_name || 'No Name Provided'}</h2>
                            {college.DIST && <p><strong>District:</strong> {college.DIST}</p>}
                            {college.PLACE && <p><strong>Place:</strong> {college.PLACE}</p>}
                            {college.branch_code && <p><strong>Branch Code:</strong> {college.branch_code}</p>}
                        </div>
                    ))}
                </div>
            ) : (
                <p>No recommendations available.</p>
            )}
        </div>
    );
}

export default Recommendations;
