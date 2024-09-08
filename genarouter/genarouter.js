import { settings } from "./config/genarouter.config.js";

const basePath = settings.basePath;
const root = document.getElementById(settings.rootName);
const validRoutes = settings.validRoutes;

const handlePageLoad = () => {
    const currentRoute = window.location.pathname !== basePath ? window.location.pathname : '/';
    const route = validRoutes.find(route => route.pathname === currentRoute);
    if (route) {
        loadPage(route);
        genaLinkInit();
    }
};

const genaLinkInit = () => {
    const genaLinks = document.querySelectorAll(settings.customLinkElement);
    genaLinks.forEach(link => {
        const destination = link.getAttribute('to');
        link.addEventListener('click', () => navigateTo(destination));
    });
};

const navigateTo = (destination) => {
    window.history.pushState(null, '', destination);
    handlePageLoad();
};

const loadPage = async (route) => {
    try {
        const module = await route.component();
        const component = module.default;
        root.innerHTML = component.html;
        setMetadata(component.metadata);
    } catch (error) {
        console.error('Error loading page:', error);
        root.innerHTML = '<h1>404 - Page Not Found</h1>';
    }
};

const setMetadata = (metadata) => {
    metadata.title && (document.title = metadata.title);
    metadata.description && document.querySelector('meta[name="description"]').setAttribute('content', metadata.description);
};

addEventListener('DOMContentLoaded', () => handlePageLoad());
window.addEventListener('popstate', () => handlePageLoad());
