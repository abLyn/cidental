# select the lightest image of node
FROM node:21-bullseye-slim as stage
# copy all necessay files
COPY . .
# install necessay modules
RUN npm install

FROM stage
# Create Entrypoint
#ENTRYPOINT 3000
# final commandline to launch the image
CMD ["npm", "run", "dev"]