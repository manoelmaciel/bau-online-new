// ./public/js/controller/contactsCtrl.js

// Alert
// alert("3.1 - Cheguei aqui ... ./public/js/contactsCtrl.js!");
// console.log("3.1 - Frontend na veia ... Sai no navegador!");
// console.log("3.1 - Cheguei aqui ... ./public/js/contactsCtrl.js!");

angular.module("contact").controller("contactsCtrl", function ($scope, $http) {

  $scope.contacts = [];
  $scope.message = {};

  $scope.remove = function (contact) {
    var url = '/contacts/' + contact._id;
    $http.delete(url).then(loadContacts, error);
  }

  var loadContacts = function () {
    // console.log ("Load contacts ... !");
    $http.get("/contacts").then(success, error);
  }

  var success = function (contact) {
    $scope.contacts = contact.data;
    // $scope.message.text = "Teste ... !"
  }

  var error = function (error) {
    console.log(error);
  }

  loadContacts();

});

// Alert
// alert("3.2 - Cheguei aqui ... ./public/js/contactsCtrl.js!");
// console.log("3.1 - Cheguei aqui ... ./public/js/contactsCtrl.js!");


