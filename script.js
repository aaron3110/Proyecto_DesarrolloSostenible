// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Survey results tabs functionality
function showResults(tabName) {
    // Hide all content
    document.querySelectorAll('.results-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Remove active class from all tabs
    document.querySelectorAll('.tab-button').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show selected content
    document.getElementById(tabName + '-results').classList.add('active');
    
    // Add active class to clicked tab
    event.target.classList.add('active');
}

// Initialize survey results
function initializeSurveyResults() {
    // Update the total responses display
    const totalResponses = 122;
    console.log('Inicializando resultados de encuesta con', totalResponses, 'respuestas');
}

// Función simple para crear gráficos de pastel responsivos
function createPieChart(chartId, data) {
    const chart = document.getElementById(chartId);
    if (!chart) return;
    
    // Limpiar el gráfico
    chart.innerHTML = '';
    
    // Obtener el tamaño del contenedor para hacer el gráfico responsivo
    const containerWidth = chart.offsetWidth || 200;
    const chartSize = Math.min(containerWidth, 200); // Máximo 200px, mínimo el ancho del contenedor
    
    // Crear el SVG
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', chartSize);
    svg.setAttribute('height', chartSize);
    svg.setAttribute('viewBox', `0 0 ${chartSize} ${chartSize}`);
    
    // Calcular el centro y radio
    const centerX = chartSize / 2;
    const centerY = chartSize / 2;
    const radius = (chartSize * 0.4); // 40% del tamaño del gráfico
    
    let currentAngle = 0;
    
    // Crear cada slice
    data.forEach((slice, index) => {
        const angle = (slice.percentage / 100) * 360;
        const endAngle = currentAngle + angle;
        
        // Convertir ángulos a radianes
        const startRad = (currentAngle - 90) * Math.PI / 180;
        const endRad = (endAngle - 90) * Math.PI / 180;
        
        // Calcular puntos del arco
        const x1 = centerX + radius * Math.cos(startRad);
        const y1 = centerY + radius * Math.sin(startRad);
        const x2 = centerX + radius * Math.cos(endRad);
        const y2 = centerY + radius * Math.sin(endRad);
        
        // Crear el path del slice
        const largeArcFlag = angle > 180 ? 1 : 0;
        const pathData = [
            `M ${centerX} ${centerY}`,
            `L ${x1} ${y1}`,
            `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
            'Z'
        ].join(' ');
        
        // Crear el elemento path
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', pathData);
        path.setAttribute('fill', slice.color);
        path.setAttribute('stroke', 'white');
        path.setAttribute('stroke-width', Math.max(1, chartSize / 100)); // Stroke responsivo
        
        svg.appendChild(path);
        
        // Agregar el porcentaje como texto solo si el slice es suficientemente grande
        if (angle > 15) { // Solo mostrar texto si el slice es mayor a 15 grados
            const textAngle = currentAngle + (angle / 2);
            const textRad = (textAngle - 90) * Math.PI / 180;
            const textRadius = radius * 0.6;
            const textX = centerX + textRadius * Math.cos(textRad);
            const textY = centerY + textRadius * Math.sin(textRad);
            
            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', textX);
            text.setAttribute('y', textY);
            text.setAttribute('text-anchor', 'middle');
            text.setAttribute('dominant-baseline', 'middle');
            text.setAttribute('fill', 'white');
            text.setAttribute('font-size', Math.max(8, chartSize / 20)); // Tamaño de fuente responsivo
            text.setAttribute('font-weight', 'bold');
            text.textContent = `${slice.percentage}%`;
            
            svg.appendChild(text);
        }
        
        currentAngle = endAngle;
    });
    
    chart.appendChild(svg);
}

// Función para inicializar todos los gráficos
function initializeAllCharts() {
    // Datos para cada gráfico
    const chartsData = {
        'pie-chart-1': [ // Rango de Edad
            { percentage: 44, color: '#4285f4' },
            { percentage: 28, color: '#ea4335' },
            { percentage: 28, color: '#fbbc04' }
        ],
        'pie-chart-2': [ // Importancia de Sostenibilidad
            { percentage: 32.8, color: '#34a853' },
            { percentage: 29.5, color: '#fbbc04' },
            { percentage: 22.1, color: '#9c27b0' },
            { percentage: 10.7, color: '#ea4335' },
            { percentage: 4.9, color: '#4285f4' }
        ],
        'pie-chart-3': [ // Frecuencia de Búsqueda
            { percentage: 17.2, color: '#4285f4' },
            { percentage: 23.8, color: '#ea4335' },
            { percentage: 31.1, color: '#fbbc04' },
            { percentage: 20.5, color: '#34a853' },
            { percentage: 7.4, color: '#9c27b0' }
        ],
        'pie-chart-4': [ // Reconocimiento de Greenwashing
            { percentage: 53.3, color: '#4285f4' },
            { percentage: 46.7, color: '#ea4335' }
        ],
        'pie-chart-5': [ // Desafíos para Consumo Sostenible
            { percentage: 26.2, color: '#ea4335' },
            { percentage: 24.6, color: '#4285f4' },
            { percentage: 23.8, color: '#9c27b0' },
            { percentage: 11.5, color: '#34a853' },
            { percentage: 9.8, color: '#fbbc04' },
            { percentage: 4.1, color: '#00bcd4' }
        ],
        'pie-chart-6': [ // Preferencia por Productos Locales
            { percentage: 54.1, color: '#4285f4' },
            { percentage: 42.6, color: '#fbbc04' },
            { percentage: 3.3, color: '#ea4335' }
        ],
        'pie-chart-7': [ // Disposición a Pagar Más
            { percentage: 71.3, color: '#4285f4' },
            { percentage: 28.7, color: '#ea4335' }
        ],
        'pie-chart-8': [ // Influencia de Redes Sociales
            { percentage: 42.6, color: '#fbbc04' },
            { percentage: 24.6, color: '#4285f4' },
            { percentage: 15.6, color: '#ea4335' },
            { percentage: 13.9, color: '#34a853' },
            { percentage: 3.3, color: '#9c27b0' }
        ],
        'pie-chart-9': [ // Compromiso de Empresas Costarricenses
            { percentage: 52.5, color: '#4285f4' },
            { percentage: 47.5, color: '#ea4335' }
        ],
        'pie-chart-11': [ // Frecuencia de Compra Local
            { percentage: 63.1, color: '#fbbc04' },
            { percentage: 17.2, color: '#ea4335' },
            { percentage: 11.5, color: '#34a853' },
            { percentage: 6.6, color: '#4285f4' },
            { percentage: 1.6, color: '#9c27b0' }
        ],
        'pie-chart-14': [ // Frecuencia de Preferencia por Marcas Sostenibles
            { percentage: 45.1, color: '#fbbc04' },
            { percentage: 18.9, color: '#34a853' },
            { percentage: 18.9, color: '#9c27b0' },
            { percentage: 10.7, color: '#ea4335' },
            { percentage: 6.6, color: '#4285f4' }
        ]
    };
    
    // Crear cada gráfico
    Object.keys(chartsData).forEach(chartId => {
        createPieChart(chartId, chartsData[chartId]);
    });
}



// Función para redimensionar gráficos cuando cambie el tamaño de la ventana
function resizeCharts() {
    // Redimensionar todos los gráficos existentes
    Object.keys(chartsData).forEach(chartId => {
        const chart = document.getElementById(chartId);
        if (chart && chart.querySelector('svg')) {
            createPieChart(chartId, chartsData[chartId]);
        }
    });
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initializeSurveyResults();
    
    // Inicializar gráficos con un pequeño retraso
    setTimeout(() => {
        initializeAllCharts();
    }, 100);
    
    // Agregar listener para redimensionar gráficos
    window.addEventListener('resize', debounce(resizeCharts, 250));
    
    // Agregar listener para orientación del dispositivo móvil
    window.addEventListener('orientationchange', function() {
        setTimeout(resizeCharts, 500); // Esperar a que se complete el cambio de orientación
    });
});

// Función debounce para optimizar el redimensionamiento
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
