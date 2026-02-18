# Express JS Server

This is a simple Express.js server project that listens on port 8001. It is set up to use nodemon for automatic restarts on code changes.

## Project Structure

```
express-js-server
├── src
│   ├── index.js          # Entry point of the application
│   ├── routes            # Directory for route definitions
│   │   └── index.js      # Currently empty, to be filled with routes
│   └── controllers       # Directory for controllers
│       └── index.js      # Currently empty, to be filled with controller logic
├── package.json          # NPM configuration file
├── nodemon.json          # Configuration for nodemon
├── Dockerfile            # Dockerfile to build the application image
├── .dockerignore         # Files to ignore when building the Docker image
├── .gitignore            # Files to ignore in Git
└── README.md             # Project documentation
```

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- Docker installed on your machine (if you plan to run the server in a Docker container).

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/Wilcolab/Anythink-Market-dgf81w3t.git
   cd express-js-server
   ```

2. Install the dependencies:

```
npm install
```

### Running the Server

To start the server with automatic restarts on code changes, use:

```
npm run dev
```

This command uses nodemon to watch for changes in the source files.

### Docker

To build and run the application in a Docker container, use the following commands:

1. Build the Docker image:

   ```
   docker build -t express-js-server .
   ```

2. Run the Docker container:

   ```
   docker run -p 8001:8001 express-js-server
   ```

The server will be accessible at `http://localhost:8001`.

### Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.
