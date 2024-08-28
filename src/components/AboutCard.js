import React, { useEffect, useState } from 'react';
import '../static/css/aboutcard.css';

function AboutCard() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const aboutCard = document.getElementById('about-card');
            const rect = aboutCard.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                setVisible(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div id="about-card" className={`about-card ${visible ? 'visible' : ''}`}>
            <div className="about-card-content">
                <h1>About College Compass</h1>
                <p>At College Compass, we are dedicated to guiding you toward the best educational opportunities. Our innovative platform offers personalized college recommendations, tailored to your preferences and aspirations.</p>
                <h2>Why Choose Us?</h2>
                <ul>
                    <li>Customized recommendations based on rank, location, and personal interests.</li>
                    <li>A commitment to providing accurate and up-to-date information.</li>
                    <li>Expert guidance to help you make informed decisions about your future.</li>
                </ul>
                <h2>Discover Your Path</h2>
                <p>Navigate through our intuitive interface to explore various courses and colleges, and find the right fit for your academic journey. We’re here to empower you every step of the way.</p>
            </div>
        </div>
    );
}

export default AboutCard;
