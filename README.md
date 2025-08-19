# Proyecto - Desarrollo Sostenible Digital en Costa Rica

## 🎯 Descripción
Página web sobre desarrollo sostenible digital en Costa Rica, enfocada en el análisis generacional del consumo sostenible en el ecosistema digital costarricense.

## 📁 Estructura del Proyecto
```
pagina_universidad_proyecto/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidades JavaScript
├── images/             # Carpeta para imágenes
│   └── hero-background.jpg  # Imagen de fondo (agregar aquí)
├── README.md           # Este archivo
├── GOOGLE_FORMS_INTEGRATION.md  # Guía de integración de Google Forms
└── ejemplo-encuesta.html        # Ejemplo de formulario local
```

## 🌟 Características Principales

### Secciones Incluidas
- **Hero Section**: Portada con imagen de fondo personalizable
- **Información del Proyecto**: Descripción y contexto
- **Marco Teórico**: Fundamentos de la investigación
- **Generaciones**: Análisis generacional del consumo digital
- **Objetivos**: Objetivo general, específicos y metodología
- **Encuesta**: Integración con Google Forms y visualización de resultados

### Funcionalidades
- Diseño responsive y moderno
- Navegación suave entre secciones
- Integración con Google Forms
- Tabs para mostrar resultados de encuesta
- Imagen de fondo personalizable

## 🖼️ Agregar Imagen de Fondo

### Opción 1: Imagen Propia
1. Guarda tu imagen en la carpeta `images/`
2. Nómbrala como `hero-background.jpg`
3. Recomendaciones:
   - Resolución: 1920x1080px o superior
   - Formato: JPG, PNG, o WebP
   - Tamaño: Menos de 2MB para mejor rendimiento

### Opción 2: Imagen de Ejemplo
Puedes usar imágenes relacionadas con:
- Sostenibilidad y naturaleza
- Tecnología verde
- Costa Rica (paisajes, biodiversidad)
- Personas trabajando en tecnología/sostenibilidad

### Opción 3: Cambiar la Ruta
Si quieres usar otra imagen, edita la línea 99 en `styles.css`:
```css
background: 
    linear-gradient(135deg, rgba(45, 90, 39, 0.85) 0%, rgba(76, 175, 80, 0.75) 100%),
    url('./images/TU_IMAGEN_AQUI.jpg');
```

## 🎨 Personalización de Colores

### Colores Principales
- Verde principal: `#4CAF50`
- Verde oscuro: `#2d5a27`
- Overlay hero: `rgba(45, 90, 39, 0.85)`

### Cambiar Overlay
Para modificar el color del overlay sobre la imagen de fondo, edita:
```css
background: 
    linear-gradient(135deg, rgba(TU_COLOR_AQUI) 0%, rgba(TU_COLOR_AQUI) 100%),
    url('./images/hero-background.jpg');
```

## 📱 Características
- ✅ Diseño responsivo
- ✅ Navegación suave
- ✅ Estadísticas interactivas
- ✅ Formularios funcionales
- ✅ Animaciones CSS
- ✅ Imagen de fondo personalizable

## 🚀 Uso
1. Abre `index.html` en tu navegador
2. Navega por las diferentes secciones
3. Usa el formulario de estadísticas para agregar datos propios
4. Personaliza la imagen de fondo según tus necesidades

## 🔧 Tecnologías Utilizadas
- HTML5
- CSS3 (Flexbox, Grid, Animations)
- JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts (Inter)

## 📊 Secciones Incluidas
1. **Inicio** - Hero con imagen de fondo
2. **Proyecto** - Información académica
3. **Estadísticas** - Datos interactivos + formulario personalizado
4. **Marco Teórico** - Fundamentos de la investigación
5. **Generaciones** - Análisis generacional
6. **Objetivos** - Objetivos de la investigación

## 💡 Consejos
- Para mejor rendimiento, optimiza las imágenes antes de subirlas
- Usa imágenes con buena calidad pero tamaño moderado
- El overlay verde se adapta bien a imágenes de naturaleza y sostenibilidad
- Puedes cambiar los colores del overlay para que coincidan con tu imagen
