# base image
FROM node:12.16.1-alpine

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY . .
RUN yarn
RUN yarn add antd
RUN yarn add react-jinke-music-player

EXPOSE 3000
# start app
CMD ["yarn", "start"]
