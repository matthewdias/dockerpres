FROM rezzza/docker-node:latest

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
ENV NODE_ENV development

COPY package.json /app/package.json

RUN npm install
RUN npm install react-scripts@1.1.1 -g

COPY . /app

CMD ["npm", "start"]
