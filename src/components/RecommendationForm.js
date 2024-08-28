import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../static/css/recommendationform.css';

function RecommendationForm() {
    const [rank, setRank] = useState('');
    const [gender, setGender] = useState('');
    const [locations, setLocations] = useState([]);
    const [caste, setCaste] = useState('');
    const [branches, setBranches] = useState([]);
    const navigate = useNavigate();

    const locationMap = {
        ATP: 'Anantapur',
        CTR: 'Chittoor',
        EG: 'East Godavari',
        GTR: 'Guntur',
        KDP: 'Kadapa',
        KNL: 'Kurnool',
        KRI: 'Krishna',
        NLR: 'Nellore',
        PKS: 'Prakasam',
        SKL: 'Srikakulam',
        VSP: 'Visakhapatnam',
        VZM: 'Vizianagaram',
        WG: 'West Godavari'
    };

    const branchCodes = ['AID', 'AIM', 'CAI', 'CIV', 'CS', 'CSB', 'CSE', 'CSM', 'DS', 'ECE', 'ECT', 'EEE', 'INF', 'MEC'];

    const handleCheckboxChange = (e, setState) => {
        const { value } = e.target;
        setState(prev =>
            prev.includes(value)
                ? prev.filter(item => item !== value)
                : [...prev, value]
        );
    };

    const handleRankChange = (e) => {
        setRank(e.target.value);
    };

    const handleCasteChange = (e) => {
        setCaste(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            rank,
            caste,
            locations,
            branches,
            gender
        };

        console.log('Posting data:', formData);

        if (!rank || !caste || locations.length === 0 || branches.length === 0 || !gender) {
            alert('Please fill all required fields.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/recommend', formData);

            const data = response.data;
            console.log('Colleges found:', data);

            const noColleges = data.length === 0;

            navigate('/recommendations', {
                state: {
                    colleges: data,
                    message: noColleges ? 'No colleges found.' : ''
                }
            });
        } catch (error) {
            console.error('Error occurred:', error);
            navigate('/recommendations', {
                state: {
                    colleges: [],
                    message: 'An error occurred while fetching recommendations.'
                }
            });
        }
    };

    return (
        <div id="form-container">
            <form id="recommendation-form" onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="rank">Enter Your Rank:</label>
                    <input
                        type="number"
                        id="rank"
                        name="rank"
                        value={rank}
                        onChange={handleRankChange}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Choose Your Gender:</label>
                    <div className="radio-group">
                        <input
                            type="radio"
                            id="gender-male"
                            name="gender"
                            value="BOYS"
                            checked={gender === "BOYS"}
                            onChange={(e) => setGender(e.target.value)}
                        />
                        <label htmlFor="gender-male">Male</label>
                        <input
                            type="radio"
                            id="gender-female"
                            name="gender"
                            value="GIRLS"
                            checked={gender === "GIRLS"}
                            onChange={(e) => setGender(e.target.value)}
                        />
                        <label htmlFor="gender-female">Female</label>
                    </div>
                </div>
                <div className="input-group">
                    <label>Choose Your District(s):</label>
                    <div className="checkbox-group">
                        {Object.keys(locationMap).map(loc => (
                            <div key={loc}>
                                <input
                                    type="checkbox"
                                    id={`location-${loc}`}
                                    name="locations"
                                    value={loc}
                                    checked={locations.includes(loc)}
                                    onChange={(e) => handleCheckboxChange(e, setLocations)}
                                />
                                <label htmlFor={`location-${loc}`}>{locationMap[loc]}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="input-group">
                    <label htmlFor="caste">Choose Your Category:</label>
                    <select
                        id="caste"
                        name="caste"
                        value={caste}
                        onChange={handleCasteChange}
                        required
                    >
                        <option value="">Select Category</option>
                        <option value="OC">OC</option>
                        <option value="SC">SC</option>
                        <option value="ST">ST</option>
                        <option value="BCA">BCA</option>
                        <option value="BCB">BCB</option>
                        <option value="BCC">BCC</option>
                        <option value="BCD">BCD</option>
                        <option value="BCE">BCE</option>
                        <option value="OC_EWS">OC EWS</option>
                    </select>
                </div>
                <div className="input-group">
                    <label>Choose Your Branch(es):</label>
                    <div className="checkbox-group">
                        {branchCodes.map(branch => (
                            <div key={branch}>
                                <input
                                    type="checkbox"
                                    id={`branch-${branch}`}
                                    name="branches"
                                    value={branch}
                                    checked={branches.includes(branch)}
                                    onChange={(e) => handleCheckboxChange(e, setBranches)}
                                />
                                <label htmlFor={`branch-${branch}`}>{branch}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="button-container">
                    <button type="submit" className="submit-button">Get Recommendations</button>
                </div>
            </form>
        </div>
    );
}

export default RecommendationForm;
