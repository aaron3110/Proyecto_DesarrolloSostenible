# Integración con Google Forms - Guía Completa

## 📋 Opciones para Integrar Google Forms

### **Opción 1: Incrustar Formulario Directamente**

1. **Crear el formulario en Google Forms**
   - Ve a [forms.google.com](https://forms.google.com)
   - Crea un nuevo formulario
   - Añade las preguntas necesarias para tu investigación

2. **Obtener código de incrustación**
   - En tu formulario, haz clic en "Enviar" (botón superior derecho)
   - Selecciona la pestaña "Incrustar HTML" (`<>`)
   - Copia el código iframe que aparece

3. **Integrar en tu página**
   - Abre `index.html`
   - Busca la sección con clase `survey-placeholder`
   - Reemplaza todo el div con el iframe de Google Forms

**Ejemplo de código a reemplazar:**
```html
<!-- Reemplaza este div -->
<div class="survey-placeholder">
    <!-- Todo este contenido -->
</div>

<!-- Con este iframe (ejemplo) -->
<iframe src="https://docs.google.com/forms/d/e/TU_FORM_ID/viewform?embedded=true" 
        width="100%" 
        height="500" 
        frameborder="0" 
        marginheight="0" 
        marginwidth="0">
    Cargando…
</iframe>
```

---

### **Opción 2: Mostrar Gráficos de Respuestas**

1. **Habilitar respuestas públicas**
   - En tu Google Form, ve a "Respuestas"
   - Haz clic en los tres puntos (⋮) → "Configuración de respuestas"
   - Activa "Resumen de respuestas públicas"

2. **Obtener enlace de gráficos**
   - En la pestaña "Respuestas", haz clic en "Publicar gráficos"
   - Copia el enlace proporcionado

3. **Integrar gráficos**
   - Busca la sección `chart-placeholder` en `index.html`
   - Reemplaza con un iframe que muestre los gráficos

**Ejemplo:**
```html
<!-- Reemplaza chart-placeholder con -->
<iframe src="https://docs.google.com/forms/d/e/TU_FORM_ID/viewanalytics?embedded=true" 
        width="100%" 
        height="400" 
        frameborder="0">
</iframe>
```

---

### **Opción 3: Mostrar Datos con Google Sheets**

1. **Conectar con Google Sheets**
   - En tu Google Form, ve a "Respuestas"
   - Haz clic en el ícono de Google Sheets
   - Crea una nueva hoja de cálculo

2. **Hacer la hoja pública**
   - En Google Sheets, haz clic en "Compartir"
   - Cambia a "Cualquier persona con el enlace puede ver"
   - Copia el enlace

3. **Usar la API de Google Sheets**
   - Obtén el ID de tu hoja de cálculo del enlace
   - Usa la API para obtener datos en tiempo real

**Ejemplo de integración con JavaScript:**
```javascript
// Agregar a script.js
async function fetchSurveyData() {
    const SHEET_ID = 'TU_SHEET_ID';
    const API_KEY = 'TU_API_KEY'; // Obtén una en Google Cloud Console
    const range = 'Sheet1!A1:Z1000'; // Ajusta según tus datos
    
    try {
        const response = await fetch(
            `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}?key=${API_KEY}`
        );
        const data = await response.json();
        updateSurveyResults(data.values);
    } catch (error) {
        console.error('Error fetching survey data:', error);
    }
}

function updateSurveyResults(data) {
    // Procesar datos y actualizar la página
    const totalResponses = data.length - 1; // -1 para excluir encabezados
    document.querySelector('.summary-card:nth-child(1) .summary-number').textContent = totalResponses;
    
    // Agregar más lógica para procesar generaciones, etc.
}
```

---

### **Opción 4: Incrustar Tabla de Respuestas**

1. **Publicar Google Sheets**
   - En tu hoja de respuestas, ve a "Archivo" → "Publicar en la web"
   - Selecciona "Página web" y la hoja específica
   - Copia el enlace

2. **Integrar tabla**
   - Reemplaza `response-placeholder` con un iframe de la tabla

**Ejemplo:**
```html
<iframe src="https://docs.google.com/spreadsheets/d/e/TU_SHEET_ID/pubhtml?widget=true&headers=false" 
        width="100%" 
        height="400" 
        frameborder="0">
</iframe>
```

---

## 🔧 Configuración Recomendada

### **Para Investigación Académica:**

1. **Formulario Principal** (Opción 1)
   - Incrusta el formulario para recopilar respuestas
   - Configura preguntas sobre:
     - Generación (X, Millennial, Centennial)
     - Hábitos de consumo digital
     - Percepción de sostenibilidad
     - Influencia de redes sociales

2. **Gráficos Automáticos** (Opción 2)
   - Muestra resultados en tiempo real
   - Google Forms genera gráficos automáticamente
   - Ideal para mostrar tendencias

3. **Datos Detallados** (Opción 3)
   - Para análisis más profundo
   - Permite crear visualizaciones personalizadas
   - Requiere más configuración técnica

---

## 📊 Preguntas Sugeridas para la Encuesta

### **Información Demográfica:**
- ¿A qué generación perteneces?
- ¿Cuál es tu rango de edad?
- ¿En qué provincia de Costa Rica vives?

### **Consumo Digital:**
- ¿Cuántas horas al día usas redes sociales?
- ¿Qué plataformas digitales usas más?
- ¿Realizas compras online frecuentemente?

### **Sostenibilidad:**
- ¿Consideras el impacto ambiental al hacer compras online?
- ¿Prefieres marcas que se promocionan como sostenibles?
- ¿Has detectado greenwashing en redes sociales?
- ¿Pagarías más por productos sostenibles?

### **Influencia Digital:**
- ¿Te influyen los influencers en decisiones de compra?
- ¿Confías en las certificaciones ambientales que ves online?
- ¿Compartes contenido sobre sostenibilidad?

---

## 🚀 Pasos Rápidos para Implementar

1. **Crear formulario en Google Forms**
2. **Obtener código de incrustación**
3. **Reemplazar `survey-placeholder` en `index.html`**
4. **Opcional: Configurar gráficos automáticos**
5. **Opcional: Conectar con Google Sheets para datos en tiempo real**

---

## 🔐 Consideraciones de Privacidad

- **GDPR/Privacidad**: Informa a los usuarios sobre el uso de datos
- **Anonimato**: Considera hacer las respuestas anónimas
- **Consentimiento**: Incluye checkbox de consentimiento en el formulario
- **Almacenamiento**: Los datos se almacenan en Google Drive del creador

---

## 📱 Responsive Design

Los iframes de Google Forms son responsive por defecto, pero puedes mejorarlos:

```css
/* Agregar a styles.css */
.survey-container iframe {
    width: 100%;
    min-height: 500px;
    border: none;
    border-radius: 10px;
}

@media (max-width: 768px) {
    .survey-container iframe {
        min-height: 400px;
    }
}
```

---

## 🆘 Solución de Problemas

**Problema**: El formulario no se muestra
- **Solución**: Verifica que el enlace sea el de "incrustación" no el de "compartir"

**Problema**: Los gráficos no se actualizan
- **Solución**: Asegúrate de que las respuestas públicas estén habilitadas

**Problema**: Error de CORS al usar la API
- **Solución**: Configura correctamente las credenciales en Google Cloud Console

---

¿Necesitas ayuda con alguna configuración específica? ¡Puedo ayudarte a implementar cualquiera de estas opciones!
