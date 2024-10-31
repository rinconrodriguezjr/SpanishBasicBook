// const totalPages = 197; // Número total de páginas del flipbook
// let currentPage = 1;
// let zoomLevel = 1; // Nivel de zoom inicial
// const zoomStep = 0.1; // Incremento/decremento del zoom

// const imageElement = document.getElementById('flipbook-image');
// const prevButton = document.getElementById('prev');
// const nextButton = document.getElementById('next');
// const pageNumberInput = document.getElementById('page-number');
// const goToPageButton = document.getElementById('go-to-page');
// const zoomInButton = document.getElementById('zoom-in');
// const zoomOutButton = document.getElementById('zoom-out');
// const zoomSlider = document.getElementById('zoom-slider');
// const zoomPercentage = document.getElementById('zoom-percentage');
// const errorMessage = document.getElementById('error-message');
// const audioPlayer = document.getElementById('audio-player');
// const audioSource = document.getElementById('audio-source');
// const audioLinks = document.querySelectorAll('#audio-list a');

// let isDragging = false;
// let startX, startY, initialX, initialY;

// function updatePage() {
//     if (currentPage < 1) currentPage = 1;
//     if (currentPage > totalPages) currentPage = totalPages;
//     imageElement.src = `images/Pag_${currentPage}.png`;
//     errorMessage.style.display = 'none';
//     console.log(`Página actual: ${currentPage}`);
// }

// function goToPreviousPage() {
//     if (currentPage > 1) {
//         currentPage--;
//         updatePage();
//     }
//     console.log('Botón anterior clicado');
// }

// function goToNextPage() {
//     if (currentPage < totalPages) {
//         currentPage++;
//         updatePage();
//     }
//     console.log('Botón siguiente clicado');
// }

// function goToPage() {
//     const pageNumber = parseInt(pageNumberInput.value, 10);
//     if (pageNumber >= 1 && pageNumber <= totalPages) {
//         currentPage = pageNumber;
//         updatePage();
//     } else {
//         errorMessage.style.display = 'block';
//         console.log('Número de página no válido');
//     }
//     console.log(`Ir a página: ${pageNumber}`);
// }

// function zoomIn() {
//     zoomLevel += zoomStep;
//     updateZoom();
//     console.log(`Zoom: ${zoomLevel}`);
// }

// function zoomOut() {
//     zoomLevel = Math.max(1, zoomLevel - zoomStep); // Evita que el zoom sea menor que 1
//     updateZoom();
//     console.log(`Zoom: ${zoomLevel}`);
// }

// function updateZoom() {
//     imageElement.style.transform = `scale(${zoomLevel})`;
//     zoomSlider.value = zoomLevel * 100; // Actualiza el valor del control deslizante
//     zoomPercentage.textContent = `${Math.round(zoomLevel * 100)}%`; // Muestra el porcentaje de zoom
// }

// function handleMouseDown(event) {
//     if (zoomLevel > 1) { // Solo permite arrastrar cuando se ha hecho zoom
//         isDragging = true;
//         startX = event.clientX;
//         startY = event.clientY;
//         initialX = parseFloat(window.getComputedStyle(imageElement).left);
//         initialY = parseFloat(window.getComputedStyle(imageElement).top);
//         imageElement.style.cursor = 'grabbing';
//     }
// }

// function handleMouseMove(event) {
//     if (isDragging) {
//         const deltaX = event.clientX - startX;
//         const deltaY = event.clientY - startY;
//         imageElement.style.left = `${initialX + deltaX}px`;
//         imageElement.style.top = `${initialY + deltaY}px`;
//     }
// }

// function handleMouseUp() {
//     if (isDragging) {
//         isDragging = false;
//         imageElement.style.cursor = 'grab';
//     }
// }

// function playAudio(event) {
//     const audioFile = event.target.dataset.audio;
//     audioSource.src = `audio/${audioFile}`;
//     audioPlayer.load();
//     audioPlayer.play().catch(error => {
//         console.error('Error al reproducir el audio:', error);
//         alert('No se pudo reproducir el audio. Verifica el archivo.');
//     });
// }


