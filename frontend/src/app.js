// frontend/src/app.js

import React, { useState } from 'react';
import UserForm from './components/userform';
import OutfitRec from './components/outfitrec';

function App() {
    const [recommendation, setRecommendation] = useState('');

    const handleRecommendation = (result) => {
        setRecommendation(result);
    };

    return (
        <div className="App">
            <h1>AI Stylist</h1>
            <UserForm onRecommend={handleRecommendation} />
            <OutfitRec recommendation={recommendation} />
        </div>
    );
}

export default App;




