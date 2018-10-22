############################################################
# Dockerfile para configurar aplicación en node.js - Express
############################################################

# Establece la imagen base
FROM node:8

# Crear directorio de trabajo
# RUN mkdir -p /usr/app

# Se estable el directorio de trabajo
WORKDIR /usr/app

# Instala los paquetes existentes en el package.json
COPY package.json .
RUN npm install --quiet

# Instalación de Nodemon en forma Global
# Al realizarse cambios reiniciar el servidor
# RUN npm install nodemon -g --quiet

# Copia la Aplicación
COPY . .

# Expone la aplicación en el puerto 5500
EXPOSE 5500

# Inicia la aplicación al iniciar al contenedor
CMD ["npm", "start"]