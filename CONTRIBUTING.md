# Guía de Contribución

¡Gracias por tu interés en contribuir a la F1 API! Este documento proporciona los lineamientos para contribuir al proyecto.

## Código de Conducta

Este proyecto y todos sus participantes están bajo el [Código de Conducta del Contribuidor](https://www.contributor-covenant.org/es/version/2/0/code_of_conduct/). Al participar, se espera que mantengas este código.

## Proceso de Contribución

1. Fork del repositorio
2. Clona tu fork: `git clone https://github.com/tu-usuario/f1-api.git`
3. Crea una rama para tu feature: `git checkout -b feature/nueva-caracteristica`
4. Realiza tus cambios y commitea: `git commit -am 'Agrega nueva característica'`
5. Push a la rama: `git push origin feature/nueva-caracteristica`
6. Crea un Pull Request

## Guía de Estilo

### JavaScript

- Utiliza ES6+ features
- Sigue el estilo de código de ESLint configurado en el proyecto
- Usa nombres descriptivos para variables y funciones
- Mantén las funciones pequeñas y con una única responsabilidad

### Commits

- Usa mensajes claros y descriptivos
- Sigue el formato: `tipo(alcance): descripción`
- Tipos comunes: feat, fix, docs, style, refactor, test, chore

### Pull Requests

- Proporciona una descripción clara del cambio
- Incluye el número de issue relacionado si existe
- Asegúrate de que todos los tests pasen
- Incluye tests para nuevas características

## Reporte de Bugs

- Usa el sistema de issues de GitHub
- Incluye pasos detallados para reproducir el bug
- Menciona tu entorno (SO, versión de Node, etc.)
- Si es posible, incluye logs o screenshots

## Sugerencias de Mejora

- Revisa que tu sugerencia no exista previamente
- Proporciona una descripción clara y detallada
- Explica el caso de uso y los beneficios
- Si es posible, incluye ejemplos de implementación

## Desarrollo Local

1. Instala las dependencias: `npm install`
2. Copia el archivo de configuración: `cp .env.example .env`
3. Configura las variables de entorno
4. Ejecuta los tests: `npm test`
5. Inicia el servidor: `npm run dev`

## Preguntas

Si tienes alguna pregunta, no dudes en:

- Abrir un issue
- Contactarme
- Revisar la documentación existente

¡Gracias por contribuir! 🏎️
