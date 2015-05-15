#!/bin/sh -e

# First, build the Docker image.  This will take some time the first
# time, but it will be faster the second time and onwards.  The image
# will be called "methuselah"
docker build -t methuselah .

# Now, run the built image, exposing ports 3000 and 3001
docker run --rm -ti -p 3000:3000 -p 3001:3001 methuselah
