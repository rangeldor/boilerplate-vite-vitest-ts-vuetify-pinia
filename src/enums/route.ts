export enum RouteName {
    NotFound = 'NotFound',
    SignIn = 'SignIn',
    Home = 'Home'
  }
  
  export enum RoutePath {
    NotFound = '/:pathMatch(.*)*',
    SignIn = '/signin',
    Home = '/'
  }