// zoomSlider.addEventListener('input', (event) => {
//     zoomLevel = event.target.value / 100;
//     updateZoom();
// });

// prevButton.addEventListener('click', goToPreviousPage);
// nextButton.addEventListener('click', goToNextPage);
// goToPageButton.addEventListener('click', goToPage);
// zoomInButton.addEventListener('click', zoomIn);
// zoomOutButton.addEventListener('click', zoomOut);

// imageElement.addEventListener('mousedown', handleMouseDown);
// window.addEventListener('mousemove', handleMouseMove);
// window.addEventListener('mouseup', handleMouseUp);

// audioLinks.forEach(link => link.addEventListener('click', playAudio));

// updatePage();
// updateZoom(); // Inicializa el zoom al cargar

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// const totalPages = 197; // Número total de páginas del flipbook
// let currentPage = 1;
// let zoomLevel = 1; // Nivel de zoom inicial
// const zoomStep = 0.1; // Incremento/decremento del zoom

// const imageElement = document.getElementById('flipbook-image');
// const prevButton = document.getElementById('prev');
// const nextButton = document.getElementById('next');
// const pageNumberInput = document.getElementById('page-number');
// const goToPageButton = document.getElementById('go-to-page');
// const zoomInButton = document.getElementById('zoom-in');
// const zoomOutButton = document.getElementById('zoom-out');
// const zoomSlider = document.getElementById('zoom-slider');
// const zoomPercentage = document.getElementById('zoom-percentage');
// const errorMessage = document.getElementById('error-message');
// const audioPlayer = document.getElementById('audio-player');
// const audioSource = document.getElementById('audio-source');
// const audioLinks = document.querySelectorAll('#audio-list a');

// let isDragging = false;
// let startX, startY, translateX = 0, translateY = 0;

// // Actualizar la página del flipbook
// function updatePage() {
//     if (currentPage < 1) currentPage = 1;
//     if (currentPage > totalPages) currentPage = totalPages;
//     imageElement.src = `images/Pag_${currentPage}.png`;
//     errorMessage.style.display = 'none';
//     resetImagePosition(); // Reiniciar la posición de la imagen al cambiar de página
//     console.log(`Página actual: ${currentPage}`);
// }

// // Resetear la posición de la imagen cuando se cambia de página
// function resetImagePosition() {
//     translateX = 0;
//     translateY = 0;
//     updateTransform();
// }

// // Funciones de navegación entre páginas
// function goToPreviousPage() {
//     if (currentPage > 1) {
//         currentPage--;
//         updatePage();
//     }
// }

// function goToNextPage() {
//     if (currentPage < totalPages) {
//         currentPage++;
//         updatePage();
//     }
// }

// function goToPage() {
//     const pageNumber = parseInt(pageNumberInput.value, 10);
//     if (pageNumber >= 1 && pageNumber <= totalPages) {
//         currentPage = pageNumber;
//         updatePage();
//     } else {
//         errorMessage.style.display = 'block';
//     }
// }

// // Funciones de zoom
// function zoomIn() {
//     zoomLevel += zoomStep;
//     updateZoom();
// }

// function zoomOut() {
//     zoomLevel = Math.max(1, zoomLevel - zoomStep); // Evita que el zoom sea menor que 1
//     updateZoom();
// }

// function updateZoom() {
//     updateTransform(); // Aplica tanto el zoom como la traslación
//     zoomSlider.value = zoomLevel * 100; // Actualiza el valor del control deslizante
//     zoomPercentage.textContent = `${Math.round(zoomLevel * 100)}%`; // Muestra el porcentaje de zoom
//     imageElement.style.cursor = zoomLevel > 1 ? 'grab' : 'default'; // Cambiar el cursor solo si hay zoom
// }

// // Aplicar transformación (escala + traslación) a la imagen
// function updateTransform() {
//     imageElement.style.transform = `scale(${zoomLevel}) translate(${translateX}px, ${translateY}px)`;
// }

