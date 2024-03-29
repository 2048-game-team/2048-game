const STATIC_CACHE_NAME = 'static-data-v2';
const DYNAMIC_CACHE_NAME = 'dynamic-data-v2';

const STATIC_URLS = [
  '/',
  '/teamPhotos/dmitry.jpg',
  '/teamPhotos/ekaterina.jpg',
  '/teamPhotos/nikolay.jpg',
  '/teamPhotos/noimage.jpg',
  '/sounds/background.mp3',
  '/sounds/click.mp3',
  '/sounds/finish.wav',
];

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
  // При выходе и при обновлении профиля удаляем динамический кэш (с текущим пользователем)
  const { pathname } = new URL(request.url);
  if (
    pathname?.includes('auth/logout') ||
    pathname?.includes('/user/profile')
  ) {
    await caches.delete(DYNAMIC_CACHE_NAME);
  }
};

const checkForGetUser = async (request, res) => {
  // При запросе о текущем пользователе - сохраняем ответ в динамический кэш
  const cache = await caches.open(DYNAMIC_CACHE_NAME);
  const { pathname } = new URL(request.url);
  if (pathname?.includes('auth/user') && res.status === 200) {
    await cache.put(request, res.clone());
  }
};
