# base image
FROM node:12.19.0-alpine

WORKDIR /app 
COPY package.json /app 
COPY yarn.lock /app
RUN yarn install 
COPY . /app 

# Expose the port the app runs in
EXPOSE 4000

# Serve the app
CMD ["yarn", "start"]
