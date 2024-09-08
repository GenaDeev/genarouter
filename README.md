# 🌱 GenaRouter
## v.1.0.0

GenaRouter is a minimal Client Side Javascript router that allows to load different pages inside a root element.

### ⚠️ This proyect is experimental and should not be used in production builds.

## Setup
Clone this basic repository to your project and start editing the following files.

### ⚙️ genarouter.config.js
```js
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
```

### ⛓️‍💥 Links
By default GenaRouter uses the follwing custom HTML Element
```html
<gena-link>
```
In order to redirect to another GenaRouter page, you must specify the destination of the link using the ***to*** attribute.

```html
<gena-link to="/page2">
<!--The slash (/) is required -->
```

For the navigation to work, the destination specified in the ***to*** attribute must be declared in the **genarouter.config.js** file.

#### Change default element
##### ⚠️ Experimental feature
If you dislike the ```<gena-link>``` name, you can customize your own modifying the customLinkElement property in the **genarouter.config.js** file.

### 📖 Pages

#### Homepage
You dont need to use this pages, as they come built-in. To create your own just create a .js file with the follwing syntax and import it in the **genarouter.config.js** file.

```js
export default function homepage() {
    return {
        html: "<h1>This is the homepage</h1><gena-link to='/page2'>Go to page 2</gena-link><gena-link to='/page3'>Go to page 3</gena-link>",
        metadata: {
            title: "Homepage"
        }
    }
}
```

#### Page 2

```js
export default function page2() {
    return {
        html: "<h1>This is page 2</h1><gena-link to='/'>Go to homepage</gena-link><gena-link to='/page3'>Go to page 3</gena-link>",
        metadata: {
            title: "Page 2"
        }
    }
}
```

#### Page 3
```js
export default function page3() {
    return {
        html: "<h1>This is page 3</h1><gena-link to='/'>Go to homepage</gena-link><gena-link to='/page2'>Go to page 2</gena-link>",
        metadata: {
            title: "Page 3"
        }
    }
}
```

### 👤 Metadata
Javascript object with the meta information of each page, if it is undefined, the router will use the tags on the index.html file.

In this version, Metadata object only supports **title** and ***description**. More features comming soon

```js
metadata: {
    title: "Page 3",
    description: "This is page 3"
}
```

## 🖥️Server config

To make GenaRouter work, all the requests sent to your server should be rewritten to '/' given that its the only static page we have.

### ▲ Vercel
#### vercel.json
```json
{
    "rewrites":  [
      {"source": "/(.*)", "destination": "/"}
    ]
}
```

### 🪶 Apache
#### .htaccess
```htaccess
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ / [L,QSA]
```

### 🟩 Nginx
#### yourproject.conf

```conf
location / {
    try_files $uri $uri/ /;
}
```

# Developed by 2024 ©️ GenaDeev
### All rights reserved

![](https://raw.githubusercontent.com/GenaDeev/ComiDolar/main/public/assets/img/genadev-v-nobg-1.webp)