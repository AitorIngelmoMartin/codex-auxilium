# codex-auxilium
Repository used to host a web page that serves as daily support for programmers.

Estructura del repositorio

```plaintext
project-root/
│
├── src/                # Código fuente
│   ├── assets/         # Recursos estáticos (imágenes, fuentes, íconos, etc.)
│   │   ├── images/     # Imágenes
│   │   ├── fonts/      # Fuentes
│   │   └── icons/      # Íconos
│   │
│   ├── css/            # Archivos CSS
│   │   ├── header.css  
│   │   ├── footer.css  
│   │   ├── footer.css
│   │
│   ├── js/             # Archivos JavaScript
│   │   ├── header.js
│   │   ├── footer.js
│   │   ├── navbar.js
│   │
│   ├── components/     # Componentes reutilizables HTML
│   │   ├── header.html
│   │   ├── footer.html
│   │   └── navbar.html
│   │
│   └── utils/          # Utilidades o funciones reutilizables
│
├── index.html  # Página principal
├── cron.html   # Página principal expresiones cron
│
├── .gitignore          # Archivos y carpetas que Git debe ignorar
├── README.md           # Documentación del proyecto
├── LICENSE             # Licencia del proyecto
```

## Descripción de cada carpeta:
src/ (Source): Contiene todo el código fuente del proyecto, incluyendo HTML, CSS, JavaScript, y recursos estáticos.
assets/: Guarda imágenes, fuentes, y otros archivos estáticos.
components/: Componentes reutilizables, como encabezados, pies de página o menús de navegación.
pages/: Archivos HTML que representan las diferentes páginas del sitio.
public/: Archivos que no necesitan procesamiento o compilación, como el favicon o robots.txt.
dist/: Carpeta generada automáticamente después de compilar y optimizar el código para producción.
tests/: Archivos de pruebas automatizadas para garantizar la calidad del código.