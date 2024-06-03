# Use the official Node.js image as the base image
FROM node:18 as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project directory into the container
COPY . .

# Build the project for production
RUN npm run build

# Stage 2: Serve the built files with `serve`
FROM node:18-alpine

# Install `serve` globally
RUN npm install -g serve

# Set the working directory
WORKDIR /app

# Copy the built files from the previous stage
COPY --from=build /app/dist .

# Expose port 5000
EXPOSE 4173

# Command to serve the built files
CMD ["serve", "-s", ".", "-l", "4173"]