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

// Función para crear gráficos de barras horizontales agrupadas (como la imagen 6)
function createHorizontalBarChart(containerId, data, options = {}) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    // Limpiar el contenedor
    container.innerHTML = '';
    
    // Crear la estructura del gráfico
    const chartDiv = document.createElement('div');
    chartDiv.className = 'horizontal-bar-chart';
    
    // Título del gráfico (opcional)
    if (options.title) {
        const title = document.createElement('div');
        title.className = 'chart-title';
        title.textContent = options.title;
        chartDiv.appendChild(title);
    }
    
    // Contenedor principal del gráfico
    const chartArea = document.createElement('div');
    chartArea.className = 'horizontal-chart-area';
    
    // Crear cada grupo de acciones
    data.forEach((actionData, index) => {
        const actionGroup = document.createElement('div');
        actionGroup.className = 'action-group';
        
        // Etiqueta de la acción
        const actionLabel = document.createElement('div');
        actionLabel.className = 'action-label';
        actionLabel.textContent = actionData.name;
        
        // Contenedor de barras horizontales
        const barsContainer = document.createElement('div');
        barsContainer.className = 'horizontal-bars-container';
        
        // Crear barras para cada generación
        actionData.values.forEach((value, genIndex) => {
            const barWrapper = document.createElement('div');
            barWrapper.className = 'horizontal-bar-wrapper';
            
            const bar = document.createElement('div');
            const colors = ['#ff6b9d', '#ff8c42', '#4285f4']; // Millennial, Generación X, Centennial
            bar.className = 'horizontal-bar';
            bar.style.width = `${value}%`;
            bar.style.backgroundColor = colors[genIndex];
            
            // Agregar porcentaje al final de la barra
            const percentage = document.createElement('span');
            percentage.className = 'horizontal-bar-percentage';
            percentage.textContent = `${value}%`;
            
            barWrapper.appendChild(bar);
            barWrapper.appendChild(percentage);
            barsContainer.appendChild(barWrapper);
        });
        
        actionGroup.appendChild(actionLabel);
        actionGroup.appendChild(barsContainer);
        chartArea.appendChild(actionGroup);
    });
    
    chartDiv.appendChild(chartArea);
    
    // Leyenda
    const legend = document.createElement('div');
    legend.className = 'horizontal-chart-legend';
    
    const generations = [
        { label: 'Millennial', class: 'millennial', color: '#ff6b9d' },
        { label: 'Generación X', class: 'generacion-x', color: '#ff8c42' },
        { label: 'Centennial', class: 'centennial', color: '#4285f4' }
    ];
    
    generations.forEach(gen => {
        const legendItem = document.createElement('div');
        legendItem.className = 'horizontal-legend-item';
        
        const colorBox = document.createElement('div');
        colorBox.className = 'horizontal-legend-color';
        colorBox.style.backgroundColor = gen.color;
        
        const text = document.createElement('div');
        text.className = 'horizontal-legend-text';
        text.textContent = gen.label;
        
        legendItem.appendChild(colorBox);
        legendItem.appendChild(text);
        legend.appendChild(legendItem);
    });
    
    chartDiv.appendChild(legend);
    container.appendChild(chartDiv);
}

