// frontend/src/components/userform.js

import React, { useState } from 'react';
import getRecommendation from '../ai/recAPI';
import './userform.css'; // Make sure you create and import a separate CSS file for specific styling if needed.

function UserForm({ onRecommend }) {
    const [preferences, setPreferences] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const recommendation = await getRecommendation(preferences);
        onRecommend(recommendation);
    };

    return (
        <form onSubmit={handleSubmit} className="user-form">
            <label>How do you want to dress today diva?</label>
            <div className="input-container">
                <input 
                    type="text" 
                    value={preferences} 
                    onChange={(e) => setPreferences(e.target.value)} 
                    placeholder="e.g., casual, business, sporty"
                />
            </div>
            <div className="button-container">
                <button type="submit">STYLE ME</button>
            </div>
        </form>
    );
}

export default UserForm;








