console.log("App.js loaded");

// set server host
routemamba.registerServerHost('http://127.0.0.1:5500/');

// set meta content
routemamba.registerMetaUrl('/include/meta.html');

routemamba.register_http_routes([
    {
        method: "GET",
        meta_loader: true,
        content_url: "/components/home.component.html",
        
        data: {},
        preloader: '<h1>Loaading home</h1>',
        error_content: '<h1>Error here</h1>',
        http_url_change: false,
        http_url: "/"
      },
      {
        method: "GET",
        meta_loader: true,
        content_url: "/components/home.component.html",
        
        data: {},
        preloader: '<h1>Loaading home</h1>',
        error_content: '<h1>Error here</h1>',
        http_url_change: false,
        http_url: "/index.html"
      },
      {
        method: "GET",
        meta_loader: true,
        content_url: "/components/features.component.html",
        
        data: {},
        preloader: '<h1>Loading Features</h1>',
        error_content: '<h1>Error here</h1>',
        http_url_change: false,
        http_url: "/features.html"
      },
      {
        method: "GET",
        meta_loader: true,
        content_url: "/components/pricing.component.html",
        
        data: {},
        preloader: '<h1>Loading Pricing</h1>',
        error_content: '<h1>Error here</h1>',
        http_url_change: false,
        http_url: "/pricing.html"
      },
]);

routemamba.register_routes_headers([
    {
        content_url: "/components/header-footer/header.component.html",
        
        preloader: 'loading...',
        error_content: 'error',
        http_url: ["/", "/index.html", "/features.html", "/pricing.html"]
    },
]);

routemamba.register_routes_footers([
    {
        content_url: "/components/header-footer/footer.component.html",

        preloader: 'loading...',
        error_content: 'error',
        http_url: ["/", "/index.html", "/features.html", "/pricing.html"]
    },
]);

routemamba.render();