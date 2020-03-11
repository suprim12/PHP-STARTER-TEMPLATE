if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then((res) => console.log(`Service worker registred`))
        .catch((err) => console.error(`Error service worker ${err}`));
} 