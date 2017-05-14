/**
 * Product business layer
 * @typedef {ProductService} ProductService
 * @param {ProductFactory} productFactory 
 */
function ProductService(productFactory) {

    //
    //Private and public field declarations
    //

    /**
     * factory field
     */
    var factory = null;


    //
    // Private and public method declarations
    //

    /**
     * public method get products, returns the available products
     * @returns {Product[]}
     */
    this.loadProducts = function(listener) {
        // call factory method with then/error
        factory.getProducts()
            .then(function (response) {
                var products = response.data;
                listener(products);
            }, function (error) {
                console.error('Unable to load products, will use default products');
                var products = factory.createDefaultProducts();
                listener(products);
            });
    };

    //
    // constructor of Products controller
    //
    (function (self, productFactory) {
        // log that the controller is called
        console.log("Products service constructor called");

        // assign productFactory object to this service's factory variable
        // we will use that object to fetch the products
        factory = productFactory;

    })(this, productFactory);

}