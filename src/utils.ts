import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Obtener la ruta del archivo actual
const currentFilePath = fileURLToPath(import.meta.url);
const currentDirPath = dirname(currentFilePath);

export const waitFor = (time: number): Promise<void> => { // Hace que tu código asincrónico espere un tiempo (en milisegundos) que le pases como parámetro antes de continuar la ejecución
    return new Promise(resolve => setTimeout(resolve, time))
}

export default currentDirPath;
