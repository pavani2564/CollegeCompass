import React from 'react';
import { Link } from 'react-router-dom';
import AboutCard from '../components/AboutCard';
import CourseCards from '../components/CourseCards';
import '../static/css/home.css';

function Home() {
    return (
        <div className="home-container">
            <div className="welcome-section">
                <div className="welcome-content">
                    <h1>We Thrive For You</h1>
                    <p>Get recommendations for colleges based on your preferences.</p>
                    <Link to="/recommendation-form" className="button">Try Now</Link>
                </div>
            </div>
            <AboutCard />
            <CourseCards />
            <footer className="footer">
                &copy;  College Compass
            </footer>
        </div>
    );
}

export default Home;
