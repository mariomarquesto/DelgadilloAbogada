# ⚖️ Delgadillo Abogada - Sitio Web Oficial

> Sitio web profesional para la **Dra. Sandra Beatriz Mercedes Delgadillo**, abogada con más de **31 años de experiencia** en Tucumán, Argentina.

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Producción-000000?style=for-the-badge&logo=vercel&logoColor=white)

---

## 📋 Descripción

Sitio web corporativo para estudio jurídico con más de **31 años de trayectoria** en Tucumán, Argentina. El sitio incluye:

- 🏅 **Medalla Bodas de Plata 2020** - Reconocimiento del Colegio de Abogados de Tucumán
- ⚖️ **6 áreas de práctica** - Cobranzas, Laboral, Divorcios, Familia, Sucesiones
- 🎨 **Diseño premium** - Animaciones, efectos visuales y experiencia de usuario
- 📱 **Totalmente responsive** - Adaptado a móviles, tablets y desktop
- 🚀 **Optimizado para producción** - Build eficiente y deploy en Vercel

---

## 🎯 Características Principales

### 🏆 Reconocimientos y Confianza

| Logro | Descripción |
|-------|-------------|
| 🏅 **Medalla Bodas de Plata** | Otorgada por el Colegio de Abogados de Tucumán (2020) |
| 📜 **31+ años de experiencia** | Trayectoria ininterrumpida desde 1995 |
| ⚖️ **Matriculada en Tucumán** | Matrícula profesional vigente |
| 🎯 **500+ casos exitosos** | Alto índice de resolución favorable |
| 💼 **98% clientes satisfechos** | Compromiso con la excelencia |

### 📄 Páginas del Sitio

| Página | Ruta | Descripción |
|--------|------|-------------|
| **Inicio** | `/` | Hero, reconocimiento, sobre mí, áreas, testimonios, FAQ |
| **Cobranzas** | `/cobranzas` | Recuperación de créditos judicial y extrajudicial |
| **Derecho Laboral** | `/derecho-laboral` | Defensa de derechos laborales |
| **Divorcios** | `/divorcios` | Procesos de divorcio express y mutuo acuerdo |
| **Familia** | `/familia` | Alimentos, visitas, filiación, violencia familiar |
| **Sucesiones** | `/sucesiones` | Herencias, testamentos, partición de bienes |
| **Contacto** | `/contacto` | Formulario y datos de contacto |

### 🧩 Secciones de la Home

1. **Hero** - Presentación principal con efecto de escritura y estadísticas
2. **RecognitionSection** - 🏅 Medalla Bodas de Plata 2020 (protagonista)
3. **TechnologySecuritySection** - Seguridad cibernética y peritos
4. **AboutSection** - Sobre la Dra. Delgadillo
5. **PracticeCards** - Áreas de práctica
6. **WhyChooseUs** - Por qué elegirnos
7. **Testimonials** - Testimonios de clientes
8. **FAQ** - Preguntas frecuentes

---

## 🛠️ Stack Tecnológico

### Frontend

| Tecnología | Versión | Uso |
|------------|---------|-----|
| **React** | 18.2.0 | Biblioteca de UI |
| **TypeScript** | 5.2 | Tipado estático |
| **Vite** | 5.0 | Bundler y dev server |
| **Tailwind CSS** | 3.4 | Estilos utilitarios |
| **Framer Motion** | 10.12 | Animaciones |
| **React Router DOM** | 6.14 | Navegación SPA |
| **React Icons** | 4.10 | Iconografía |

### Herramientas de Desarrollo

| Herramienta | Uso |
|-------------|-----|
| **ESLint** | Linting de código |
| **PostCSS** | Procesamiento de CSS |
| **Autoprefixer** | Prefijos CSS |

### Hosting y Deploy

| Servicio | Uso |
|----------|-----|
| **Vercel** | Hosting y deploy continuo |
| **GitHub** | Control de versiones |

---

## 📁 Estructura del Proyecto

