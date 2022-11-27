FROM node:18.12.1-alpine3.15

COPY package*.json ./

RUN npm i

COPY . .

RUN chmod 755 entrypoint.sh

ENTRYPOINT ./entrypoint.sh
