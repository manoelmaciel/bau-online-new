// ./public/js/route/configRoute.js

// console.log
// console.log("2.1 - Cheguei aqui ... ./public/js/configRoute.js!");

angular.module('contact').config(function ($routeProvider, $locationProvider) {

  $locationProvider.hashPrefix('');

  $routeProvider.when('/musicas', {
    templateUrl: 'partials/contacts.html',
    controller: 'contactsCtrl'
  });

  $routeProvider.when('/musica', {
    templateUrl: 'partials/contact.html',
    controller: 'contactCtrl'
  });

  $routeProvider.when('/contact/:id', {
    templateUrl: 'partials/contact.html',
    controller: 'contactCtrl'
  });
  
  $routeProvider.otherwise({ redirectTo: '/musicas' });

});

// console.log
// console.log("2.2 - Cheguei aqui ... ./public/js/configRoute.js!");


