const IS_RUNNING_ON_SERVER = typeof window === 'undefined';

async function initMocks() {
  if (IS_RUNNING_ON_SERVER) {
    const { server } = await import('./server');
    server.listen({ onUnhandledRequest: 'warn' });
  } else {
    const { worker } = await import('./browser');
    worker.start({ onUnhandledRequest: 'warn' });
  }
}

initMocks();

export {};
