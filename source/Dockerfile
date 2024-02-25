FROM node:20.11.1-slim
WORKDIR /passmx

COPY package.json .
COPY package-lock.json .
COPY passmx passmx
COPY .env .

COPY binaries binaries
RUN chmod -R +x binaries

RUN npm install

CMD ["npm", "start"]