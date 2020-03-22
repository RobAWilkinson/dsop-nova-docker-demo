# Specify the image that this app is going to be built from.  This is a docker hub hosted Node image
FROM node:12.13.1

# copy over system configuration files
COPY package.json tsconfig.json /app/

# define an environment variable
ENV PORT 3000

#Tell services it is exposed
EXPOSE ${PORT}

# defined oour current directorty
WORKDIR /app/

# install packages
RUN npm install

# copy over our code
COPY . /app

# build our code
RUN npm run build

# Runs on startup
CMD ["node", "dist/server.js"]