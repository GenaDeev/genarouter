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
export default {
    html: `
  <div class="container">
    <h1>This is the homepage</h1>
    <p>Use this links to test navigation! ⬇️</p>
    <div class="links">
      <gena-link to='/page2'>Go to page 2</gena-link>
      <gena-link to='/page3'>Go to page 3</gena-link>
    </div>
    <section>
      <h2>⚠️ This project is experimental and should not be used in production builds.</h2>
      <h3>Setup</h3>
      <p>Clone this basic repository to your project and start editing the following files.</p>
      <h4>⚙️ genarouter.config.js</h4>
      <pre>
				<code>
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

    // Set a custom HTML element name for the link tags
    // link tags are used to navigate to another GenaRouter page
    // Default: < gena-link >
    customLinkElement: 'gena-link', // without < >

    // The URL that will be treated like '/'
    // Leave it undefined if your application is in the main root
    basePath: undefined,

    // The ID of the HTML element you want to create the router on.
    // Default: gena-root
    rootName: 'gena-root'
}
                        
					</code>
				</pre>
      <h4>⛓️‍💥 Links</h4>
      <p>By default, GenaRouter uses the following custom HTML Element:</p>
      <pre>
					<code>&lt;gena-link&gt;</code>
				</pre>
      <p>To redirect to another GenaRouter page, specify the destination of the link using the <strong>to</strong> attribute. </p>
      <pre>
					<code>&lt;gena-link to="/page2"&gt;</code>
				</pre>
      <p>For the navigation to work, the destination specified in the <strong>to</strong> attribute must be declared in the <strong>genarouter.config.js</strong> file. </p>
      <h4>Change Default Element</h4>
      <p>
        <strong>⚠️ Experimental Feature</strong>
      </p>
      <p>If you dislike the <code>&lt;gena-link&gt;</code> name, you can customize your own by modifying the <code>customLinkElement</code> property in the <strong>genarouter.config.js</strong> file. </p>
      <h4>📖 Pages</h4>
      <h5>Homepage</h5>
      <pre>
					<code>
export default {
    html: "&lt;h1&gt;This is the homepage&lt;/h1&gt;&lt;gena-link to='/page2'&gt;Go to page 2&lt;/gena-link&gt;&lt;gena-link to='/page3'&gt;Go to page 3&lt;/gena-link&gt;",
    metadata: {
        title: "Homepage"
    }
}
                        </code>
				</pre>
      <h5>Page 2</h5>
      <pre>
					<code>
export default {
    html: "&lt;h1&gt;This is page 2&lt;/h1&gt;&lt;gena-link to='/'&gt;Go to homepage&lt;/gena-link&gt;&lt;gena-link to='/page3'&gt;Go to page 3&lt;/gena-link&gt;",
    metadata: {
        title: "Page 2"
    }
}
                        </code>
				</pre>
      <h5>Page 3</h5>
      <pre>
					<code>
export default {
    html: "&lt;h1&gt;This is page 3&lt;/h1&gt;&lt;gena-link to='/'&gt;Go to homepage&lt;/gena-link&gt;&lt;gena-link to='/page2'&gt;Go to page 2&lt;/gena-link&gt;",
    metadata: {
        title: "Page 3"
    }
}
                        </code>
				</pre>
      <h4>👤 Metadata</h4>
      <p>JavaScript object with the meta information of each page. If it is undefined, the router will use the tags on the index.html file.</p>
      <pre>
					<code>
metadata: {
    title: "Page 3",
    description: "This is page 3"
}
                        </code>
				</pre>
      <h4>🖥️ Server Config</h4>
      <p>To make GenaRouter work, all the requests sent to your server should be rewritten to '/' given that it's the only static page we have.</p>
      <h5>▲ Vercel</h5>
      <pre>
					<code>
{
    "rewrites":  [
      {"source": "/(.*)", "destination": "/"}
    ]
}
                        </code>
				</pre>
      <h5>🪶 Apache</h5>
      <pre>
					<code>
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ / [L,QSA]
                        </code>
				</pre>
      <h5>🟩 Nginx</h5>
      <pre>
					<code>
location / {
    try_files $uri $uri/ /;
}
                        </code>
				</pre>
    </section>
  </div>
    `,
}

```

#### Page 2

```js
export default {
    html: "<h1>This is page 2</h1><gena-link to='/'>Go to homepage</gena-link><gena-link to='/page3'>Go to page 3</gena-link>",
    metadata: {
        title: "GenaRouter - Page 2"
    }
}
```

#### Page 3
```js
export default {
    html: "<h1>This is page 3</h1><gena-link to='/'>Go to homepage</gena-link><gena-link to='/page2'>Go to page 2</gena-link>",
    metadata: {
        title: "GenaRouter - Page 3"
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