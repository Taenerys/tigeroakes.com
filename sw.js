const CACHE = 'v2';

function precache() {
	return caches.open(CACHE).then((cache) => {
		cache.addAll([
			'./images/contact/white-github.svg',
			'./images/contact/white-twitter.svg',
			'./images/contact/white-linkedin.svg',
			'./images/profile-4x.jpg',
			'./images/hero.jpg',
			'./images/big-island-buses/logo4x.png',
			'./images/latch-on/logo4x.png',
			'./images/mbta-energy/logo4x.png',
			'./images/oml-contracting/logo.svg',
			'./images/ubc-farm/logo4x.png',
			'./images/unity-polygon/logo4x.png',
			'./images/bit-ball/logo4x.png',
			'./images/pass-the-bomb/logo.svg',
			'./projects/big-island-buses/',
			'./projects/latch-on/',
			'./projects/mbta-energy/',
			'./projects/oml-contracting/',
			'./projects/ubc-farm/',
			'./projects/unity-polygon2d-editor/',
		]);
		return cache.addAll([
			'./',
			'./projects/',
			'./resume/',
			'./contact/',
		]);
	});
}

function downloadAndSave(request, cache) {
	return fetch(request).then((response) => {
		if (response.ok && !response.url.startsWith('data:')) {
			cache.put(request, response.clone());
		}

		return response;
	});
}

function fromCacheAndUpdate(request) {
	return caches.open(CACHE)
		.then(cache => cache.match(request).then((response) => {
			const networkResponse = downloadAndSave(request, cache);
			return response || networkResponse;
		}));
}

self.addEventListener('install', (e) => {
	console.log('The service worker is being installed');
	e.waitUntil(precache());
});

self.addEventListener('fetch', e => e.respondWith(fromCacheAndUpdate(e.request)));
