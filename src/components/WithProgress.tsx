import { ProgressBar } from '@inkjs/ui';
import type { FC } from 'react';
import { useGenerateSequences } from '../hooks/useGenerateSequences.mjs';
import { CellsSequence } from './CellsSequence.js';
import { Box } from 'ink';

export const WithProgress: FC = () => {
  const { progress, sequences } = useGenerateSequences();
  return (
    <>
      {!!sequences || (
        <Box width={20}>
          <ProgressBar value={progress} />
        </Box>
      )}
      {!!sequences && <CellsSequence sequences={sequences} />}
    </>
  );
};
