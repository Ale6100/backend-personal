import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Obtener la ruta del archivo actual
const currentFilePath = fileURLToPath(import.meta.url);
const currentDirPath = dirname(currentFilePath);

export default currentDirPath;
