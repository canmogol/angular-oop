/**
 * @typedef {WelcomeController} WelcomeController
 * @property {string} $scope angular scope object
 */
function WelcomeController($scope) {

    //
    //Private and public field declarations
    //

    /**
     * private field
     */
    var privateField = 'private value';

    /**
     * public field
     */
    this.publicField = 'public value'; 

    //
    // Private and public method declarations
    //

    /**
     * private method
     * @returns {string}
     */
    function privateMethod() {
    	return privateField;
    }

    /**
     * public method
     * @returns {Void|undefined}
     */
    this.publicMethod = function() {
        return this.publicField;
    };

    /**
     * public method example
     * @param {number} age any positive number
     * @returns {Void|undefined}
     */
    this.example = function(age) {
        console.log("public method, age: " + age);
    };

    /**
     * public method example
     * @param {number} age any positive number
     * @returns {Void|undefined}
     */
    this.sayHi = function() {
        $scope.message = 'Hi there! ' + (new Date().toISOString());
    };

    //
    // constructor of welcome controller
    //
    (function (self, $scope) {
        // log that the controller is called
        console.log("Welcome constructor called, will add welcome message to scope");

        // set message variable to this string
        $scope.message = 'welcome to angular project, '+
        'private method returns: "' + privateMethod() + '", ' + 
        'public method returns: "' + self.publicMethod() + '"';

        // assign this controller to scope's controller variable
        // see the 'Say Hi' button's ng-click directive in the 'index.html'
        $scope.controller = self;

    })(this, $scope);

}