// // Manejo de arrastre de la imagen
// function handleMouseDown(event) {
//     if (zoomLevel > 1) { // Solo permite arrastrar cuando se ha hecho zoom
//         isDragging = true;
//         startX = event.clientX;
//         startY = event.clientY;
//         imageElement.style.cursor = 'grabbing';
//     }
// }

// function handleMouseMove(event) {
//     if (isDragging) {
//         const deltaX = event.clientX - startX;
//         const deltaY = event.clientY - startY;
//         translateX += deltaX / zoomLevel; // Ajustar el movimiento según el nivel de zoom
//         translateY += deltaY / zoomLevel; // Ajustar el movimiento según el nivel de zoom
//         updateTransform(); // Aplica la nueva posición
//         startX = event.clientX;
//         startY = event.clientY;
//     }
// }

// function handleMouseUp() {
//     if (isDragging) {
//         isDragging = false;
//         imageElement.style.cursor = 'grab';
//     }
// }

// // Función para reproducir audio
// function playAudio(event) {
//     const audioFile = event.target.dataset.audio;
//     audioSource.src = `audio/${audioFile}`;
//     audioPlayer.load();
//     audioPlayer.play().catch(error => {
//         console.error('Error al reproducir el audio:', error);
//         alert('No se pudo reproducir el audio. Verifica el archivo.');
//     });
// }

// // Event listeners
// zoomSlider.addEventListener('input', (event) => {
//     zoomLevel = event.target.value / 100;
//     updateZoom();
// });

// prevButton.addEventListener('click', goToPreviousPage);
// nextButton.addEventListener('click', goToNextPage);
// goToPageButton.addEventListener('click', goToPage);
// zoomInButton.addEventListener('click', zoomIn);
// zoomOutButton.addEventListener('click', zoomOut);

// imageElement.addEventListener('mousedown', handleMouseDown);
// window.addEventListener('mousemove', handleMouseMove);
// window.addEventListener('mouseup', handleMouseUp);

// audioLinks.forEach(link => link.addEventListener('click', playAudio));

// updatePage();
// updateZoom(); // Inicializa el zoom al cargar


//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////


const totalPages = 197; // Número total de páginas del flipbook
let currentPage = 1;
let zoomLevel = 1; // Nivel de zoom inicial
const zoomStep = 0.1; // Incremento/decremento del zoom

const imageElement = document.getElementById('flipbook-image');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const pageNumberInput = document.getElementById('page-number');
const goToPageButton = document.getElementById('go-to-page');
const zoomInButton = document.getElementById('zoom-in');
const zoomOutButton = document.getElementById('zoom-out');
const zoomSlider = document.getElementById('zoom-slider');
const zoomPercentage = document.getElementById('zoom-percentage');
const errorMessage = document.getElementById('error-message');
const audioPlayer = document.getElementById('audio-player');
const audioSource = document.getElementById('audio-source');
const audioLinks = document.querySelectorAll('#audio-list a');
const pageInfo = document.getElementById('page-info'); // Nuevo elemento para mostrar la página actual

document.addEventListener('keydown', function(event) {
    // Cambiar a la siguiente página al presionar la tecla M
    if (event.key === 'm' || event.key === 'M') {
        nextPage();
    }

    // Regresar a la página anterior al presionar la tecla N
    if (event.key === 'n' || event.key === 'N') {
        previousPage();
    }

    // Cambiar el cursor al presionar la tecla H
    if (event.key === 'h' || event.key === 'H') {
        document.body.style.cursor = 'url(red-arrow-cursor.png), auto'; // Asegúrate de tener un cursor de flecha rojo
    }
});

// Funciones para avanzar y retroceder páginas
function nextPage() {
    // Lógica para avanzar a la siguiente página
}

function previousPage() {
    // Lógica para regresar a la página anterior
}


let isDragging = false;
let startX, startY, translateX = 0, translateY = 0;

