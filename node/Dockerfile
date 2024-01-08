FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm Install

COPY . .

EXPOSE 4200

CMD ["node", "index.js"]