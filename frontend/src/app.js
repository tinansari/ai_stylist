// frontend/src/app.js

import React, { useState } from 'react';
import UserForm from './components/userform';
import OutfitRec from './components/outfitrec';
import './app.css';

function App() {
    const [recommendation, setRecommendation] = useState('');
    const [showRecommendation, setShowRecommendation] = useState(false);

    const handleRecommendation = (result) => {
        setRecommendation(result);
        setShowRecommendation(true); // Show recommendation after receiving result
    };

    const handleBack = () => {
        setShowRecommendation(false); // Go back to input form view
        setRecommendation(''); // Clear the recommendation
    };

    return (
        <div className="App">
            {!showRecommendation ? (
                <>
                    <h1>AI Stylist</h1>
                    <UserForm onRecommend={handleRecommendation} />
                </>
            ) : (
                <>
                    <h2>Recommended Outfit</h2>
                    <p className="recommendation-text">{recommendation}</p>
                    <button className="back-button" onClick={handleBack}>Back</button>
                </>
            )}
        </div>
    );
}

export default App;





