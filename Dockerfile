# Use a Node.js base image
FROM node:20

# Set the working directory to /internship-api
WORKDIR /internship-api

# Copy the package.json and package-lock.json from the backend folder
COPY backend/package*.json ./backend/

# Install dependencies for the backend
RUN npm install --prefix backend

# Copy the rest of the backend code into the container
COPY backend/ ./backend/

# Expose the port your backend will run on (5000 in this case)
EXPOSE 5000

# Set the working directory for running the backend
WORKDIR /internship-api/backend

# Start the backend server using npm
CMD ["npm", "start"]
