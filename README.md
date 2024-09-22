# Address Management

## Overview

The Address Management application is a user-friendly platform that allows users to register and efficiently manage their addresses. Built using the MERN stack, this application provides a seamless experience for users to handle their address data.

## Features

- **User Registration**: Users can register their names and manage their accounts.
- **Address Management**: Users can add, view, update, and delete their addresses.
- **One-to-Many Relationship**: Each user can have multiple addresses, allowing for organized management of personal information.

## Technologies Used

- **MongoDB**: NoSQL database for storing user and address data.
- **Express.js**: Web framework for Node.js to handle API requests.
- **React.js**: Frontend library for building the user interface.
- **Node.js**: JavaScript runtime for server-side programming.

## Getting Started

### Prerequisites

- Node.js installed on your machine
- MongoDB installed or access to a MongoDB cloud service (e.g., Atlas)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Akashpatel9/Address-Management.git
   cd Address-Management
   ```

2. Install the necessary dependencies for both backend and frontend:
   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

3. Create a `.env` file in the `backend` directory with the necessary environment variables, such as:
   ```env
   PORT=3000
   DB_URL="your_mongo_db_connection_string_here"
   ```

4. Configure your backend code to use the environment variables from the `.env` file.

5. Run the backend server:
   ```bash
   cd backend
   node app.js
   ```

6. In another terminal, run the frontend:
   ```bash
   cd frontend
   npm start
   ```

7. Access the application in your browser at `http://localhost:3000` (or your configured port).

## API Endpoints

- **POST /register**: Register a new user.
- **GET /addresses**: Retrieve all addresses for a user.
- **POST /addresses**: Add a new address for a user.
- **PUT /addresses/:id**: Update an existing address.
- **DELETE /addresses/:id**: Delete an address.

## Contributing

Contributions are welcome! If you have suggestions for improvements or features, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

## Contact

- **GitHub**: [Akash Patel](https://github.com/Akashpatel9)
- **Email**: akashsp9893@gmail.com
