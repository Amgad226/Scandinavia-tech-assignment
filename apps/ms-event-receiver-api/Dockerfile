FROM node:21.7.3 

# Set the working directory
WORKDIR /app

# Copy the root package.json and package-lock.json for npm workspaces
COPY ../../package.json ../../package-lock.json ./

# Install the root dependencies
RUN npm install

# Copy the specific service's package.json
COPY ./package.json ./apps/ms-event-publisher/package.json

# Install service-specific dependencies
RUN npm install
# Copy the whole monorepo into the container
COPY ../../ ./

# Build the application
RUN npm run build
# Set the command to start the service
CMD ["node","main.js"]
