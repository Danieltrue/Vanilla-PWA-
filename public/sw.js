self.addEventListener("install", (event) =>
  console.log(`[Service Worker] installing service worker ...`, event)
);

//activating service worker
self.addEventListener("activate", (event) => {
  console.log(`[Service Worker] Activating service worker ...`, event);
  return self.clients.claim();
});

//Fetch
self.addEventListener("fetch", (event) =>
  console.log("[Service Worker] Fetching Something ...", event)
);