// Función para crear gráficos de barras verticales agrupadas
function createVerticalBarChart(containerId, data, options = {}) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    // Limpiar el contenedor
    container.innerHTML = '';
    
    // Crear la estructura del gráfico
    const chartDiv = document.createElement('div');
    chartDiv.className = 'vertical-bar-chart';
    
    // Título del gráfico (opcional)
    if (options.title) {
        const title = document.createElement('div');
        title.className = 'chart-title';
        title.textContent = options.title;
        chartDiv.appendChild(title);
    }
    
    // Área del gráfico
    const chartArea = document.createElement('div');
    chartArea.className = 'chart-area';
    
    // Etiquetas del eje Y
    const yAxisLabels = document.createElement('div');
    yAxisLabels.className = 'y-axis-labels';
    
    // Crear etiquetas del eje Y (0%, 5%, 10%, 15%, 20%, 25%, 30%)
    const maxValue = Math.max(...data.map(gen => Math.max(...gen.values)));
    const yAxisMax = Math.ceil(maxValue / 5) * 5; // Redondear hacia arriba a múltiplo de 5
    
    for (let i = yAxisMax; i >= 0; i -= 5) {
        const label = document.createElement('div');
        label.className = 'y-axis-label';
        label.textContent = `${i}%`;
        yAxisLabels.appendChild(label);
    }
    
    chartArea.appendChild(yAxisLabels);
    
    // Crear grupos de generaciones
    data.forEach((generationData, genIndex) => {
        const generationGroup = document.createElement('div');
        generationGroup.className = 'generation-group';
        
        // Contenedor de barras
        const barsContainer = document.createElement('div');
        barsContainer.className = 'bars-container';
        
        // Crear una sola barra por generación (para gráficos simples como Sí/No)
        // O múltiples barras para gráficos complejos
        if (generationData.values.length === 1) {
            // Una sola barra por generación
            const bar = document.createElement('div');
            const generationClass = generationData.name.toLowerCase().replace(' ', '-');
            bar.className = `vertical-bar`;
            
            // Aplicar color basado en la generación
            const colorMap = {
                'centennial': '#4285f4',
                'millennial': '#ea4335',
                'generacion-x': '#fbbc04',
                'generación-x': '#fbbc04'
            };
            
            bar.style.backgroundColor = colorMap[generationClass] || '#4285f4';
            
            const height = (generationData.values[0] / yAxisMax) * 250;
            bar.style.height = `${height}px`;
            
            const percentage = document.createElement('div');
            percentage.className = 'bar-percentage';
            percentage.textContent = `${generationData.values[0]}%`;
            bar.appendChild(percentage);
            
            barsContainer.appendChild(bar);
        } else {
            // Múltiples barras por generación
            generationData.values.forEach((value, categoryIndex) => {
                const bar = document.createElement('div');
                
                // Usar las clases de categorías definidas en los datos
                const categoryClass = generationData.categories && generationData.categories[categoryIndex] ? 
                    generationData.categories[categoryIndex].class : 'centennial';
                
                bar.className = `vertical-bar`;
                
                // Aplicar el color directamente
                const colorMap = {
                    'color-1': '#87ceeb',
                    'color-2': '#000080',
                    'color-3': '#ffa500',
                    'color-4': '#800080',
                    'color-5': '#ffc0cb',
                    'color-6': '#32cd32',
                    'centennial': '#4285f4',
                    'millennial': '#ea4335',
                    'generacion-x': '#fbbc04'
                };
                
                bar.style.backgroundColor = colorMap[categoryClass] || '#4285f4';
                
                const height = (value / yAxisMax) * 250;
                bar.style.height = `${height}px`;
                
                const percentage = document.createElement('div');
                percentage.className = 'bar-percentage';
                percentage.textContent = `${value}%`;
                bar.appendChild(percentage);
                
                barsContainer.appendChild(bar);
            });
        }
        
        generationGroup.appendChild(barsContainer);
        
        // Etiqueta de la generación
        const label = document.createElement('div');
        label.className = 'generation-label';
        label.textContent = generationData.name;
        generationGroup.appendChild(label);
        
        chartArea.appendChild(generationGroup);
    });
    
    chartDiv.appendChild(chartArea);
    
    // Leyenda
    if (data[0] && data[0].categories) {
        const legend = document.createElement('div');
        legend.className = 'vertical-chart-legend';
        
        data[0].categories.forEach(category => {
            const legendItem = document.createElement('div');
            legendItem.className = 'vertical-legend-item';
            
            const colorBox = document.createElement('div');
            colorBox.className = 'vertical-legend-color';
            
            // Mapear colores directamente
            const colorMap = {
                'color-1': '#87ceeb',
                'color-2': '#000080',
                'color-3': '#ffa500',
                'color-4': '#800080',
                'color-5': '#ffc0cb',
                'color-6': '#32cd32',
                'centennial': '#4285f4',
                'millennial': '#ea4335',
                'generacion-x': '#fbbc04'
            };
            
            colorBox.style.backgroundColor = colorMap[category.class] || '#4285f4';
            
            const text = document.createElement('div');
            text.className = 'vertical-legend-text';
            text.textContent = category.label;
            
            legendItem.appendChild(colorBox);
            legendItem.appendChild(text);
            legend.appendChild(legendItem);
        });
        
        chartDiv.appendChild(legend);
    }
    
    container.appendChild(chartDiv);
}

