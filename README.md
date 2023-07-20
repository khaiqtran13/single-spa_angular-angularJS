# Micro-Frontend with AngularJS / Angular

### Background

using `single-spa` we are able to create a micro-frontend running both Angular and AngularJS

### Set-Up

1. go to `angular-app` and `npm run build:single-spa:angular-app` to build the Angular App
2. within `angular-app` run `http-server dist/angular-app -p 8081 --cors`
3. in another terminal, run `http-server .` at the root
4. navigate to app at `http://localhost:8080/`
