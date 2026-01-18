# Use nginx alpine as base image for lightweight container
FROM nginx:alpine

# Copy all static files to nginx html directory
COPY . /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Nginx will start automatically as the default command
