/* Interfaz para el campo */
export interface Field {
    width: number;
    height: number;
}

/* Interfaz para el rover */
export interface Rover {
    initialPosition: RoverPosition;
    initialOrientation: 'N' | 'S' | 'E' | 'W';
    finalPosition?: RoverPosition;
    finalOrientation?: 'N' | 'S' | 'E' | 'W';
}

/* Interfaz para la posición del rover */
export interface RoverPosition {
    x: number;
    y: number;
}