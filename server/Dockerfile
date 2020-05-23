FROM node:13.12.0-alpine AS dev

WORKDIR /server

ENV PATH /server/node_modules/.bin:$PATH

CMD ["npm", "start"]

FROM node:13.12.0-alpine AS prod

WORKDIR /server

COPY ./package.json .
COPY ./package-lock.json .
RUN npm install

COPY . .

CMD ["npm", "start"]
