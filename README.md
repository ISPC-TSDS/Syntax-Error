# 🏢 GestEspacios — Sistema de Gestión de Espacios

## 📌 Introducción

En muchas organizaciones, la gestión de salas de reuniones y espacios de coworking se realiza mediante canales informales como mensajes, planillas manuales o acuerdos verbales. Esto puede generar superposición de turnos, pérdida de tiempo y dificultades para llevar un control organizado de las reservas.

**GestEspacios** es una aplicación web desarrollada para centralizar y digitalizar la gestión de espacios compartidos dentro de una organización.

El sistema permite a los usuarios consultar los espacios disponibles, realizar reservas y consultar sus reservas e historial. A su vez, contempla diferentes roles de usuario y un panel de administración para gestionar las funcionalidades correspondientes.

El proyecto forma parte de una propuesta educativa desarrollada por estudiantes de la **Tecnicatura Superior en Desarrollo de Software del ISPC**.

---

## ✨ Funcionalidades

### 👤 Módulo de Usuarios

* Registro de nuevos usuarios.
* Inicio de sesión.
* Recuperación de contraseña.
* Formularios con validaciones.
* Navegación diferenciada según el rol del usuario.
* Panel de usuario.

### 📅 Gestión de Reservas

El dashboard del usuario permite:

* Consultar espacios disponibles.
* Seleccionar un espacio para realizar una reserva.
* Indicar fecha y horario de inicio.
* Indicar fecha y horario de finalización.
* Consultar reservas confirmadas.
* Consultar el historial de reservas.

### 🛠️ Panel de Administración

El proyecto contempla un dashboard específico para usuarios con rol administrador, destinado a las funcionalidades de gestión del sistema.

### 🌐 Navegación y experiencia de usuario

* Landing Page.
* Sección **Quiénes Somos**.
* Dashboard de usuario.
* Dashboard de administrador.
* Página personalizada para rutas no encontradas (404).
* Navegación mediante Angular Router.
* Rutas hijas para las diferentes funcionalidades del dashboard.
* Redirección automática a la sección correspondiente del dashboard.
* Componentes compartidos de navegación y footer.
* Diseño responsive para dispositivos móviles, tablets y escritorio.

---

## 🛠️ Tecnologías utilizadas

### Frontend

* **Angular 21**
* **TypeScript**
* **HTML5**
* **CSS3**
* **Bootstrap 5**
* **Angular Router**
* **Angular Reactive Forms**
* **RxJS**

### Arquitectura

La aplicación frontend está desarrollada como una **SPA (Single Page Application)** utilizando Angular.

Se implementaron:

* Componentes standalone.
* Rutas generales.
* Rutas hijas (nested routes).
* Ruta por defecto mediante redirección.
* Gestión de rutas no encontradas mediante página 404.
* Componentes reutilizables mediante una carpeta `shared`.
* Formularios reactivos con validaciones.

### Backend

El proyecto contempla un backend desarrollado con **Django**, actualmente en desarrollo.

### Modelado

* UML.
* Documentación de arquitectura del sistema.

---

## 🚀 Instalación y ejecución

### Requisitos previos

Para ejecutar el frontend se requiere:

* **Node.js**
* **npm**
* Angular CLI (puede utilizarse mediante `npx`)
* Un navegador web moderno.

### 📥 Clonar el repositorio

```bash
git clone https://github.com/ISPC-TSDS/Syntax-Error.git
```

Ingresar al proyecto:

```bash
cd Syntax-Error
```

### ▶️ Ejecutar el frontend

Ingresar a la carpeta del proyecto Angular:

```bash
cd frontend/sistema_gestion_espacios
```

Instalar las dependencias:

```bash
npm install
```

Iniciar el servidor de desarrollo:

```bash
npm start
```

La aplicación estará disponible normalmente en:

```text
http://localhost:4200
```

### 🏗️ Generar una compilación

Para comprobar que el proyecto puede compilarse correctamente:

```bash
ng build
```

El resultado de la compilación se genera dentro de la carpeta `dist/`.

---

## 🧭 Ruteo de la aplicación

La aplicación utiliza **Angular Router** para administrar la navegación.

Entre las rutas principales se encuentran:

| Ruta                        | Descripción                |
| --------------------------- | -------------------------- |
| `/`                         | Landing Page               |
| `/about`                    | Quiénes Somos              |
| `/login`                    | Inicio de sesión           |
| `/register`                 | Registro                   |
| `/recover-password`         | Recuperación de contraseña |
| `/dashboard/admin`          | Dashboard de administrador |
| `/dashboard/user`           | Dashboard de usuario       |
| `/dashboard/user/espacios`  | Espacios disponibles       |
| `/dashboard/user/reservar`  | Reservar espacio           |
| `/dashboard/user/reservas`  | Reservas confirmadas       |
| `/dashboard/user/historial` | Historial de reservas      |

La ruta `/dashboard/user` redirige automáticamente a `/dashboard/user/espacios`.

Las rutas inexistentes son gestionadas mediante una página personalizada de **Error 404**.

---

## 📝 Formularios

El frontend utiliza **Reactive Forms de Angular** para implementar formularios con validaciones.

Se incluyen validaciones para campos obligatorios, formato de correo electrónico, longitud mínima de contraseña y otros controles correspondientes a los formularios de la aplicación.

---

## 📁 Estructura del repositorio

```text
Syntax-Error/
├── frontend/
│   └── sistema_gestion_espacios/
│       ├── src/
│       │   └── app/
│       │       ├── pages/
│       │       │   ├── landing/
│       │       │   ├── about/
│       │       │   ├── login/
│       │       │   ├── register/
│       │       │   ├── recover-password/
│       │       │   ├── dashboard-admin/
│       │       │   ├── dashboard-user/
│       │       │   └── not-found/
│       │       │
│       │       ├── shared/
│       │       │   ├── nav/
│       │       │   └── footer/
│       │       │
│       │       ├── app.routes.ts
│       │       └── ...
│       │
│       ├── angular.json
│       ├── package.json
│       └── tsconfig.json
│
├── backend/
│   └── ...               # API REST con Django
│
├── modelado/
│   └── ...               # Diagramas UML y documentación
│
└── README.md
```

---

## 👥 Equipo

| Apellido y Nombre                |      DNI | Usuario GitHub                                                   |
| -------------------------------- | -------: | ---------------------------------------------------------------- |
| Bianchi Nuñez, Víctor Andrés     | 42258135 | [@andresbianchiispc](https://github.com/andresbianchiispc)       |
| Mondadori, Giselda Soledad       | 29255135 | [@G-Mon4](https://github.com/G-Mon4)                             |
| Monje, Sofía Florencia           | 39420278 | [@somonje](https://github.com/somonje)                           |
| Osess, Gastón Faustino Alejandro | 35588172 | [@cholobackcod](https://github.com/cholobackcod)                 |
| Pierrestegui, Federico Martín    | 35257982 | [@pierresteguifederico](https://github.com/pierresteguifederico) |
| Udovich, Federico David          | 42383964 | [@FedeUdovich](https://github.com/FedeUdovich)                   |

### 🎓 Docentes a cargo

* Ivana Córsico
* Carolina Ahumada

---

## 📄 Licencia

Proyecto educativo desarrollado en el marco del ciclo lectivo 2026 del **ISPC — Tecnicatura Superior en Desarrollo de Software**.

Todos los derechos reservados al equipo **Syntax Error**.
