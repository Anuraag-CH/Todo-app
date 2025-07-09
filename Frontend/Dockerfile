# Step 1: Build React app
FROM node:18-alpine AS build
WORKDIR /app
COPY package.json  ./
RUN npm install
COPY . .   
RUN npm run build  

# Step 2: Serve the app
FROM node:18-alpine
WORKDIR /app
RUN npm install -g serve

# Copy the 'build' directory from the previous build stage
COPY --from=build /app/dist ./dist

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
