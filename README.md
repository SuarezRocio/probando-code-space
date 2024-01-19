# code-space
<ul>
<li>Variables y Constantes:

Se declaran variables y constantes para definir las dimensiones del tablero (tileSize, rows, columns), la nave (shipWidth, shipHeight, shipX, shipY), las imágenes de la nave y los alienígenas (shipImg, alienImg), la velocidad de movimiento de la nave y los alienígenas (shipVelocityX, alienVelocityX), entre otros.</li>

<li>Contexto del Canvas:

Se utiliza el contexto (context) del elemento Canvas para dibujar en el tablero. Se limpia el contexto en cada cuadro del juego para actualizar la representación del juego.
Objetos de Nave y Alienígenas:

Se definen objetos para representar la nave (ship) y los alienígenas (alienArray). Estos objetos incluyen propiedades como posición, tamaño, imagen y estado de vida.</li>

<li>Carga de Imágenes:

Se cargan imágenes para la nave y los alienígenas utilizando la clase Image de JavaScript (shipImg, alienImg). Se espera a que las imágenes se carguen antes de dibujarlas en el tablero.</li>

<li>Funciones de Inicialización:

window.onload: La función se ejecuta cuando la página web se ha cargado completamente. Aquí se establecen los elementos necesarios, se cargan las imágenes, se crea la matriz de alienígenas y se inicia el bucle principal del juego.</li>

<li>Bucle Principal del Juego:

requestAnimationFrame(update): Inicia el bucle principal del juego utilizando requestAnimationFrame. Este bucle se encarga de actualizar y renderizar el juego en cada cuadro.</li>

<li>Manejo de Eventos:

document.addEventListener("keydown", moveShip): Escucha eventos de teclado para mover la nave hacia la izquierda o derecha cuando se presionan las teclas de flecha.

document.addEventListener("keyup", shoot): Escucha eventos de teclado para disparar balas cuando se presiona la tecla de espacio.</li>

<li>Funciones de Actualización y Renderizado:

update(): Actualiza la lógica del juego en cada cuadro, incluyendo el movimiento de la nave, el movimiento de los alienígenas, la detección de colisiones y el manejo de las balas.

moveShip(e), shoot(e): Funciones que manejan el movimiento de la nave y el disparo de balas en respuesta a eventos de teclado.</li>

<li>Colisiones:

detectCollision(a, b): Función que detecta si hay colisión entre dos objetos rectangulares a y b. Se utiliza para detectar colisiones entre balas y alienígenas.</li>

<li>Funciones de Inicialización y Creación de Alienígenas:

createAliens(): Crea una matriz de alienígenas con posiciones iniciales y establece propiedades como imagen y estado de vida.</li>

<li>Condicionales de Juego:

Se utilizan condicionales para verificar si el juego ha terminado (gameOver) y para avanzar al siguiente nivel cuando se han derrotado todos los alienígenas en el nivel actual.</li>

<li>Dibujo en el Canvas:

Se utiliza el contexto del Canvas para dibujar elementos como la nave, los alienígenas, las balas y la puntuación en cada cuadro del juego.</li>
</ul>
