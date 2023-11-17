const getClient = async (event) => {
  if (!event.clientId) return null;
  const client = await self.clients.get(event.clientId);
  return client;
};

self.addEventListener('fetch', (event) => {
  const { url } = event.request;
  if (!new URL(url).pathname.startsWith('/_next/image')) return;

  event.respondWith(
    (async () => {
      const response = await fetch(event.request);
      const cl = response.headers.get('content-length');
      if (!cl) return response;
      const client = await getClient(event);
      client?.postMessage({
        bytes: cl,
        url: event.request.url,
      });
      return response;
    })()
  );
});
