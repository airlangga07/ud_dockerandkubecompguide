# specify a base image
FROM node:alpine

# set docker to use this folder
# as the default working directory
# so any following command will be executed
# relative to this path in the container
WORKDIR /usr/app

# install some dependencies
COPY ./package.json ./
RUN npm install

# copy the project source code
COPY ./ ./

# default command
CMD ["npm", "start"]