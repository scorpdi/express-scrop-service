FROM node

RUN mkdir -p /home/Service
WORKDIR /home/Service

COPY . /home/Service
RUN npm install --registry=https://registry.npm.taobao.org

EXPOSE 3000
CMD npm run start