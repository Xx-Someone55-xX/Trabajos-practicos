# 🎓 Portal de Trabajos Prácticos Universitarios

Bienvenido al repositorio de mi portal personal de trabajos prácticos universitarios. Este sitio web está diseñado para organizar y presentar trabajos prácticos que realizo durante mi carrera en la facultad.

## ✨ Características principales

- **Organización por materias**: Presentación clara de trabajos prácticos categorizados por asignaturas
- **Diseño responsive**: Adaptable a dispositivos móviles, tablets y escritorio
- **Modo oscuro/claro**: Interfaz personalizable según preferencias del usuario
- **Visualización de código**: Presentación elegante de soluciones con funcionalidad de copiado
- **Navegación intuitiva**: Acceso rápido entre diferentes trabajos y ejercicios
- **Progreso académico**: Seguimiento de avance a través de los diferentes puntos de cada TP

## 🚀 Tecnologías utilizadas

- **Frontend**:
  - HTML5 semántico
  - CSS3 con arquitectura ITCSS (variables, componentes, utilidades)
  - JavaScript moderno (ES6+)
- **Herramientas**:
  - Visual Studio Code
  - Git & GitHub
  - Font Awesome (iconos)
- **Metodologías**:
  - Diseño modular y escalable
  - Mobile First
  - Principios de accesibilidad web

## 📂 Estructura del proyecto

Trabajos-practicos/
├── assets/
│ ├── css/
│ │ ├── base/ # Estilos base y reset
│ │ │ ├── \_reset.css
│ │ │ ├── \_typography.css
│ │ │ └── \_variables.css
│ │ ├── components/ # Componentes UI
│ │ │ ├── \_buttons.css
│ │ │ ├── \_cards.css
│ │ │ ├── \_code.css
│ │ │ └── \_header.css
│ │ ├── layout/ # Diseño de estructura
│ │ │ ├── \_grid.css
│ │ │ └── \_navigation.css
│ │ ├── pages/ # Estilos específicos de página
│ │ │ ├── \_home.css
│ │ │ ├── \_trabajos.css
│ │ │ └── \_tp1.css
│ │ ├── themes/ # Temas
│ │ │ └── \_dark-light.css
│ │ ├── utilities/ # Utilidades
│ │ │ ├── \_animations.css
│ │ │ └── \_responsive.css
│ │ └── main.css # Archivo principal CSS
│ ├── js/
│ │ ├── copy.js # Copiar código
│ │ ├── theme.js # Manejo de tema
│ │ └── navigation.js # Navegación entre puntos
│ └── icons/ # Íconos
│ └── favicon.png
├── index.html # Página principal
├── algoritmos.html # Trabajos de Algoritmos
├── matematica.html # Trabajos de Matemática
├── algoritmos/ # Trabajos específicos de Algoritmos
│ └── tp1_algoritmos.html # TP1 de Algoritmos
├── matematica/ # Trabajos específicos de Matemática
│ └── ...
├── README.md # Este archivo
└── .gitignore # Archivos ignorados por Git

## 🔍 Vista previa de funcionalidades

### Página principal (index.html)

![Página principal](assets/images/home-preview.jpg) <!-- Agrega screenshot si tienes -->

Muestra todas las materias organizadas en tarjetas interactivas con:

- Iconos representativos
- Breve descripción
- Animaciones sutiles al pasar el cursor

### Detalle de trabajos por materia (trabajos.html)

![Trabajos por materia](assets/images/trabajos-preview.jpg) <!-- Agrega screenshot si tienes -->

Presenta los trabajos prácticos disponibles para cada materia con:

- Sistema de puntos completados
- Fechas de entrega
- Estado de completitud

### Trabajo práctico individual (ej: tp1_algoritmos.html)

![Detalle de TP](assets/images/tp-preview.jpg) <!-- Agrega screenshot si tienes -->

Interfaz especializada para presentar soluciones con:

- Navegación entre ejercicios
- Visualizador de código con sintaxis destacada
- Botón de copiado con confirmación visual
- Descripción detallada de cada problema

## 🌈 Temas personalizados

El sitio ofrece dos modos de visualización:

| Modo Claro                                  | Modo Oscuro                                 |
| ------------------------------------------- | ------------------------------------------- |
| ![Modo claro](assets/images/light-mode.jpg) | ![Modo oscuro](assets/images/dark-mode.jpg) |

Las preferencias de tema se guardan localmente para futuras visitas.

## 🛠️ Cómo ejecutar localmente

1. Clona el repositorio:

```bash
git clone https://github.com/Xx-Someone55-xX/Trabajos-practicos.git
```
