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
- Chic, "Clueless"-inspired design for a fashionable user interface.

## Technologies Used
- **Frontend:** React, JavaScript, CSS
- **Backend:** Node.js, Express
- **API:** OpenAI API (GPT model)
- **Environment Management:** dotenv for secure environment variable handling

## Setup and Installation

### Prerequisites
- Node.js and npm installed on your machine.
- OpenAI API Key for accessing the OpenAI model.

### Steps

1. **Clone the repository:**
    ```bash
    git clone https://github.com/tinansari/ai_stylist.git
    cd ai_stylist
    ```

2. **Install dependencies:**

    - Navigate to the `frontend` folder and install dependencies:
        ```bash
        cd frontend
        npm install
        ```

    - Navigate to the `backend` folder and install dependencies:
        ```bash
        cd ../backend
        npm install
        ```

3. **Set up environment variables:**
    - In the `backend` folder, create a `.env` file and add your OpenAI API key:
        ```plaintext
        OPENAI_API_KEY=your_openai_api_key_here
        ```

4. **Run the application:**

    - Start the backend server:
        ```bash
        npm start
        ```

    - Open a new terminal, navigate to the `frontend` folder, and start the frontend server:
        ```bash
        cd ../frontend
        npm start
        ```

5. **Access the app:**
    - Visit `http://localhost:3000` in your browser to use AI Stylist.

## Usage
- Enter your style preferences (e.g., casual, business, sporty) in the input field.
- Click "STYLE ME" to receive a personalized outfit suggestion based on the provided style preferences.
- The suggested outfit will display in a chic format, and you can go back to the input screen using the "Back" button.

## Folder Structure

```plaintext
ai_stylist/
├── backend/                  # Express API server
│   ├── .env                  # Environment variables (not tracked by Git)
│   ├── .gitignore            # Ignore sensitive files
│   ├── index.js              # Main server code
│   ├── node_modules/         # Backend dependencies (not tracked by Git)
│   ├── package-lock.json     # Backend lockfile for installed dependencies
│   └── package.json          # Backend dependencies and scripts
│
├── frontend/                 # React frontend
│   ├── public/               # Public assets
│   │   ├── index.html        # HTML template
│   │   └── lace-overlay.png  # Lace overlay background image
│   ├── src/                  # React components and styles
│   │   ├── ai/               # API communication files
│   │   │   └── recAPI.js     # Function to fetch recommendations from backend
│   │   ├── components/       # UI components
│   │   │   ├── userform.js   # Form to collect user preferences
│   │   │   ├── userform.css
│   │   │   └── outfitrec.js  # Display outfit recommendation
│   │   ├── utils/            # Utility files (e.g., config)
│   │   ├── app.css           # Styling for the app
│   │   ├── app.js            # Main app component
│   │   └── index.js          # ReactDOM render entry point
│   ├── .gitignore            # Ignore sensitive files
│   ├── node_modules/         # Frontend dependencies (not tracked by Git)
│   ├── package-lock.json     # Frontend lockfile for installed dependencies
│   └── package.json          # Frontend dependencies and scripts
│
├── README.md                 # Project information
