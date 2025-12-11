
FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN chmod +x node_modules/.bin/jest && npm test

EXPOSE 3000
CMD ["npm", "start"]
