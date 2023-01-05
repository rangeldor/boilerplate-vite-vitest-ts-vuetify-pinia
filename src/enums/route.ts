export enum RouteName {
  NotFound = 'NotFound',
  SignIn = 'SignIn',
  Home = 'Home',
  CreditQueue = 'CreditQueue',
  FeeQueue = 'FeeQueue',
  FeeQueueDetail = 'FeeQueueDetail',
  Account = 'Account'
}

export enum RoutePath {
  NotFound = '/:pathMatch(.*)*',
  SignIn = '/signin',
  Home = '/',
  CreditQueue = '/credit-queue',
  FeeQueue = '/fee-queue',
  FeeQueueDetail = '/fee-queue-detail',
  Account = '/account'
}

export enum RouteBrazilianName {
  NotFound = 'Não encontrado',
  SignIn = 'Login',
  Home = 'Principal',
  CreditQueue = 'Fila de Crédito',
  FeeQueue = 'Fila de Taxa',
  FeeQueueDetail = 'Detalhes',
  Account = 'Conta'
}
