// frontend/src/components/userform.js

import React, { useState } from 'react';
import getRecommendation from '../ai/recAPI';

function UserForm({ onRecommend }) {
    const [preferences, setPreferences] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const recommendation = await getRecommendation(preferences);
        onRecommend(recommendation);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter Style Preferences:</label>
            <input 
                type="text" 
                value={preferences} 
                onChange={(e) => setPreferences(e.target.value)} 
                placeholder="e.g., casual, business, sporty"
            />
            <button type="submit">Get Recommendation</button>
        </form>
    );
}

export default UserForm;








