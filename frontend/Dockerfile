FROM node:lts-alpine 
WORKDIR /usr/src/app
COPY frontend/package*.json ./
RUN ls -l
RUN npm install
COPY frontend ./
RUN ls -l
RUN npm run build
EXPOSE 3000
CMD ["npm","start"]