# pull official base image
FROM node:13.12.0-alpine AS dev

RUN apk add nginx

WORKDIR /app

COPY ./nginx.conf /etc/nginx/nginx.conf

ENV PATH /app/node_modules/.bin:$PATH

CMD ["npm", "start"]

FROM node:13.12.0-alpine AS prod

RUN apk add nginx

COPY ./nginx.build.conf /etc/nginx/nginx.conf

WORKDIR /app
COPY ./package.json .
COPY ./package-lock.json .
COPY . .
RUN npm install && \ 
  npm run build && \
  rm -r /app/node_modules && \
  npm install --only=production

ENTRYPOINT [ "/bin/sh", "-c" ]
CMD ["nginx", "-g", "daemon off;"]