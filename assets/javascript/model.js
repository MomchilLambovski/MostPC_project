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


    return {
        addCustomer: function (firstName, secondName, email, password) {
            users.push(createCustomer(firstName, secondName, email, password));
            window.localStorage.setItem('users', JSON.stringify(users));
        },

        deleteCustomer: function (emailche) {
            var flag = false;
            function sameEmail() {
                for (var index = 0; index < users.length; index++) {
                    if (users[index].hasOwnProperty("email")) {
                        if (users[index].email === emailche) {
                            flag = true;
                        };
                    }
                }
                if (flag)
                    return true;
                else
                    return false;
            }
            var indexToDelete = users.findIndex(sameEmail);
            if (indexToDelete < 0) console.log("hu");
            if (indexToDelete >= 0) {
                users.splice(indexToDelete,1);
                console.log("Customer was deleted!");
                window.localStorage.setItem('users', JSON.stringify(users));
            }
            if (indexToDelete === null || indexToDelete === undefined) {
                console.log("User with this email doesn't exist!");
            }
            else {
                console.log("User with this email doesn't exist!");
            }
        },

        deleteAllCustomers: function () {
            users = [];
            window.localStorage.clear();
        }
    }
})();