export const settings = {
    // Add the routes you are going to use with your project and link them to a function that returns HTML
    validRoutes: [
        {
            'pathname': '/',
            'component': () => import("../pages/homepage.js")
        },
        {
            'pathname': '/page2',
            'component': () => import("../pages/page2.js")
        },
        {
            'pathname': '/page3',
            'component': () => import("../pages/page3.js")
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