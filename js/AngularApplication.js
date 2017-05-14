// create application instance
var angularApplication = angular.module('AngularApplication', []);

// CONFIGURE APPLICATION

// FACTORIES
// add product factory
angularApplication.factory('productFactory', ProductFactory);

// SERVICES
// add products service
angularApplication.service('productService', ProductService);

// CONTROLLERS
// add welcome controller
angularApplication.controller('WelcomeController', WelcomeController);
// add products controller
angularApplication.controller('ProductController', ProductController);


