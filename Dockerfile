# Use Node.js 20 as the base image
FROM node:20

# Set the working directory to the backend folder inside the container
WORKDIR /assignment/backend

# Copy only package.json and package-lock.json first (for efficient caching)
COPY backend/package*.json ./

# Install backend dependencies
RUN npm install

# Copy the entire backend code into the container
COPY backend/ ./

# Expose the port your backend will run on
EXPOSE 5000

# Start the backend server
CMD ["npm", "start"]