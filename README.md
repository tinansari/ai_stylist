# AI Stylist

AI Stylist is a web application that uses OpenAI's language model to recommend outfit styles based on user preferences. Users can input their style preferences, and the app returns personalized outfit suggestions.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Acknowledgments](#acknowledgments)

## Features

- Accepts user input for style preferences.
- Communicates with OpenAI's API to generate outfit recommendations.
- Frontend built with React for an interactive and responsive user experience.
- Backend API server built with Express to securely communicate with OpenAI’s API.
- Easy-to-follow interface with a minimalistic design.

## Technologies Used

- **Frontend**: React, JavaScript, CSS
- **Backend**: Node.js, Express
- **API**: OpenAI API (GPT model)
- **Environment Management**: dotenv for secure environment variable handling

## Setup and Installation

### Prerequisites

- Node.js and npm installed on your machine.
- OpenAI API Key for accessing the OpenAI model.

### Steps

1. **Clone the repository**:
    ```bash
    git clone https://github.com/tinansari/ai_stylist.git
    cd ai_stylist
    ```

2. **Install dependencies**:

    - Navigate to the frontend folder and install dependencies:
      ```bash
      cd frontend
      npm install
      ```

    - Navigate to the backend folder and install dependencies:
      ```bash
      cd ../backend
      npm install
      ```

3. **Set up environment variables**:

    - In the backend folder, create a `.env` file and add your OpenAI API key:
      ```plaintext
      OPENAI_API_KEY=your_openai_api_key_here
      ```

4. **Run the application**:

    - Start the backend server:
      ```bash
      npm start
      ```

    - Open a new terminal, navigate to the frontend folder, and start the frontend server:
      ```bash
      npm start
      ```

5. **Access the app**:

    - Visit [http://localhost:3000](http://localhost:3000) in your browser to use AI Stylist.

## Usage

- Enter your style preferences (e.g., casual, business, sporty) in the input field.
- Click "Get Recommendation" to receive a personalized outfit suggestion based on the provided style preferences.
- The suggested outfit will display below the input field.

## Folder Structure

```plaintext
ai_stylist/
├── backend/                  # Express API server
│   ├── node_modules/         # Backend dependencies
│   ├── index.js              # Main server code
│   ├── .env                  # Environment variables (not tracked by Git)
│   ├── .gitignore            # Ignore sensitive files
│   ├── package-lock.json     # Lockfile for backend dependencies
│   └── package.json          # Backend dependencies and scripts
│
├── frontend/                 # React frontend
│   ├── node_modules/         # Frontend dependencies
│   ├── public/               # Public assets
│   │   └── index.html        # HTML template for the React app
│   ├── src/                  # React components and logic
│   │   ├── ai/               # API communication files
│   │   │   └── recAPI.js     # Function to fetch recommendations from backend
│   │   ├── components/       # UI components
│   │   │   ├── userform.js   # Form to collect user preferences
│   │   │   └── outfitrec.js  # Display outfit recommendation
│   │   ├── app.js            # Main app component
│   │   ├── index.js          # ReactDOM render entry point
│   │   └── app.css           # Styling for the app
│   ├── .gitignore            # Ignore sensitive files in frontend
│   ├── package-lock.json     # Lockfile for frontend dependencies
│   └── package.json          # Frontend dependencies and scripts
│
├── README.md                 # Project information
└── package.json              # Root dependencies (if any)

## Acknowledgments

- OpenAI for the GPT models.
- React and Express for providing robust frameworks for building the app.
