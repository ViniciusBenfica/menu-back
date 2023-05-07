FROM node:14-alpine as development

WORKDIR /app

COPY package*.json ./

RUN yarn

COPY . .

RUN npx prisma generate