# instruct Docker to build the application
# using node:alpine and the result of the build
# will be copied over to the new docker image
FROM node:alpine AS builder

WORKDIR '/app'

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

# new docker image based on nginx that will act
# as a server of those built files from the 
# previous docker run result
FROM nginx

# expose port 80, elastic beanstalk will look at this
# and use this to expose the port on aws
EXPOSE 80

COPY --from=builder /app/build /usr/share/nginx/html