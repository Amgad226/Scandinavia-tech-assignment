# Use a Node.js base image
FROM node:21.7.3 

# Set the working directory
WORKDIR /app



# Copy the entire repository for build context
COPY ../../ ./

# Install the specific microservice dependencies
RUN npm install 

# Copy the root package.json and lock file
COPY ../../package.json ../../package-lock.json ./

# Install the root dependencies
RUN npm install
# Build the application
# RUN npm run build

# Set the command to start the service
CMD ["npm", "run", "p"]
