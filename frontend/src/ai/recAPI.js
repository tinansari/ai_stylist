// frontend/src/ai/recAPI.js

const getRecommendation = async (preferences) => {
    try {
        const response = await fetch("http://localhost:5001/recommend", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ preferences }),
        });
        const data = await response.json();
        return data.recommendation;
    } catch (error) {
        console.error("Error fetching recommendation:", error);
        return "Unable to fetch recommendation. Please try again.";
    }
};

export default getRecommendation;




