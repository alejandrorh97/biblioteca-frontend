# Usa una imagen base de Nginx
FROM nginx:alpine

# Copia los archivos de build a la carpeta html de Nginx
COPY ./dist/biblioteca-frontend /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Comando para ejecutar Nginx
CMD ["nginx", "-g", "daemon off;"]
