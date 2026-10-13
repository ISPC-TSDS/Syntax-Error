# 🏢 Syntax Error — Sistema de Gestión de Espacios

## 📌 Descripción general

Este repositorio contiene el proyecto de una aplicación web para gestionar la reserva y administración de espacios compartidos, con foco en laboratorios docentes de la institución. La solución está pensada para facilitar la consulta de disponibilidad, la reserva de turnos y la administración de usuarios y reportes.

El frontend Angular consume una API de prueba (json-server) a través de servicios propios, con `HttpClient` y observables. Incluye landing page, paneles para docentes y administración, formularios reactivos y navegación por rutas.

---

## ✨ Funcionalidades principales

### 👤 Frontend
- Landing page institucional.
- Login y registro conectados a la API.
- Recuperación de contraseña.
- Dashboard para usuario/docente.
- Dashboard para administrador.
- Visualización de laboratorios disponibles.
- Reserva de laboratorio con fecha y horario.
- Consulta de reservas confirmadas.
- Historial de reservas.
- Gestión de laboratorios, reservas, usuarios y reportes en la vista administrativa.
- Páginas de error 404 y navegación con Angular Router.

### 📅 Flujo de usuario (docente)
- Iniciar sesión con las credenciales registradas en la API.
- Consultar laboratorios disponibles.
- Reservar un espacio con fecha y horario.
- Ver reservas confirmadas.
- Revisar el historial de reservas previas.

### 🛠️ Panel administrativo
- Administrar laboratorios (crear, editar, eliminar).
- Gestionar reservas realizadas y su estado.
- Gestionar docentes/usuarios del sistema.
- Visualizar reportes y métricas de uso.

---

## 🧩 Tecnologías utilizadas

### Frontend
- Angular 21
- TypeScript
- HTML5
- CSS3
- Bootstrap 5
- Angular Router
- Reactive Forms
- RxJS
- HttpClient

### Estructura general
- SPA con Angular
- Componentes standalone
- Servicios centralizados para el acceso a datos
- Rutas principales y rutas hijas
- Diseño responsive

### Backend de prueba
- `json-server` sirve `db.json` como API REST.
- Colecciones: `users`, `labs` y `reservation`.
- El frontend lo consume mediante servicios Angular (`AuthService`, `LabsService`, `ReservationService`, `UsersService`) usando `HttpClient` y observables.

### Modelado
- Documentación y diagramas del sistema en la carpeta de modelado.

---

## 🚀 Requisitos previos

Necesitás tener instalado:

- Node.js 18 o superior
- npm 9 o superior
- Git
- Un navegador web moderno

Verificá la versión con:

```bash
node -v
npm -v
```

---

## 📥 Instalación

Cloná el repositorio:

```bash
git clone https://github.com/ISPC-TSDS/Syntax-Error.git
```

Entrá al proyecto:

```bash
cd Syntax-Error
```

Luego instalá las dependencias del frontend:

```bash
cd frontend/sistema_gestion_espacios
npm install
```

---

## 🔌 Backend de prueba (json-server)

La aplicación necesita la API levantada para funcionar. Abrí **dos terminales** dentro de `frontend/sistema_gestion_espacios`:

```bash
# Terminal 1 — API en http://localhost:3000
npx json-server --watch db.json --port 3000

# Terminal 2 — Aplicación en http://localhost:4200
npm start
```

La URL de la API se configura en `src/environments/environment.ts`.

### Usuarios de prueba

| Rol | Correo | Contraseña |
| --- | --- | --- |
| Administrador | `carla.fernandez@escuela.edu.ar` | `Admin1234` |
| Docente | `maria.lopez@escuela.edu.ar` | `Docente1234` |
| Docente | `lucas.torres@escuela.edu.ar` | `Docente1234` |

> Las contraseñas están en texto plano porque `json-server` es solo un backend de prueba académico. Un backend real debe guardarlas hasheadas.

### Endpoints utilizados

