# Etapa base
FROM node:20.15.0-alpine as base
WORKDIR /usr/src/app

# Etapa de dependencias
FROM base as deps

# Instalar todas las dependencias (producción y desarrollo) para construir el proyecto
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci

# Etapa de construcción
FROM deps as build

# Copiar los archivos del proyecto
COPY . .

# Ejecutar el script de construcción
RUN npm run build

# Etapa final (para producción)
FROM base as final

# Configurar el entorno de producción
ENV NODE_ENV production

# Copiar `package.json` para que el contenedor pueda usar los comandos del gestor de paquetes
COPY package.json .

# Copiar las dependencias de producción desde la etapa de dependencias
COPY --from=deps /usr/src/app/node_modules ./node_modules

# Copiar los archivos generados en la etapa de construcción
COPY --from=build /usr/src/app/dist ./dist

# Instalar globalmente `http-server` para servir los archivos estáticos
RUN npm install -g http-server

# Ejecutar la aplicación como un usuario no root
USER node

# Exponer el puerto en el que escucha la aplicación
EXPOSE 5173

# Comando por defecto para ejecutar la aplicación con `http-server`
CMD ["http-server", "dist", "-p", "5173"]