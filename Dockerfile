# Use the node base image from https://registry.hub.docker.com/u/library/node/
FROM node

# We want all of the commands to run in this directory
WORKDIR "/data"

# Install bower
RUN npm install -g bower gulp

# Install all of our npm dependencies
ADD package.json /data/package.json
RUN npm install

# Install all of our bower dependencies
ADD bower.json /data/bower.json
RUN bower install --allow-root

# Build the project
ADD . /data
RUN gulp

# This is the port the app will listen to; expose with -p 3000:3000
EXPOSE 3000
# This is the port that BrowserSync will be exposed on
EXPOSE 3001

# This is the default command of the resulting image
CMD ["gulp", "serve"]

