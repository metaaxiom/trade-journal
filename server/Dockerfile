FROM node:16.5.0-alpine
WORKDIR /app
COPY . .
ENV NODE_ENV production
RUN npm ci
EXPOSE 5000
CMD ["npm", "start"]