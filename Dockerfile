# Stage Base
FROM node:12.16.3-alpine AS base
RUN apk add --update --no-cache python make g++
RUN npm install yarn --global --silent
RUN yarn global add node-gyp --silent
WORKDIR /app

# Stage Dependencies
FROM base AS dependencies
COPY package.json yarn.lock ./
RUN yarn install --prod

# Stage Build
FROM base AS build
COPY . .
RUN yarn install
RUN yarn build

# Stage Server
FROM node:12.16.3-alpine as server
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/server ./server
EXPOSE 9900
CMD ["node", "server"]
