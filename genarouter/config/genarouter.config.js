// Import the correspondig pages here
import homepage from "../pages/homepage.js";
import page2 from "../pages/page2.js";
import page3 from "../pages/page3.js";

export const settings = {
    // Add the routes you are going to use with your project and link them to a function that returns HTML
    validRoutes : [
        // Genarouter comes with some built-in basic pages
        {
            'pathname': '/',
            'component': homepage
        },
        {
            'pathname': '/page2',
            'component': page2
        },
        {
            'pathname': '/page3',
            'component': page3
        },
    ],

    // Set a custom html element name for the link tags
    // link tags are used to navigate to another GenaRouter page
    // Default: <gena-link>
    customLinkElement: 'gena-link', //without < >

    // The url that will be treated like '/'
    // Leave it undefined if your application is in the main root
    basePath: undefined,

    // The ID of the html element you want to create the router on.
    // Default: gena-root
    rootName: 'gena-root'
}