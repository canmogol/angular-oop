/**
 * Product factory
 * @typedef {ProductFactory} ProductFactory
 * @param {Http} $http angular http object
 */
function ProductFactory($http) {

    //
    //Private and public field declarations
    //

    /**
     * urlBase field
     */
    var urlBase = 'js/products/products.json';


    //
    // Private and public method declarations
    //


    /**
     * private method createProduct
     * @param {string} name product name
     * @param {number} price product price
     * @returns {ProductModel}
     */
    function createProduct(name, price) {
        var product = new ProductModel(name, price);
        return product;
    }


   /**
     * public method to create and add default products
     * @returns {ProductModel[]}
     */
    this.createDefaultProducts = function () {
        var products = [];
        products.push(createProduct('Htc One', 299));
        products.push(createProduct('iPhone 6', 649));
        products.push(createProduct('Samsung S7', 599));
        return products;
    }

    /**
     * public method get products, returns the available products
     * @returns {ProductModel[]}
     */
    this.getProducts = function () {
        console.log("Product Factory will call server to get products");
        return this.http.get(urlBase);
    };

    /**
    * public method get products, returns the product with id
    * @param {Number} id product id
    * @returns {ProductModel}
    */
    this.findProduct = function (id) {
        return this.http.get(urlBase + '/' + id);
    };

    /**
    * public method create product, creates product with model
    * @param {ProductModel} productModel
    * @returns {ProductModel}
    */
    this.createProduct = function (productModel) {
        return this.http.post(urlBase, productModel);
    };

    /**
    * public method update product, updates product with model
    * @param {ProductModel} productModel
    * @returns {ProductModel}
    */
    this.updateProduct = function (productModel) {
        return this.http.put(urlBase + '/' + productModel.ID, productModel)
    };

    /**
    * public method delete product, deletes product with id
    * @param {Number} id product id
    * @returns {ProductModel}
    */
    this.deleteProduct = function (id) {
        return this.http.delete(urlBase + '/' + id);
    };


    //
    // constructor of Products controller
    //
    (function (self, $http) {
        // log that the controller is called
        console.log("Product Factory constructor called, "+
            "will not call server here since we don't need products yet.");

        // assign http object to this Factory's http variable
        // we will use that object to fetch the products
        self.http = $http;

    })(this, $http);


    // return facory instance, 
    // angular needs this returned object
    return this;

}