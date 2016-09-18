angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController', {
    url: '/tabs',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.presentacion', {
    url: '/Presentacion',
    views: {
      'tab4': {
        templateUrl: 'templates/presentacion.html',
        controller: 'presentacionCtrl'
      }
    }
  })

  .state('tabsController.piano', {
    url: '/Piano',
    views: {
      'tab5': {
        templateUrl: 'templates/piano.html',
        controller: 'pianoCtrl'
      }
    }
  })

  .state('tabsController.usuarios', {
    url: '/Usuarios',
    views: {
      'tab6': {
        templateUrl: 'templates/usuarios.html',
        controller: 'usuariosCtrl'
      }
    }
  })

  .state('login', {
    url: '/Login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

$urlRouterProvider.otherwise('/Login')

  

});