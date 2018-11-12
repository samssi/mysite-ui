# mysite-ui

The responsive frontend of the application runs in the browser and uses React.js to render JSON to the selected view from MongoDB through mysite-rest service which provides content: static and otherwise. The backend consist of two services and they are built with express and node.js. The two services in question are mysite-rest (Content API) and mysite-auth (Authentication API).

# Changelog (Tags)

### 1.1
    * Upgrade all packages to latest versions
    * Revised ES formatting for new babel transpiler
    * Updated React router
    * History can't be accessed outside of React context anymore so axios configuration will use document.location.href instead of history push
    * Login/Logout revised to implement history push with the newer React implementation

### 1.0.1
    * Remove frontpage which was empty
    * Make the site more flowing. Login opens the application page and application page is moved first in the menu

### 1.0
    * First release version of the site
    * React.js rendered site
    * C64 styles
    * Separated dev/prod configuration with webpack