# Use an appropriate base image
FROM node:18.12

# Set the working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install pnpm
RUN corepack enable

# Install dependencies
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 5173

# Start the application
CMD ["pnpm", "run", "dev"]