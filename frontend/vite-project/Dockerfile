# Use the official Node.js image
FROM node:18

# Create and set the working directory
WORKDIR /usr/src/app

# Install pnpm
RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy application files
COPY . .

# Build the application
RUN pnpm run build

EXPOSE 5173

# Start the application
CMD ["pnpm", "run", "dev"]
