FROM nginx:alpine

# Copie vos nouveaux fichiers
COPY . /usr/share/nginx/html/

EXPOSE 80