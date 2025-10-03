import { useState } from 'react';

export function useLog() {
  const [logs, setLogs] = useState<string[]>([]);

  const logger = (log: string) => {
    setLogs((prev) => [log, ...prev]);
  };

  const resetLogs = () => setLogs([]);

  return {
    resetLogs,
    logger,
    logs,
  } as const;
}
