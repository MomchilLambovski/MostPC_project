var Store = (function () {

    var users = JSON.parse(window.localStorage.getItem('users')) || [];
    // var products = JSON.parse(window.localStorage.getItem('products'));

    function Customer(firstName, secondName, email, password) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.email = email;
        this.password = password;
    }

    function Admin(firstName, secondName, email, password) {
        Customer.call(this, firstName, secondName, email, password);
        this.status = 'admin';
    }

    function createCustomer(firstName, secondName, email, password) {
        return new Customer(firstName, secondName, email, password);
    }

    function createAdmin(firstName, secondName, email, password) {
        return new Admin(firstName, secondName, email, password);
    }

    var shop = JSON.parse(window.localStorage.getItem('shop')) || [];

    function Product(name, price, imageURL, type) {
        this.name = name;
        this.price = price;
        this.imageURL = imageURL;
        this.type = type;
    }

    // function Laptop (name, price, imageURL){
    //     Store.createProduct(this, name, price, imageURL);

    // }


    return {

        createProduct: function (name, price, imageURL, type) {
            switch (type) {
                case "laptop":
                    if (!(Store.getProductByName(name))) {
                        shop.push(new Product(name, price, imageURL, type));
                        window.localStorage.setItem('shop', JSON.stringify(shop));
                    }
                    break;
                case "tablet":
                    shop.push(new Product(name, price, imageURL, type));
                    window.localStorage.setItem('shop', JSON.stringify(shop));
                    break;
                case "smartphone":
                    shop.push(new Product(name, price, imageURL, type));
                    window.localStorage.setItem('shop', JSON.stringify(shop));
                    break;
                case "server":
                    shop.push(new Product(name, price, imageURL, type));
                    window.localStorage.setItem('shop', JSON.stringify(shop));
                    break;
                case "component":
                    shop.push(new Product(name, price, imageURL, type));
                    window.localStorage.setItem('shop', JSON.stringify(shop));
                    break;
            }
        },

        deleteProduct: function (name) {
            Store.sameEmail(name);
            var indexToDelete = shop.findIndex(Store.sameEmail);
            if (indexToDelete >= 0) {
                shop.splice(indexToDelete, 1);
                console.log("Product was deleted!");
                window.localStorage.setItem('shop', JSON.stringify(shop));
            } else {
                if (indexToDelete === null || indexToDelete === undefined) {
                    console.log("Product with this name doesn't exist!");
                }
                else {
                    console.log("Product with this name doesn't exist!");
                }
            }
        },

        getProductByName: function (name) {
            for (var index = 0; index < shop.length; index++) {
                if (shop[index].hasOwnProperty("name")) {
                    if (shop[index].name === name) {
                        return shop[index];
                    };
                }
            }
        },

        getAllProducts: function () {
            return JSON.parse(window.localStorage.getItem('shop'));
        },


        deleteAllProducts: function () {
            shop = [];
            window.localStorage.setItem('shop', JSON.stringify(shop));
        },

        checkLoggedIn: function () {
            if (sessionStorage.activeUser) {
                return true;
            } else {
                return false;
            }
        },

        getLoggedUser: function () {
            return activeUser = JSON.parse(sessionStorage.getItem('activeUser'));
        },

        sameEmail: function (emailche) {
            for (var index = 0; index < users.length; index++) {
                if (users[index].hasOwnProperty("email")) {
                    if (users[index].email === emailche) {
                        return true;
                    };
                }
            }
            return false;
        },

        samePassword: function (password) {
            for (var index = 0; index < users.length; index++) {
                if (users[index].hasOwnProperty("password")) {
                    if (users[index].password === password) {
                        return true;
                    };
                }
            }
            return false;
        },

        addCustomer: function (firstName, secondName, email, password) {
            users.push(createCustomer(firstName, secondName, email, password));
            window.localStorage.setItem('users', JSON.stringify(users));
        },

        deleteCustomer: function (emailche) {
            Store.sameEmail(emailche);
            var indexToDelete = users.findIndex(Store.sameEmail);
            if (indexToDelete >= 0) {
                users.splice(indexToDelete, 1);
                console.log("Customer was deleted!");
                window.localStorage.setItem('users', JSON.stringify(users));
            } else {
                if (indexToDelete === null || indexToDelete === undefined) {
                    console.log("User with this email doesn't exist!");
                }
                else {
                    console.log("User with this email doesn't exist!");
                }
            }
        },

        getCustomer: function (email) {
            for (var index = 0; index < users.length; index++) {
                if (users[index].hasOwnProperty("email")) {
                    if (users[index].email === email) {
                        return users[index];
                    };
                }
            }
        },


        deleteAllCustomers: function () {
            users = [];
            window.localStorage.setItem('users', JSON.stringify(users));
        }
    }
})();