// Función para inicializar todos los gráficos
function initializeAllCharts() {
    // Gráfico 1: Importancia de Sostenibilidad por Generación
    const importanceData = [
        {
            name: 'Centennial',
            values: [16.67, 12.70, 6.35, 0.79, 7.14],
            categories: [
                { label: 'Algo importante', class: 'color-1' },
                { label: 'Importante', class: 'color-2' },
                { label: 'Muy importante', class: 'color-3' },
                { label: 'Nada importante', class: 'color-4' },
                { label: 'Poco importante', class: 'color-5' }
            ]
        },
        {
            name: 'Millennial',
            values: [8.73, 8.73, 7.94, 1.59, 1.59],
            categories: [
                { label: 'Algo importante', class: 'color-1' },
                { label: 'Importante', class: 'color-2' },
                { label: 'Muy importante', class: 'color-3' },
                { label: 'Nada importante', class: 'color-4' },
                { label: 'Poco importante', class: 'color-5' }
            ]
        },
        {
            name: 'Generación X',
            values: [3.97, 11.11, 8.73, 2.38, 1.59],
            categories: [
                { label: 'Algo importante', class: 'color-1' },
                { label: 'Importante', class: 'color-2' },
                { label: 'Muy importante', class: 'color-3' },
                { label: 'Nada importante', class: 'color-4' },
                { label: 'Poco importante', class: 'color-5' }
            ]
        }
    ];
    
    // Gráfico 2: Disposición a Pagar Más por Generación
    const payMoreData = [
        {
            name: 'Centennial',
            values: [25.45, 74.55],
            categories: [
                { label: 'No', class: 'color-1' },
                { label: 'Sí', class: 'color-2' }
            ]
        },
        {
            name: 'Millennial',
            values: [22.22, 77.78],
            categories: [
                { label: 'No', class: 'color-1' },
                { label: 'Sí', class: 'color-2' }
            ]
        },
        {
            name: 'Generación X',
            values: [37.14, 62.86],
            categories: [
                { label: 'No', class: 'color-1' },
                { label: 'Sí', class: 'color-2' }
            ]
        }
    ];
    
    // Gráfico 3: Acciones en Compras Online por Generación
    const actionsData = [
        {
            name: 'Verificar certificaciones',
            values: [44, 22, 33],
            categories: [
                { label: 'Millennial', class: 'millennial' },
                { label: 'Generación X', class: 'generacion-x' },
                { label: 'Centennial', class: 'centennial' }
            ]
        },
        {
            name: 'Revisar empaque',
            values: [28, 26, 46],
            categories: [
                { label: 'Millennial', class: 'millennial' },
                { label: 'Generación X', class: 'generacion-x' },
                { label: 'Centennial', class: 'centennial' }
            ]
        },
        {
            name: 'Ninguna',
            values: [29, 35, 35],
            categories: [
                { label: 'Millennial', class: 'millennial' },
                { label: 'Generación X', class: 'generacion-x' },
                { label: 'Centennial', class: 'centennial' }
            ]
        },
        {
            name: 'Leer reseñas',
            values: [28, 23, 49],
            categories: [
                { label: 'Millennial', class: 'millennial' },
                { label: 'Generación X', class: 'generacion-x' },
                { label: 'Centennial', class: 'centennial' }
            ]
        }
    ];
    
    // Gráfico 4: Reconocimiento de Greenwashing por Generación
    const greenwashingData = [
        {
            name: 'Centennial',
            values: [22.22, 21.43],
            categories: [
                { label: 'No', class: 'color-1' },
                { label: 'Sí', class: 'color-2' }
            ]
        },
        {
            name: 'Millennial',
            values: [11.11, 17.46],
            categories: [
                { label: 'No', class: 'color-1' },
                { label: 'Sí', class: 'color-2' }
            ]
        },
        {
            name: 'Generación X',
            values: [13.49, 14.29],
            categories: [
                { label: 'No', class: 'color-1' },
                { label: 'Sí', class: 'color-2' }
            ]
        }
    ];
    
    // Gráfico 5: Frecuencia de Compra Local por Generación
    const localShoppingData = [
        {
            name: 'Centennial',
            values: [27.78, 10.32, 3.97, 1.59, 0],
            categories: [
                { label: 'A veces', class: 'color-1' },
                { label: 'Casi nunca', class: 'color-2' },
                { label: 'Casi siempre', class: 'color-3' },
                { label: 'Nunca', class: 'color-4' },
                { label: 'Siempre', class: 'color-5' }
            ]
        },
        {
            name: 'Millennial',
            values: [19.84, 3.97, 3.17, 0.79, 0.79],
            categories: [
                { label: 'A veces', class: 'color-1' },
                { label: 'Casi nunca', class: 'color-2' },
                { label: 'Casi siempre', class: 'color-3' },
                { label: 'Nunca', class: 'color-4' },
                { label: 'Siempre', class: 'color-5' }
            ]
        },
        {
            name: 'Generación X',
            values: [16.67, 2.38, 3.97, 3.97, 0.79],
            categories: [
                { label: 'A veces', class: 'color-1' },
                { label: 'Casi nunca', class: 'color-2' },
                { label: 'Casi siempre', class: 'color-3' },
                { label: 'Nunca', class: 'color-4' },
                { label: 'Siempre', class: 'color-5' }
            ]
        }
    ];
    
    // Gráfico 6: Acciones para Demostrar Compromiso Sostenible por Categoría
    const sustainabilityActionsData = [
        {
            name: 'Usar materiales reciclados',
            values: [26, 28, 46],
            categories: [
                { label: 'Millennial', class: 'millennial' },
                { label: 'Generación X', class: 'generacion-x' },
                { label: 'Centennial', class: 'centennial' }
            ]
        },
        {
            name: 'Certificaciones',
            values: [29, 27, 44],
            categories: [
                { label: 'Millennial', class: 'millennial' },
                { label: 'Generación X', class: 'generacion-x' },
                { label: 'Centennial', class: 'centennial' }
            ]
        },
        {
            name: 'Reducir emisiones',
            values: [33, 20, 47],
            categories: [
                { label: 'Millennial', class: 'millennial' },
                { label: 'Generación X', class: 'generacion-x' },
                { label: 'Centennial', class: 'centennial' }
            ]
        },
        {
            name: 'Reportes',
            values: [31, 29, 40],
            categories: [
                { label: 'Millennial', class: 'millennial' },
                { label: 'Generación X', class: 'generacion-x' },
                { label: 'Centennial', class: 'centennial' }
            ]
        },
        {
            name: 'Invertir proyectos',
            values: [30, 29, 41],
            categories: [
                { label: 'Millennial', class: 'millennial' },
                { label: 'Generación X', class: 'generacion-x' },
                { label: 'Centennial', class: 'centennial' }
            ]
        },
        {
            name: 'Economía circular',
            values: [34, 25, 41],
            categories: [
                { label: 'Millennial', class: 'millennial' },
                { label: 'Generación X', class: 'generacion-x' },
                { label: 'Centennial', class: 'centennial' }
            ]
        }
    ];
    
    // Crear los gráficos
    createVerticalBarChart('chart-1', importanceData);
    createVerticalBarChart('chart-2', payMoreData);
    createVerticalBarChart('chart-3', actionsData);
    createVerticalBarChart('chart-4', greenwashingData);
    createVerticalBarChart('chart-5', localShoppingData);
    createHorizontalBarChart('chart-6', sustainabilityActionsData);
}



// Función para redimensionar gráficos cuando cambie el tamaño de la ventana
function resizeCharts() {
    // Reinicializar todos los gráficos
    initializeAllCharts();
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
