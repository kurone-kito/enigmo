import { render } from 'ink';
import { WithProgress } from './components/WithProgress.js';

/**
 * The entry point of the application.
 * @returns The rendered component.
 */
export const start = () => render(<WithProgress />).waitUntilExit();
