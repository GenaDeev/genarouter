import { settings } from "./config/genarouter.config.js";

const basePath = settings.basePath;
const root = document.getElementById(settings.rootName);
const validRoutes = settings.validRoutes;

const handlePageLoad = () => {
    const currentRoute = window.location.pathname !== basePath ? window.location.pathname : '/';
    console.log('Navigated to ', currentRoute);
    validRoutes.forEach(route => {
        if (route.pathname === currentRoute) {
            loadPage(route)
            genaLinkInit()
        }
    });
};

const genaLinkInit = () => {
    const genaLinks = document.querySelectorAll(settings.customLinkElement);
    genaLinks.forEach(link => {
        const destination = link.getAttribute('to');
        link.addEventListener('click', () => navigateTo(destination))
    });
}

const navigateTo = (destination) => {
    window.history.pushState(null, '', destination);
    handlePageLoad();
};

const loadPage = (route) => {
    root.innerHTML = route.component().html;
    setMetadata(route.component().metadata)
}

const setMetadata = (metadata) => {
    metadata.title && (document.title = metadata.title);
    metadata.description && document.querySelector('meta[name="description"]').setAttribute('content', metadata.description);
}

addEventListener('DOMContentLoaded', () => handlePageLoad());
window.addEventListener('popstate', () => handlePageLoad());