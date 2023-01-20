const STATIC_CACHE_NAME = 'static-data-v1';
const DYNAMIC_CACHE_NAME = 'dynamic-data-v1';

const STATIC_URLS = ['/', '/src/pages/start/gameLogo.gif'];

self.addEventListener('install', async event => {
  console.log('SW install');
  const cache = await caches.open(STATIC_CACHE_NAME);
  await cache.addAll(STATIC_URLS);
});

self.addEventListener('activate', async event => {
  console.log('SW activate');
  // Удаляем кэш с другими названиями (предыдущих версий)
  const cacheNames = await caches.keys();
  await Promise.all(
    cacheNames
      .filter(name => name !== STATIC_CACHE_NAME)
      .map(name => caches.delete(name))
  );
  return self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(cacheData(event.request));
});

const cacheData = async request => {
  await checkForLogout(request);
  const cachedRequest = await caches.match(request);
  return cachedRequest || (await networkFirst(request));
};

const networkFirst = async request => {
  const res = await fetch(request);
  await checkForGetUser(request, res);
  return res;
};

const checkForLogout = async request => {
  // При выходе удаляем динамический кэш (с текущим пользователем)
  const { pathname } = new URL(request.url);
  if (pathname?.includes('auth/logout')) {
    await caches.delete(DYNAMIC_CACHE_NAME);
  }
};

const checkForGetUser = async (request, res) => {
  // При запросе о текущем пользователе - сохраняем ответ в динамический кэш
  const cache = await caches.open(DYNAMIC_CACHE_NAME);
  const { pathname } = new URL(request.url);
  if (pathname?.includes('auth/user')) {
    await cache.put(request, res.clone());
  }
};
