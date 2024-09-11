# Use the official Node.js image
FROM node:18

# Create and set the working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install

# Copy application files
COPY . .

# Expose the port the backend runs on
EXPOSE 3000

# Start the server
CMD ["pnpm", "start"]
