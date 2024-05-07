FROM node:22.1.0-slim

WORKDIR /app

COPY . .

RUN npm i

EXPOSE 3000

CMD [ "npm","start" ]

