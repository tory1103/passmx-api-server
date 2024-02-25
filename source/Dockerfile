FROM node:20.11.1-slim
WORKDIR /passmx

COPY package.json .
COPY package-lock.json .
COPY passmx passmx
COPY binaries binaries
COPY .env .

RUN npm install

CMD ["npm", "start"]