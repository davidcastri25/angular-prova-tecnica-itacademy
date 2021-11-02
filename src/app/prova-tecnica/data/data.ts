import { Field, Rover} from '../interfaces/interfaces';

/* Dades del camp */
export let field: Field = {
    width: 1,
    height: 1
}

/* Dades del rover */
export let rover: Rover = {
    initialPosition: {
        x: 0,
        y: 0
    },
    initialOrientation: 'N',
    finalPosition: {
        x: 0,
        y: 0
    },
    finalOrientation: 'N',
    validCommands: true
}