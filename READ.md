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

Directory structure:
└── xx-someone55-xx-trabajos-practicos/
├── READ.md
├── docs/
│ ├── index.html
│ ├── .nojekyll
│ ├── back-end/
│ │ └── django_api/
│ │ ├── manage.py
│ │ ├── django_api/
│ │ │ ├── **init**.py
│ │ │ ├── asgi.py
│ │ │ ├── settings.py
│ │ │ ├── urls.py
│ │ │ └── wsgi.py
│ │ └── tps/
│ │ ├── **init**.py
│ │ ├── admin.py
│ │ ├── apps.py
│ │ ├── models.py
│ │ ├── tests.py
│ │ └── views.py
│ └── front-end/
│ ├── assets/
│ │ ├── css/
│ │ │ ├── ia.css
│ │ │ ├── main.css
│ │ │ ├── base/
│ │ │ │ ├── \_reset.css
│ │ │ │ ├── \_typography.css
│ │ │ │ └── \_variables.css
│ │ │ ├── components/
│ │ │ │ ├── \_buttons.css
│ │ │ │ ├── \_cards.css
│ │ │ │ ├── \_code.css
│ │ │ │ └── \_header.css
│ │ │ ├── layout/
│ │ │ │ ├── \_grid.css
│ │ │ │ └── \_navigation.css
│ │ │ ├── pages/
│ │ │ │ ├── \_home.css
│ │ │ │ ├── \_tp1.css
│ │ │ │ └── \_trabajos.css
│ │ │ ├── themes/
│ │ │ │ └── \_dark-light.css
│ │ │ └── utilities/
│ │ │ ├── \_animations.css
│ │ │ └── \_responsive.css
│ │ └── js/
│ │ ├── anterior_siguiente.js
│ │ ├── color_theme.js
│ │ ├── copy.js
│ │ ├── index.js
│ │ └── theme.js
│ └── materias/
│ ├── algoritmos.html
│ ├── sistemas_procesos.html
│ └── algoritmos/
│ ├── tp1_algoritmos.html
│ └── tp2_algoritmos.html
├── TP1/
│ ├── tp1_punto1.c
│ ├── tp1_punto10.c
│ ├── tp1_punto11.c
│ ├── tp1_punto11_v.2.c
│ ├── tp1_punto12.c
│ ├── tp1_punto13.c
│ ├── tp1_punto14.c
│ ├── tp1_punto15.c
│ ├── tp1_punto16.c
│ ├── tp1_punto17.c
│ ├── tp1_punto18.c
│ ├── tp1_punto2.c
│ ├── tp1_punto3.c
│ ├── tp1_punto4.c
│ ├── tp1_punto5.c
│ ├── tp1_punto6.c
│ ├── tp1_punto7.c
│ ├── tp1_punto8.c
│ └── tp1_punto9.c
└── TP2/
├── punto1.c
├── punto2.c
├── punto3.c
├── punto4.c
├── punto5.c
└── punto6.c

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
