import { settings } from "./config/genarouter.config.js";

const basePath = settings.basePath;
const root = document.getElementById(settings.rootName);
const validRoutes = settings.validRoutes;

const handlePageLoad = () => {
    const currentRoute = window.location.pathname !== basePath ? window.location.pathname : '/';
    console.log('Current route:', currentRoute);
    const route = validRoutes.find(route => route.pathname === currentRoute);
    if (route) {
        loadPage(route);
        genaLinkInit();
    } else {
        console.error('Route not found:', currentRoute);
    }
};

const genaLinkInit = () => {
    const genaLinks = document.querySelectorAll(settings.customLinkElement);
    console.log('Gena links:', genaLinks); // Debugging line
    genaLinks.forEach(link => {
        const destination = link.getAttribute('to');
        console.log('Setting up click for:', destination); // Debugging line
        link.addEventListener('click', () => navigateTo(destination));
    });
};

const navigateTo = (destination) => {
    console.log('Navigating to:', destination); // Debugging line
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
    if (metadata) {
        if (metadata.title) {
            document.title = metadata.title;
        }
        if (metadata.description) {
            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) {
                metaDescription.setAttribute('content', metadata.description);
            }
        }
    }
};

addEventListener('DOMContentLoaded', () => handlePageLoad());
window.addEventListener('popstate', () => handlePageLoad());