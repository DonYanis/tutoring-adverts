FROM node:17-alpine

COPY package.json .

RUN npm i --silent
RUN npm i -g react-scripts@1.0.0

COPY . .

CMD ["npm" , "run" ]