// Actualizar la página del flipbook
function updatePage() {
    if (currentPage < 1) currentPage = 1;
    if (currentPage > totalPages) currentPage = totalPages;
    imageElement.src = `images/Pag_${currentPage}.png`;
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`; // Actualiza el número de página
    errorMessage.style.display = 'none';
    resetImagePosition(); // Reiniciar la posición de la imagen al cambiar de página
    console.log(`Página actual: ${currentPage}`);
}

// Resetear la posición de la imagen cuando se cambia de página
function resetImagePosition() {
    translateX = 0;
    translateY = 0;
    updateTransform();
}

// Funciones de navegación entre páginas
function goToPreviousPage() {
    if (currentPage > 1) {
        currentPage--;
        updatePage();
    }
}

function goToNextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        updatePage();
    }
}

function goToPage() {
    const pageNumber = parseInt(pageNumberInput.value, 10);
    if (pageNumber >= 1 && pageNumber <= totalPages) {
        currentPage = pageNumber;
        updatePage();
    } else {
        errorMessage.style.display = 'block';
    }
}

// Mejorar la funcionalidad del input para ir a la página al presionar "Enter"
pageNumberInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        goToPage();
    }
});

// Funciones de zoom
function zoomIn() {
    zoomLevel += zoomStep;
    updateZoom();
}

function zoomOut() {
    zoomLevel = Math.max(1, zoomLevel - zoomStep); // Evita que el zoom sea menor que 1
    updateZoom();
}

function updateZoom() {
    updateTransform(); // Aplica tanto el zoom como la traslación
    zoomSlider.value = zoomLevel * 100; // Actualiza el valor del control deslizante
    zoomPercentage.textContent = `${Math.round(zoomLevel * 100)}%`; // Muestra el porcentaje de zoom
    imageElement.style.cursor = zoomLevel > 1 ? 'grab' : 'default'; // Cambiar el cursor solo si hay zoom
}

// Aplicar transformación (escala + traslación) a la imagen
function updateTransform() {
    imageElement.style.transform = `scale(${zoomLevel}) translate(${translateX}px, ${translateY}px)`;
}

// Manejo de arrastre de la imagen
function handleMouseDown(event) {
    if (zoomLevel > 1) { // Solo permite arrastrar cuando se ha hecho zoom
        isDragging = true;
        startX = event.clientX;
        startY = event.clientY;
        imageElement.style.cursor = 'grabbing';
    }
}

function handleMouseMove(event) {
    if (isDragging) {
        const deltaX = event.clientX - startX;
        const deltaY = event.clientY - startY;
        translateX += deltaX / zoomLevel; // Ajustar el movimiento según el nivel de zoom
        translateY += deltaY / zoomLevel; // Ajustar el movimiento según el nivel de zoom
        updateTransform(); // Aplica la nueva posición
        startX = event.clientX;
        startY = event.clientY;
    }
}

function handleMouseUp() {
    if (isDragging) {
        isDragging = false;
        imageElement.style.cursor = 'grab';
    }
}

// Función para reproducir audio
function playAudio(event) {
    const audioFile = event.target.dataset.audio;
    audioSource.src = `audio/${audioFile}`;
    audioPlayer.load();
    audioPlayer.play().catch(error => {
        console.error('Error al reproducir el audio:', error);
        alert('No se pudo reproducir el audio. Verifica el archivo.');
    });
}



// Event listeners
zoomSlider.addEventListener('input', (event) => {
    zoomLevel = event.target.value / 100;
    updateZoom();
});

prevButton.addEventListener('click', goToPreviousPage);
nextButton.addEventListener('click', goToNextPage);
goToPageButton.addEventListener('click', goToPage);
zoomInButton.addEventListener('click', zoomIn);
zoomOutButton.addEventListener('click', zoomOut);

imageElement.addEventListener('mousedown', handleMouseDown);
window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('mouseup', handleMouseUp);

audioLinks.forEach(link => link.addEventListener('click', playAudio));

updatePage();
updateZoom(); // Inicializa el zoom al cargar


