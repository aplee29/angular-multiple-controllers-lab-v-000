function StaffController() {
  var vm = this;

  vm.name = "Rob";
  vm.email = "rob@example.com";
  vm.phone = "987-654-3210";
}

angular
  .module('app')
  .controller('StaffController', StaffController);