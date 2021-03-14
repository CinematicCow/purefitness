FROM node:lts-alpine 
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN ls -l
RUN npm install
COPY . ./
RUN ls -l
RUN npm run build
EXPOSE 5000
CMD ["npm","run","serve"]