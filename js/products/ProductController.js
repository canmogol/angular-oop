/**
 * @typedef {ProductController} ProductController
 * @param {Scope} $scope angular scope object
 * @param {ProductService} productService 
 */
function ProductController($scope, productService) {

    //
    //Private and public field declarations
    //


    /**
     * View model object, will be accessed from UI
     * @typedef {Object} ViewModel
     * @property {Product[]} products
     */
    var ViewModel = {
        products : []
    };


    //
    // Private and public method declarations
    //


    /**
     * public method products load listener 
     * @param {Product[]} products list
     * @returns {Void|undefined}
     */
    function productLoadListener(products) {
        ViewModel.products = products;
    }

    /**
     * public method load products
     * @returns {Void|undefined}
     */
    this.loadProducts = function() {
        this.productService.loadProducts(productLoadListener);
    };

    //
    // constructor of Products controller
    //
    (function (self, $scope, productService) {
        // log that the controller is called
        console.log("Products controller constructor called");

        // set productService variable to ProductService object instance
        // we will use this instance to get the products
        self.productService = productService;

        // assign this controller to scope's controller variable
        $scope.controller = self;

        // assign ViewModel to scope
        $scope.ViewModel = ViewModel;

    })(this, $scope, productService);

}