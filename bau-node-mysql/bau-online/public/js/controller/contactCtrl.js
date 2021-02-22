// ./public/js/controller/contactCtrl.js

// Alert
// alert("4.1 - Cheguei aqui ... ./public/js/contactCtrl.js!");
// console.log("4.1 - Cheguei aqui ... ./public/js/contactCtrl.js!");

angular.module('contact').controller('contactCtrl', function ($scope, $routeParams, $http) {
  
  $scope.contact = {};
  $scope.message = {};
  $scope.operation = 'Editando um contato existente ... !';

  var init = function (id) {
    var url = '/contacts/' + id;
    if (id) 
      $http.get(url).then(success, error);
    else 
      $scope.operation = 'Criando um novo contato ... !';
  }

  success = function (contact) {
    $scope.contact = contact.data;
  }

  error = function (error) {
    $scope.message = "Não foi possível realizar a operação ... !";
    // 28/12/2019 - 13:36 ... Eu acho que essa parte não está funcionando!
    console.log(error);
  }

  $scope.salvar = function (contact) {
    if (!contact._id) {
      criarNovoContato(contact);
    } else {
      atualizarContato(contact);
    }
  }

  var criarNovoContato = function (contact) {
    var url = '/contacts';
    $http.post(url, contact).then(listar, error);
  }

  const atualizarContato = function (contact) {
    var url = '/contacts/' + contact._id;
    $http.put(url, contact).then(listar, error);
  }

  var listar = function () {
    location.assign("#/contacts");
  }

  init($routeParams.id);

});

// Alert
// alert("4.2 - Cheguei aqui ... ./public/js/contactCtrl.js!");
// console.log("4.2 - Cheguei aqui ... ./public/js/contactCtrl.js!");


