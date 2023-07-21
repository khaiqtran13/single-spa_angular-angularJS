# Micro-Frontend with AngularJS / Angular

### Background

using `single-spa` we are able to create a micro-frontend running both Angular and AngularJS

### Development

1. go to `angular-app` and `npm run serve-spa` to serve the Angular App
2. in another terminal, run `http-server .` at the root
3. navigate to app at `http://localhost:8080/`

### Set-Up

1. go to `angular-app` and `npm run build-spa` to build the Angular App
2. within `angular-app` run `http-server dist/angular-app -p 8081 --cors`
3. in another terminal, run `http-server .` at the root
4. navigate to app at `http://localhost:8080/`