| Recurso | Operaciones | Usado en |
| --- | --- | --- |
| `GET /users?email=&password=` | GET | Login |
| `/users` | GET, POST, PATCH, DELETE | Registro y gestión de usuarios (admin) |
| `/labs` | GET, POST, PUT, DELETE | Espacios disponibles, reservar, administrar laboratorios |
| `/reservation` | GET, POST, PATCH, DELETE | Reservar, reservas confirmadas, historial, gestión y reportes |

Para volver a los datos originales, descartá los cambios locales de `db.json` con Git.

---

## ▶️ Ejecución en desarrollo

Con la API levantada (ver sección anterior), en otra terminal:

```bash
npm start
```

O bien:

```bash
npx ng serve
```

La aplicación estará disponible en:

```text
http://localhost:4200/
```

---

## 🏗️ Generación de build

Para compilar el proyecto para producción:

```bash
npm run build
```

El resultado se genera en la carpeta:

```text
dist/
```

---

## 🧭 Rutas principales actuales

La aplicación Angular utiliza rutas como estas:

| Ruta | Descripción |
| --- | --- |
| `/` | Landing page |
| `/about` | Quiénes somos |
| `/login` | Inicio de sesión |
| `/register` | Registro |
| `/recover-password` | Recuperar contraseña |
| `/dashboard/admin` | Dashboard administrador |
| `/dashboard/admin/salas` | Administrar salas/laboratorios |
| `/dashboard/admin/reservas` | Gestionar reservas |
| `/dashboard/admin/usuarios` | Gestionar usuarios/docentes |
| `/dashboard/admin/reportes` | Ver reportes |
| `/dashboard/user` | Dashboard docente/usuario |
| `/dashboard/user/espacios` | Laboratorios disponibles |
| `/dashboard/user/reservar` | Reservar laboratorio |
| `/dashboard/user/reservas` | Reservas confirmadas |
| `/dashboard/user/historial` | Historial de reservas |

Las rutas inexistentes se manejan con una página 404 personalizada.

---

## 📁 Estructura del repositorio

```text
Syntax-Error/
├── README.md
├── frontend/
│   └── sistema_gestion_espacios/
│       ├── angular.json
│       ├── package.json
│       ├── tsconfig.json
│       ├── db.json                   # Datos de json-server (users, labs, reservation)
│       ├── public/
│       └── src/
│           ├── app/
│           │   ├── pages/
│           │   │   ├── landing/
│           │   │   ├── about/
│           │   │   ├── login/
│           │   │   ├── register/
│           │   │   ├── recover-password/
│           │   │   ├── dashboard-admin/
│           │   │   ├── dashboard-user/
│           │   │   └── not-found/
│           │   ├── services/         # Acceso a datos con HttpClient
│           │   ├── shared/
│           │   ├── app.routes.ts
│           │   ├── app.ts
│           │   └── app.css
│           ├── environments/
│           ├── index.html
│           ├── main.ts
│           └── styles.css
├── backend/
│   └── ...
├── modelado/
│   └── ...
└── maqueta/
    └── ...
```

---

## 👥 Equipo

| Apellido y Nombre | DNI | Usuario GitHub |
| --- | ---: | --- |
| Bianchi Nuñez, Víctor Andrés | 42258135 | [@andresbianchiispc](https://github.com/andresbianchiispc) |
| Mondadori, Giselda Soledad | 29255135 | [@G-Mon4](https://github.com/G-Mon4) |
| Monje, Sofía Florencia | 39420278 | [@somonje](https://github.com/somonje) |
| Osess, Gastón Faustino Alejandro | 35588172 | [@cholobackcod](https://github.com/cholobackcod) |
| Pierrestegui, Federico Martín | 35257982 | [@pierresteguifederico](https://github.com/pierresteguifederico) |
| Udovich, Federico David | 42383964 | [@FedeUdovich](https://github.com/FedeUdovich) |

### 🎓 Docentes a cargo
- Ivana Córsico
- Carolina Ahumada

---

## 📄 Licencia

Proyecto educativo desarrollado en el marco del ciclo lectivo 2026 del ISPC — Tecnicatura Superior en Desarrollo de Software.

Todos los derechos reservados al equipo Syntax Error.
