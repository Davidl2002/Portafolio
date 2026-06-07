# 🎨 Portafolio Interactivo - Esteban David Lopez Nuñez

Portafolio web moderno, interactivo y altamente animado. Construido con **Next.js**, **React**, **Tailwind CSS** y **Framer Motion**.

## ✨ Características

- ✅ **Diseño Oscuro Minimalista** con estética glassmorphism
- ✅ **Animaciones Fluidas** usando Framer Motion
- ✅ **Fondo Dinámico** con partículas interactivas
- ✅ **Responsive Design** optimizado para todos los dispositivos
- ✅ **Secciones Completas**: Hero, Sobre mí, Habilidades, Proyectos, Contacto
- ✅ **UI/UX Profesional** con transiciones suaves
- ✅ **Performance Optimizado** con Next.js

## 🚀 Quick Start

### Requisitos Previos
- Node.js 16+ 
- npm o yarn

### Instalación

```bash
# Clonar o descargar el proyecto
cd portafolio

# Instalar dependencias
npm install
# o
yarn install

# Ejecutar servidor de desarrollo
npm run dev
# o
yarn dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del Proyecto

```
portafolio/
├── src/
│   ├── app/
│   │   ├── layout.jsx        # Layout principal
│   │   ├── page.jsx          # Página de inicio
│   │   └── globals.css       # Estilos globales
│   ├── components/
│   │   ├── Navigation.jsx    # Barra de navegación
│   │   ├── Footer.jsx        # Pie de página
│   │   └── sections/
│   │       ├── HeroSection.jsx       # Sección hero con partículas
│   │       ├── AboutSection.jsx      # Sobre mí
│   │       ├── SkillsSection.jsx     # Habilidades y tecnologías
│   │       ├── ProjectsSection.jsx   # Proyectos destacados
│   │       └── ContactSection.jsx    # Formulario de contacto
│   └── utils/                # Utilidades
├── public/                   # Activos estáticos
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── jsconfig.json            # Alias de rutas
```

## 🎨 Stack Tecnológico

| Categoría | Tecnología |
|-----------|-----------|
| **Framework** | Next.js 14+ |
| **UI Library** | React 18+ |
| **Estilos** | Tailwind CSS 3 |
| **Animaciones** | Framer Motion 10 |
| **Lenguaje** | JavaScript / JSX |

## ⚙️ Configuración

### Tailwind CSS
Los colores principales están definidos en `tailwind.config.js`:
- **Primary**: Azul (#0ea5e9)
- **Accent**: Púrpura (#8b5cf6)
- **Dark**: Tema oscuro personalizado

### Framer Motion
Todas las animaciones están preparadas con:
- Variantes predefinidas
- Scroll triggers
- Hover effects
- Transiciones suaves

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor local

# Producción
npm run build        # Compila el proyecto
npm run start        # Ejecuta versión compilada

# Linting
npm run lint         # Ejecuta ESLint
```

## 📝 Personalización

### Cambiar Información Personal
Edita los datos en cada componente:
- `HeroSection.jsx` - Información principal
- `AboutSection.jsx` - Sobre ti
- `SkillsSection.jsx` - Tecnologías
- `ProjectsSection.jsx` - Proyectos
- `ContactSection.jsx` - Contacto

### Agregar Proyectos
Modifica el array `projectsData` en `src/components/sections/ProjectsSection.jsx`

### Personalizar Colores
Modifica `tailwind.config.js` en la sección `theme.extend.colors`

## 🌐 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
Conecta tu repositorio y configura:
- Build command: `npm run build`
- Publish directory: `.next`

### Otras plataformas
Sigue la documentación de Next.js para deployment: https://nextjs.org/docs/deployment

## 📧 Contacto

- **Email**: [Tu email aquí]
- **GitHub**: [Tu perfil aquí]
- **LinkedIn**: [Tu perfil aquí]

## 📄 Licencia

MIT License - Libre para usar y modificar

## 🙏 Créditos

Diseño y desarrollo: Esteban David Lopez Nuñez
Inspiración en tendencias modernas de web design

---

**Construido con ❤️ usando Next.js y Framer Motion**
