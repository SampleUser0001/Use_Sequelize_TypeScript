FROM node:12.8-alpine
LABEL maintainer "ucan"

RUN yarn global add typescript@3.6
RUN yarn add promise-mysql@4.1 @types/mysql@2.15

WORKDIR /app

RUN yarn init -y && tsc --init
