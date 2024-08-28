import React from 'react';
import '../static/css/coursecards.css';

const CourseCards = () => {
    return (
        <div className="course-cards">
            <h1>Know More About Courses</h1>
            <div className="course-card">
                <h2>Artificial Intelligence and Machine Learning (AIML)</h2>
                <p>Artificial Intelligence and Machine Learning (AIML) is all about creating intelligent systems that can
                    learn and make decisions. It's at the forefront of technology.</p>
            </div>
            <div className="course-card">
                <h2>Artificial Intelligence (AI)</h2>
                <p>Artificial Intelligence (AI) is the simulation of human intelligence processes by machines, especially
                    computer systems. It involves tasks such as problem-solving, understanding natural language, and
                    learning.</p>
            </div>
            <div className="course-card">
                <h2>Computer Science (CSE)</h2>
                <p>Computer Science and Engineering (CSE) is the study of algorithms, data structures, programming
                    languages, software engineering, and more. It's a field that powers the digital world we live in.</p>
            </div>
            <div className="course-card">
                <h2>Computer Science and Technology (CST)</h2>
                <p>Computer Science and Technology (CST) is a multidisciplinary field that combines computer science with
                    various technology applications, preparing students for careers in tech.</p>
            </div>
            <div className="course-card">
                <h2>Electrical and Computer Engineering(ECE)</h2>
                <p>Electrical and Computer Engineering (ECE) is a branch of engineering that deals with the study of
                    electrical systems, electronics, and computer technology. It combines both electrical and computer
                    science principles.</p>
            </div>
            <div className="course-card">
                <h2>Electronics and Communication Technology(ECT)</h2>
                <p>Electronics and Communication Technology (ECT) focuses on electronic devices, circuits, communication
                    systems, and technologies. It plays a key role in modern communication and information processing.</p>
            </div>
            <div className="course-card">
                <h2>Electrical and Electronics Engineering (EEE)</h2>
                <p>Electrical and Electronics Engineering (EEE) deals with the study of electrical systems, electronics, and
                    electromagnetism. It's essential for modern infrastructure.</p>
            </div>
            <div className="course-card">
                <h2>Mechanical Engineering (Mech)</h2>
                <p>Mechanical Engineering (Mech) is all about designing, analyzing, and manufacturing mechanical systems.
                    It's a versatile field with diverse applications.</p>
            </div>
            <div className="course-card">
                <h2>Civil Engineering (Civil)</h2>
                <p>Civil Engineering (Civil) involves the design and construction of infrastructure projects like roads,
                    bridges, and buildings. It's about shaping the physical world.</p>
            </div>
        </div>
    );
};

export default CourseCards;