```
abogada-delgadillo/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Footer.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── ProtectedLink.tsx
│   │   │   ├── RouteGate.tsx
│   │   │   └── WhatsAppButton.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── RecognitionSection.tsx
│   │   │   ├── TechnologySecuritySection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── PracticeCards.tsx
│   │   │   ├── WhyChooseUs.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── FAQ.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── ThreeDScene.tsx
│   │       └── ParticlesBackground.tsx
│   ├── context/
│   │   └── NavigationContext.tsx
│   ├── layouts/
│   │   └── PublicLayout.tsx
│   ├── pages/
│   │   └── public/
│   │       ├── Home.tsx
│   │       ├── Cobranzas.tsx
│   │       ├── Contacto.tsx
│   │       ├── DerechoLaboral.tsx
│   │       ├── Divorcios.tsx
│   │       ├── Familia.tsx
│   │       └── Sucesiones.tsx
│   ├── routes/
│   │   └── AppRouter.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🚀 Instalación y Desarrollo

### Requisitos Previos

- **Node.js** 18.x o superior
- **npm** 9.x o superior
- **Git**

### Pasos de Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/mariomarquesto/delgadilloabogada.git

# 2. Entrar al directorio
cd delgadilloabogada

# 3. Instalar dependencias
npm install

# 4. Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:3000`

### Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Genera build de producción |
| `npm run preview` | Previsualiza build de producción |
| `npm run lint` | Ejecuta ESLint |

---

## 🌐 Deploy en Vercel

### Opción 1: Deploy desde GitHub (Recomendado)

1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en **"Add New..." → "Project"**
3. Importa el repositorio `mariomarquesto/delgadilloabogada`
4. Vercel detectará automáticamente Vite
5. Haz clic en **"Deploy"**

### Opción 2: Deploy desde CLI

```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### Variables de Entorno (Opcional)

```env
VITE_WHATSAPP_NUMBER=5493815544143
VITE_EMAIL=sandra@delgadilloabogada.com
```

---

## 🎨 Personalización

### Colores

Los colores principales están definidos en `tailwind.config.js`:

```js
colors: {
  primary: '#0A1E3C',  // Azul oscuro
  gold: '#C9A96E',     // Dorado
}
```

### Tipografías

```js
fontFamily: {
  serif: ['Playfair Display', 'serif'],  // Títulos
  sans: ['Inter', 'sans-serif'],         // Textos
}
```

### Datos de Contacto

Actualizar en los siguientes archivos:

- `src/components/common/Footer.tsx`
- `src/pages/public/Contacto.tsx`
- `src/components/common/WhatsAppButton.tsx`

---

## 📊 Rendimiento

| Métrica | Valor |
|---------|-------|
| **First Contentful Paint** | < 1.5s |
| **Time to Interactive** | < 3s |
| **Bundle Size** | ~450 KB (gzip) |
| **Lighthouse Score** | 90+ |

---

## 🏅 Medalla Bodas de Plata

> **Dra. Sandra Beatriz Mercedes Delgadillo**
> 
> **Medalla Bodas de Plata 2020**
> 
> Otorgada por el **Colegio de Abogados de Tucumán** al cumplir **25 años de ejercicio profesional**.
> 
> *"Más de tres décadas dedicadas al derecho y al servicio de la comunidad."*

---

## 📞 Contacto

| Medio | Dato |
|-------|------|
| 📍 **Dirección** | Av. Perón 148, Yerba Buena, Tucumán |
| 📞 **Teléfono** | +54 9 381 554-4143 |
| 📧 **Email** | sandra@delgadilloabogada.com |
| 💬 **WhatsApp** | [+54 9 381 554-4143](https://wa.me/5493815544143) |

---

## 📄 Licencia

Este proyecto es **privado** y propiedad de la **Dra. Sandra Beatriz Mercedes Delgadillo**.

© 2026 Delgadillo Abogada. Todos los derechos reservados.

---

## 🙏 Agradecimientos

- **Dra. Sandra Delgadillo** - Por confiar en este proyecto
- **Colegio de Abogados de Tucumán** - Por el reconocimiento otorgado
- **Comunidad Open Source** - Por las herramientas utilizadas

---

<div align="center">

**⚖️ Delgadillo Abogada - Justicia con vocación ⚖️**

*Desarrollado con ❤️ en Tucumán, Argentina*

</div>
