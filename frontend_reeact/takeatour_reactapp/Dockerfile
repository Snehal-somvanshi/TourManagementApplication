FROM node:current-alpine
WORKDIR /takeatour_reactapp

COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm","start"]
