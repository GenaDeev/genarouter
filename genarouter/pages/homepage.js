export default {
    html: `
  <div class="container">
    <h1>This is the homepage</h1>
    <p>Use these links to test navigation! ⬇️</p>
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
    html: "<h1>This is the homepage</h1>< gena-link to='/page2' >Go to page 2</ gena-link >< gena-link to='/page3' >Go to page 3</ gena-link> ",
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
    html: "<h1>This is page 2</h1>< gena-link to='/'" >Go to homepage</ gena-link >< gena-link to='/page3' >Go to page 3</ gena-link >",
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
    html: "<h1>This is page 3</h1>< gena-link to='/'" >Go to homepage</ gena-link >< gena-link to='/page2' >Go to page 2</ gena-link >",
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
