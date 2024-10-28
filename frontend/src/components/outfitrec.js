import React from 'react';

function OutfitRec({ recommendation }) {
    return (
        <div>
            <h2>Recommended Outfit</h2>
            <p>{recommendation || "Enter preferences to get a recommendation."}</p>
        </div>
    );
}

export default OutfitRec;
