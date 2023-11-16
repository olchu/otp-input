import { captureKeyboardListeners } from './captureKeyboardListeners';

export default function captureEscKeyListener(handler: () => void): () => void {
  return captureKeyboardListeners({ onEsc: handler });
}
