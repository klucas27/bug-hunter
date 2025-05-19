# README.md

# Backend for Bug Hunter

This is the backend service for the Bug Hunter project, which integrates with the OpenAI API to provide code correction features for users.

## Project Structure

```
backend
├── src
│   ├── app.js                # Entry point of the application
│   ├── routes
│   │   └── openai.js         # Routes for OpenAI API
│   ├── controllers
│   │   └── openaiController.js # Controller for handling OpenAI logic
│   └── services
│       └── openaiService.js  # Service for interacting with OpenAI API
├── package.json               # NPM configuration file
├── .env                       # Environment variables
└── README.md                  # Project documentation
```

## Installation

1. Clone the repository:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd backend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your OpenAI API key:

   ```
   OPENAI_API_KEY=your_api_key_here
   ```

## Usage

1. Start the server:

   ```bash
   node src/app.js
   ```

2. The server will run on `http://localhost:3000` (or the port specified in your configuration).

3. To correct user code, send a POST request to the `/api/correct` endpoint with the code to be corrected in the request body.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.