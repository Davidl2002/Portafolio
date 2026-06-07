# 🎨 Portafolio Interactivo - Esteban David Lopez Nuñez

Portafolio web moderno, interactivo y altamente animado. Construido con **Next.js**, **React**, **Tailwind CSS**, **Framer Motion** y **Three.js**.

## ✨ Características

- ✅ **Diseño Oscuro Minimalista** con estética glassmorphism y detalles vibrantes.
- ✅ **Animaciones Fluidas** usando Framer Motion (Scroll triggers, micro-interacciones, stagger effects).
- ✅ **Fondo Dinámico 3D** con escena espacial interactiva (Three.js/@react-three/fiber).
- ✅ **Efectos Avanzados**: Componente Spotlight reactivo al cursor y tarjetas con inclinación 3D (TiltCard).
- ✅ **Responsive Design** optimizado para móviles, tablets y escritorio.
- ✅ **Secciones Completas**: Hero, Sobre mí, Habilidades, Proyectos, Contacto.
- ✅ **Formulario de Contacto Funcional** impulsado por EmailJS.

## 🚀 Quick Start

### Requisitos Previos
- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Clonar o descargar el proyecto
git clone https://github.com/Davidl2002/Portafolio.git
cd Portafolio

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

## 📁 Estructura del Proyecto Destacada

```
Portafolio/
├── src/
│   ├── app/
│   │   ├── layout.jsx        # Layout principal
│   │   ├── page.jsx          # Ensamblaje de secciones y Spotlight
│   │   └── globals.css       # Estilos globales y utilidades personalizadas
│   ├── components/
│   │   ├── 3d/
│   │   │   └── HeroScene.jsx # Escena 3D del fondo (Three.js)
│   │   ├── Navigation.jsx    # Barra de navegación responsive
│   │   ├── Spotlight.jsx     # Efecto de luz reactiva al mouse
│   │   ├── TiltCard.jsx      # Wrapper para efecto de inclinación 3D en tarjetas
│   │   └── sections/
│   │       ├── HeroSection.jsx       # Presentación principal
│   │       ├── AboutSection.jsx      # Información personal
│   │       ├── SkillsSection.jsx     # Grid de tecnologías
│   │       ├── ProjectsSection.jsx   # Galería de proyectos destacados
│   │       └── ContactSection.jsx    # Formulario EmailJS e info de contacto
│   └── lib/                  # Configuraciones externas (si aplica)
```

## 🎨 Stack Tecnológico

| Categoría | Tecnología |
|-----------|-----------|
| **Framework** | Next.js (App Router) |
| **UI Library** | React |
| **Estilos** | Tailwind CSS |
| **Animaciones UI** | Framer Motion |
| **Gráficos 3D** | Three.js / @react-three/fiber / @react-three/drei |
| **Envío de Emails**| EmailJS |

## ⚙️ Configuración Destacada

### Tema y Colores (Tailwind)
El proyecto utiliza una paleta oscura sofisticada con un color de acento llamativo configurado en `tailwind.config.js`:
- **Pop (Acento principal)**: Naranja brillante/Terracota (Ej. `#D07351` adaptado).
- **Dark (Fondos y bordes)**: Escala de grises oscuros y negros puros para alto contraste.

### Funcionalidad de Correo (EmailJS)
El formulario en `ContactSection.jsx` está configurado para enviar correos directamente sin un backend propio usando **EmailJS**. Para que funcione en un entorno clonado, se requieren las credenciales del servicio (`Service ID`, `Template ID`, `Public Key`).

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor local en modo desarrollo

# Producción
npm run build        # Compila y optimiza el proyecto
npm run start        # Ejecuta la versión compilada de producción

# Linting
npm run lint         # Ejecuta Next ESLint
```

## 🌐 Deploy Recomendado

La forma más sencilla de desplegar esta aplicación Next.js es utilizar la plataforma Vercel:

1. Empuja tu código a un repositorio de GitHub.
2. Inicia sesión en [Vercel](https://vercel.com).
3. Importa tu repositorio. Vercel detectará automáticamente que es un proyecto Next.js y configurará los comandos de build.

## 📧 Contacto

- **Email**: [dl735894@gmail.com](mailto:dl735894@gmail.com)
- **GitHub**: [Davidl2002](https://github.com/Davidl2002)
- **LinkedIn**: [David Lopez](https://www.linkedin.com/in/david-lopez-ab7a96376/)
- **Instagram**: [davidlopez._2](https://www.instagram.com/davidlopez._2/)

---

**Construido por Esteban David Lopez Nuñez**

