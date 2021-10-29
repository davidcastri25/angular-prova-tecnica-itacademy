# Prueba técnica de IT Academy - BarcelonaActiva
Se necesita un programa que valide las instrucciones que serán utilizadas por un Rover en Marte.

Un Rover ocupa un cuadrado y puede recibir las siguientes ordenes A (Avanzar), L (Izquierda), R (Derecha).

El programa tiene que validar que el Rover queda dentro del cuadrado y debe indicarnos su orientación final (N, S, E, W).

El programa recibirá las dimensiones del cuadrado (anchura y altura) y se asume que las coordenadas (0, 0) indican la esquina de abajo a la izquierda.

Adicionalmente recibirá las coordenadas del rover y su orientacion inicial (N, S, E, W).

También recibirá un conjunto de órdenes, por ejemplo 'AALAARALA'. No hay límite de órdenes, se puede introducir 1 o 40 o 100 o 1000.

Se asume que no hay ningún obstáculo dentro del cuadro.

El programa debe validar si todas las órdenes pueden ser ejecutadas dentro del cuadrado y debe devolver true or false en función de si los comandos son válidos.

Debe devolver también la orientación y coordenadas finales del Rover.

La solución debe ser ejecutada en una única instrucción npm.

# Node version
16.3.0