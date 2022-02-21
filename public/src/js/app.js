let deferedPrompt;

const registerSW = () =>
  navigator.serviceWorker
    .register("/sw.js")
    .then(() => console.log("Service Worker Registered"));

//Register Service worker if available
if ("serviceWorker" in navigator) registerSW();

window.addEventListener("beforeinstallprompt", (evt) => {
  console.log("beforeinstallprompt fired");
  evt.preventDefault();
  deferedPrompt = evt;
  return false;
});
