FROM node:lts-alpine as base
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
RUN apk --no-cache add dumb-init

FROM base as dependencies
COPY package*.json ./
COPY --chown=node:node ./package*.json ./
RUN yarn
COPY --chown=node:node . .
RUN rm -rf .git;

FROM dependencies as build
RUN yarn build

FROM base as release
COPY --from=dependencies /home/node/app/node_modules ./node_modules
COPY --from=build /home/node/app/dist ./dist
COPY --from=build /home/node/app/package.json ./package.json
COPY --from=build /home/node/app/yarn.lock ./yarn.lock
COPY --from=build /home/node/app/.env ./.env

USER node
EXPOSE 3000
CMD ["dumb-init", "yarn", "start"]


