FROM node:16.5.0

LABEL version="1.0-alpha"
LABEL description="Alpha version of the Trade Journal app React frontend."
LABEL maintainer=["julianderwisz@gmail.com"]

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install --production

COPY . .

EXPOSE 3000

CMD ["npm", "start"]