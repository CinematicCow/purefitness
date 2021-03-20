FROM node:12.18-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent
RUN ls -l -a
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
