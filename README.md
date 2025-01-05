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
│   │   ├── styles.css  # Estilos principales
│   │   └── components/ # Estilos de componentes específicos
│   │
│   ├── js/             # Archivos JavaScript
│   │   ├── main.js     # Archivo principal
│   │   └── modules/    # Módulos JavaScript
│   │
│   ├── components/     # Componentes reutilizables (HTML o JSX)
│   │   ├── header.html
│   │   ├── footer.html
│   │   └── navbar.html
│   │
│   ├── pages/          # Archivos HTML específicos de cada página
│   │   ├── index.html  # Página principal
│   │   ├── about.html  # Página "Acerca de"
│   │   └── contact.html # Página de contacto
│   │
│   └── utils/          # Utilidades o funciones reutilizables
│
├── public/             # Archivos públicos (sirven como están)
│   ├── robots.txt      # Indicaciones para motores de búsqueda
│   ├── favicon.ico     # Icono del sitio web
│   └── manifest.json   # Manifesto de la web (PWA)
│
├── dist/               # Archivos listos para producción (generados)
│   ├── index.html      # Archivo HTML optimizado
│   ├── styles.css      # Estilos optimizados
│   └── main.js         # JavaScript optimizado
│
├── tests/              # Pruebas automatizadas
│   ├── unit/           # Pruebas unitarias
│   └── integration/    # Pruebas de integración
│
├── .gitignore          # Archivos y carpetas que Git debe ignorar
├── package.json        # Dependencias y scripts del proyecto
├── README.md           # Documentación del proyecto
├── LICENSE             # Licencia del proyecto
└── webpack.config.js   # Configuración de Webpack (si aplica)
```

## Descripción de cada carpeta:
src/ (Source): Contiene todo el código fuente del proyecto, incluyendo HTML, CSS, JavaScript, y recursos estáticos.
assets/: Guarda imágenes, fuentes, y otros archivos estáticos.
components/: Componentes reutilizables, como encabezados, pies de página o menús de navegación.
pages/: Archivos HTML que representan las diferentes páginas del sitio.
public/: Archivos que no necesitan procesamiento o compilación, como el favicon o robots.txt.
dist/: Carpeta generada automáticamente después de compilar y optimizar el código para producción.
tests/: Archivos de pruebas automatizadas para garantizar la calidad del código.