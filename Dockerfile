FROM node:21.7.3  AS base

# development stage
FROM base AS development 
ARG APP 
ARG NODE_ENV=development 
ENV NODE_ENV=${NODE_ENV}
WORKDIR /usr/src/app 
COPY package.json package-lock.json ./ 
COPY apps/${APP} ./apps/${APP} 
RUN npm install
COPY . .
RUN npm run build:${APP} 

# production stage
FROM base AS production 
ARG APP 
ARG NODE_ENV=production 
ENV NODE_ENV=${NODE_ENV} 
WORKDIR /usr/src/app 
COPY package.json package-lock.json ./ 
COPY --from=development /usr/src/app/dist ./dist 
COPY --from=development /usr/src/app/node_modules ./node_modules 

# Add an env to save ARG
ENV APP_MAIN_FILE=dist/apps/${APP}/main 
CMD node ${APP_MAIN_FILE}