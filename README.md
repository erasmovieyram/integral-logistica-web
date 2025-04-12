# Integral Logística y Aduanal SRL de CV

## Descripción
Este proyecto consiste en el desarrollo de un sitio web moderno y funcional para Integral Logística y Aduanal SRL de CV, una empresa dedicada a brindar servicios logísticos y aduanales. El objetivo es reemplazar el sitio web desactualizado actual por una plataforma moderna, segura y escalable.

## Problema Identificado
El sitio web actual de la empresa está desactualizado, carece de funcionalidades clave como autenticación de usuarios, diseño responsivo y un formulario de contacto funcional. Además, no ofrece una experiencia de usuario fluida ni una presencia profesional en línea.

## Solución
Se desarrolló un sitio web utilizando tecnologías modernas como React.js (frontend), Spring Boot (backend) y MySQL (base de datos). El sitio incluye páginas informativas, un formulario de contacto, autenticación de usuarios y una sección exclusiva para clientes registrados.

## Arquitectura
La arquitectura del sistema sigue un enfoque modular:
- **Frontend**: React.js con Bootstrap para estilos.
- **Backend**: Spring Boot con endpoints RESTful y autenticación JWT.
- **Base de Datos**: MySQL para almacenar datos de usuarios y mensajes.
- **Alojamiento**: Railway para desplegar tanto el frontend como el backend.

## Tabla de Contenidos
- [Requerimientos](#requerimientos)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Uso](#uso)
- [Contribución](#contribución)
- [Roadmap](#roadmap)

### Requerimientos
Para ejecutar el proyecto, necesitarás lo siguiente:

a. Servidores de Aplicación, Web, Bases de Datos, etc.
- **Servidor de Aplicación**: Node.js (v16.x o superior) para el frontend y Java 17+ para el backend.
- **Servidor Web**: Nginx o Apache (opcional para producción).
- **Base de Datos**: MySQL 8.x.
- **Herramientas Adicionales**:
  - Git para control de versiones.
  - Maven para construir el backend.
  - Railway o Heroku para alojar la aplicación.

b. Paquetes Adicionales
- **Frontend**: Dependencias como `axios`, `react-router-dom` y `bootstrap`.
- **Backend**: Dependencias como `spring-boot-starter-web`, `spring-boot-starter-data-jpa` y `jjwt` para autenticación.

c. Versión de Java
- **Versión de Java**: Se requiere Java 17+ para ejecutar el backend Spring Boot.

### Instalación

#### Frontend
1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/integral-logistica-frontend.git
   cd integral-logistica-frontend
2. Instala las dependencias:
npm install

#### Backend
1. Clona el repositorio:
   git clone https://github.com/tu-usuario/integral-logistica-backend.git
cd integral-logistica-backend
3. Construye el proyecto:
  mvn clean package


#### **b. ¿Cómo ejecutar pruebas manualmente?**
```markdown
#### Pruebas Manuales
- **Frontend**: Ejecuta el servidor de desarrollo:
  ```bash
  npm start

Backend : Ejecuta las pruebas unitarias:
mvn test


#### **c. ¿Cómo implementar la solución en producción?**
```markdown
#### Implementación en Producción
1. **Frontend**: Compila el proyecto:
   ```bash
   npm run build

Sube la carpeta build/ a Railway.

Backend : Despliega el archivo .jar generado por Maven en Railway.

---

### **4. Configuración**

#### **a. Configuración del Producto (Archivos de Configuración)**
```markdown
### Configuración

#### Frontend
- Archivo `.env` para variables de entorno:
  ```plaintext
  REACT_APP_API_URL=https://tu-backend.up.railway.app/api

Backend
Archivo application.properties:
spring.datasource.url=jdbc:mysql://<host>:<port>/<database>
spring.datasource.username=<username>
spring.datasource.password=<password>
server.port=${PORT:8080}


#### **b. Configuración de los Requerimientos**
```markdown
- Configura Railway para conectar la base de datos MySQL.
- Asegúrate de que las variables de entorno estén correctamente definidas en Railway o Heroku.

### Manual de Usuario Final
1. Visita el sitio web en la URL proporcionada por Railway.
2. Navega por las secciones principales: "Inicio", "Quienes somos", "Servicios" y "Contacto".
3. Inicia sesión en la sección de clientes para acceder a información personalizada.

### Manual de Usuario Administrador
1. Accede al panel de administración (si aplica) usando credenciales seguras.
2. Gestiona usuarios, servicios y mensajes recibidos desde el formulario de contacto.

### Guía de Contribución
1. Clona el repositorio:
   ```bash
   git clone https://github.com/erasmovieyram/integral-logistica-frontend.git

2. Crea un nuevo branch:
git checkout -b feature/nombre-de-la-tarea

3. Realiza tus cambios y confirma los commits:
git add .
git commit -m "Descripción de los cambios"

4. Envía el branch al repositorio remoto:
git push origin feature/nombre-de-la-tarea

5. Crea un Pull Request (PR) en GitHub y espera a que sea revisado y fusionado.


---

### **Roadmap**

```markdown
### Roadmap
Próximas mejoras incluyen:
- Implementar un panel de administración para gestionar usuarios y servicios.
- Integrar un sistema de pagos en línea.
- Agregar un chatbot para atención al cliente en tiempo real.
- Mejorar la optimización del sitio mediante técnicas avanzadas de SEO.
