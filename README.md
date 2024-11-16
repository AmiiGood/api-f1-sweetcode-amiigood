# 🏎️ Formula 1 API - Node.js

![Logo de Sweet-Data-Order](src/utils/logoSCFO.png)

Una API RESTful que proporciona datos históricos y actuales de la Fórmula 1, incluyendo información sobre pilotos, equipos, carreras y resultados.

## 📋 Características

- Datos completos de temporadas desde 1950 hasta la actualidad
- Información detallada de pilotos y equipos
- Resultados de carreras y clasificaciones
- Estadísticas históricas
- Sistema de caché para optimizar el rendimiento
- Documentación completa con Swagger
- Autenticación mediante JWT

## 🛠️ Tecnologías

- Node.js
- Express.js
- MongoDB
- JWT para autenticación
- Swagger UI para documentación
- Jest para testing

## 🚀 Endpoints Principales

- `/api/v1/drivers` - Información de pilotos
- `/api/v1/teams` - Datos de equipos
- `/api/v1/races` - Resultados de carreras
- `/api/v1/seasons` - Información por temporada
- `/api/v1/standings` - Clasificaciones de pilotos y constructores

## ⚙️ Instalación

```bash
# Clonar el repositorio
git clone https://github.com/username/f1-api

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env

# Iniciar el servidor
npm run start

# Iniciar el servidor de desarrollo
npm run dev
```

## 🔑 Variables de Entorno

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/f1-api
JWT_SECRET=your_jwt_secret
```

## 📖 Documentación

La documentación completa de la API está disponible en `/api-docs` utilizando Postman.

## 🧪 Tests

```bash
# Ejecutar tests
npm run test

# Ejecutar tests con coverage
npm run test:coverage
```

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor, lee [CONTRIBUTING.md](CONTRIBUTING.md) para detalles sobre nuestro código de conducta y el proceso para enviarnos pull requests.
