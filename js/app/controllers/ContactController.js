function ContactController() {
  var vm = this;

  vm.name = "Ann";
  vm.email = "ann@example.com";
  vm.phone = "123-456-7890";
 
  this.changeName = function() {
    vm.name = 'Ann Lee';
  };
}

angular
  .module('app')
  .controller('ContactController', ContactController);