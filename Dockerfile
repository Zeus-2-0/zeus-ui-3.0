#################
# Build the app #
#################
FROM node:alpine as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm install -g @angular/cli
RUN ng build --configuration production --output-path=/dist

################
# Run in NGINX #
################
FROM nginx:alpine
COPY --from=build /dist /usr/share/nginx/html

EXPOSE 80

# When the container starts, replace the env.js with values from environment variables
CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]

# to build the image run the below command
# docker build -t zeusprogetto/zeus-ui:latest .
# to run the image use the below command
# docker run -p 81:80 -e API_URL='This is from docker' zeusprogetto/zeus-ui


