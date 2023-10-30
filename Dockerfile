# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the React application
RUN npm run build

# Set environment variables for configuration
ENV NODE_ENV=production
ENV PORT=3000

# Expose the port on which the application will run
EXPOSE $PORT

# Set a default command to start the application
CMD ["npm", "start"]
