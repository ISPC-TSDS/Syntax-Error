# Sistema de Gestión de Espacios

Este proyecto es una aplicación web desarrollada con Angular para gestionar reservas y administración de espacios compartidos. La interfaz utiliza Bootstrap y cuenta con módulos para usuarios y administradores.

## Información general

- Framework principal: Angular 21
- Lenguaje: TypeScript
- Estilos: Bootstrap 5
- Estructura principal: componentes, páginas y rutas de navegación
- Objetivo: facilitar la reserva, consulta y administración de espacios, salas y usuarios

## Requisitos previos

Antes de ejecutar el proyecto, asegurate de tener instalado:

- Node.js 18 o superior
- npm 9 o superior
- Git

Puedes verificarlo con:

```bash
node -v
npm -v
```

## Instalación

Desde la carpeta del proyecto Angular, ejecuta:

```bash
npm install
```

Esto descargará todas las dependencias necesarias para correr la aplicación.

## Ejecución en desarrollo

Para levantar el servidor local de Angular:

```bash
npm start
```

O bien:

```bash
npx ng serve
```

Luego abre tu navegador en:

```text
http://localhost:4200/
```

## Estructura principal del proyecto

```text
src/
├── app/
│   ├── pages/
│   │   ├── landing/
│   │   ├── login/
│   │   ├── register/
│   │   ├── dashboard-admin/
│   │   ├── dashboard-user/
│   │   └── ...
│   ├── app.routes.ts
│   ├── app.ts
│   └── app.css
├── index.html
├── main.ts
├── styles.css
└── ...
```

## Rutas principales

La app incluye navegación para:

- Inicio
- Login
- Registro
- Recuperación de contraseña
- Dashboard de administrador
- Dashboard de usuario

## Tecnologías utilizadas

- Angular
- TypeScript
- RxJS
- Bootstrap
- Angular Router

