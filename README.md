[![Develop CI/CD Pipeline](https://github.com/igrowker/i004-reffindr-front/actions/workflows/ci-dev.yaml/badge.svg)](https://github.com/igrowker/i004-reffindr-front/actions/workflows/ci-dev.yaml)

# Vite React Project Reffinder

## Tecnologías y Librerías Utilizadas

- **React**: Biblioteca principal para construir interfaces de usuario.
- **Vite**: Herramienta de desarrollo para optimizar y compilar la aplicación rápidamente.
- **TypeScript**: Añade tipado estático a JavaScript para una mejor escalabilidad y mantenibilidad.
- **TailwindCSS**: Framework de utilidades CSS para un diseño responsivo y rápido.
- **Zustand**: Pequeña biblioteca para la gestión del estado global.
- **i18next**: Herramienta para la internacionalización, con soporte para detección de idioma y carga de traducciones desde el backend.
- **SweetAlert2**: Biblioteca de alertas para crear mensajes interactivos y personalizados.
- **Axios**: Cliente HTTP para realizar peticiones a una API externa.
- **React Router**: Enrutador para la navegación entre las distintas rutas de la aplicación.
- **ESLint & Prettier**: Configuración de linters y formateadores para mantener un código limpio y consistente.
- **Docker**: Plataforma para desarrollar, enviar y ejecutar aplicaciones en contenedores.

## Instalación y Uso

### Desarrollo Local

1. Clona el repositorio y navega al directorio del proyecto.
2. Ejecuta `npm install` para instalar todas las dependencias.
3. Usa `npm run dev` para iniciar la aplicación en modo desarrollo.
4. Usa `npm run build` para construir la aplicación para producción.

### Usando Docker

1. Asegúrate de tener Docker instalado en tu sistema.
2. Ejecuta `docker compose up --build` para construir y iniciar la aplicación.
3. Tu aplicación estará disponible en http://localhost:5173.

## Scripts Disponibles

- `dev`: Ejecuta la aplicación en modo desarrollo mediante Vite.
- `build`: Realiza la compilación de TypeScript y construye la aplicación para producción.
- `lint`: Ejecuta ESLint para asegurar que el código sigue las normas de estilo establecidas.
- `preview`: Visualiza una versión de la aplicación construida (previa a producción).

## Estructura del Proyecto

- **src/**: Contiene los archivos fuente de la aplicación.
- **public/**: Recursos públicos que no necesitan ser procesados por Vite.
- **tailwind.config.js**: Configuración de TailwindCSS.
- **tsconfig.json**: Configuración de TypeScript.
- **.eslintrc**: Configuración de ESLint.

## Dependencias Principales

- **@types/node**: Tipos para Node.js.
- **@types/react** y **@types/react-dom**: Tipos para React.
- **@typescript-eslint/eslint-plugin** y **@typescript-eslint/parser**: Integración de ESLint con TypeScript.
- **prettier-plugin-tailwindcss**: Formatea el código de acuerdo con la configuración de TailwindCSS.

## Despliegue en la Nube

Para desplegar tu aplicación en la nube usando Docker:

1. Construye tu imagen:

`docker build -t myapp .`

Si tu proveedor de nube usa una arquitectura de CPU diferente (por ejemplo, estás en una Mac M1 y tu proveedor de nube es amd64), construye la imagen para esa plataforma:

`docker build --platform=linux/amd64 -t myapp .`

2. Sube la imagen a tu registro:

`docker push myregistry.com/myapp`

Consulta la [documentación de introducción](https://docs.docker.com/go/get-started-sharing/) de Docker para más detalles sobre la construcción y subida de imágenes.

## Referencias

- [Guía de Node.js de Docker](https://docs.docker.com/language/nodejs/)

## Licencia

Este proyecto se distribuye bajo la licencia MIT.
