# ==== BUILD APP IN A NODE IMAGE LAYER ====
FROM node:16.5.0-alpine AS builder
WORKDIR /app
COPY . .
ENV PUBLIC_URL /trade-journal
RUN npm ci --production
RUN npm run build

# ==== SERVE APP IN AN NGINX IMAGE LAYER ====
FROM nginx:1.23.1-alpine AS production
ENV NODE_ENV production
# Copy built assets from 'builder' image into nginx's
# static file hosting location (set in .conf) in 'production' image
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Port 80 since it's the default port nginx serves on
# Later may map this internal port to a different host port
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]