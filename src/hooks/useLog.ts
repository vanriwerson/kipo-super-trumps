import { useState } from 'react';

export function useLog() {
  const [logs, setLogs] = useState<string[]>([]);

  const logger = (log: string) => {
    setLogs((prev) => [log, ...prev]);
  };

  return {
    logger,
    logs,
  } as const;
}
