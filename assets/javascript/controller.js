function productListVisibility(show) {
    if (show) {
        document.getElementById('productList').style.display = 'block';
    } else {
        document.getElementById('productList').style.display = 'none';
    }
}

window.addEventListener('load', function () {
    productListVisibility(false);
}, false);

function getElement(element) {
    return getElementById(element);
}
function hideMain1And2() {
    var main1 = document.getElementById('main-wrapper1');
    var main2 = document.getElementById('main-wrapper2');
    main1.style.display = 'none';
    main2.style.display = 'none';
}

function hideMain1() {
    var x = document.getElementById('main-wrapper1');
    var y = document.getElementById('main-wrapper2');
    var z = document.getElementById('acc-login');
    x.style.display = 'none';
    if (z.style.display = 'none') z.style.display = 'block';
    y.style.display = 'block';
}

function displayProfile() {
    var x = document.getElementById('profile-page');
    x.style.display = 'block';
    event.preventDefault();
};

function showRegistration() {
    hideMain1();
    var y = document.getElementById('acc-login');
    var z = document.getElementById('registration-container');
    y.style.display = 'none';
    z.style.display = 'block'
    document.getElementById('registration-form').style.display = 'block';
}

//Навигация в сайта
document.getElementById('profile').addEventListener('click', function (event) {
    event.preventDefault();
    if (Store.checkLoggedIn()) {
        hideMain1And2();
        displayProfile();
        profilePage();
    } else {
        hideMain1();
        document.getElementById('registration-container').style.display = 'none';
    }
}, false);
document.getElementById('signUp').addEventListener('click', function (event) {
    event.preventDefault();
    if (Store.checkLoggedIn()) {
        hideMain1And2();
        displayProfile();
        profilePage();
    } else {
        hideMain1();
        document.getElementById('registration-container').style.display = 'none';
    }
}, false);


document.getElementById('registration').addEventListener('click', function hide(event) {
    event.preventDefault();
    showRegistration();
}, false);

document.getElementById('goToRegistration').addEventListener('click', function hide(event) {
    showRegistration();
    event.preventDefault();
}, false);

function hideNavbar() {
    var navbar = document.getElementById('topRightNav');
    if (window.innerWidth <= 768) {
        navbar.parentElement.removeChild(navbar);

    }
}

// Проверка дали има вписани данни във форма
function formValidation(index1) {
    for (var index = 0; index < document.forms[index1].length - 1; index++) {
        var element = document.forms[index1][index];
        var parentDiv = element.parentNode;
        if (element.value.trim().length <= 0) {
            if (parentDiv.lastChild === document.getElementById('error')) {
                parentDiv.removeChild(document.getElementById('error'));
            }
            var errorMessage = document.createElement("span");
            errorMessage.id = 'error';
            errorMessage.style.color = 'red';
            errorMessage.innerHTML = 'Не са въведени коректни данни';
            event.preventDefault();
            parentDiv.appendChild(errorMessage);
            return true;
        } else {
            if (parentDiv.lastChild === document.getElementById('error')) {
                parentDiv.removeChild(document.getElementById('error'));
                continue;
            } else {
                continue;
            }
        }
    }
};


document.getElementById('createUserWrapper').addEventListener('click', function (event) {
    if (formValidation(2) == true) {
        event.stopImmediatePropagation();
    }
}, true);

//Създаване на потребител
document.getElementById('createUser').addEventListener('click', function (event) {
    var name = document.getElementById('regName').value.toString();
    var familyName = document.getElementById('regFamily').value.toString();
    var email = document.getElementById('regEmail').value.toString();
    var password = document.getElementById('regPassword').value.toString();

    if (!(Store.sameEmail(email))) {
        Store.addCustomer(name, familyName, email, password);
        alert('User was successfully registered!');
        hideMain1And2();
        displayProfile();
        profilePage();
    } else {
        alert('User with this email already exists!');
    }
    event.preventDefault();
}, false);


//Логин
document.getElementById('loginUserWrapper').addEventListener('click', function (event) {
    if (formValidation(1) == true) {
        event.stopImmediatePropagation();
    }
}, true);

document.getElementById('loginUser').addEventListener('click', function (event) {
    var email = document.forms[1][0].value.toString();
    var password = document.forms[1][1].value.toString();


    if (Store.sameEmail(email) && Store.samePassword(password)) {
        if (document.getElementById('login').lastChild === document.getElementById('errorMessage')) {
            document.getElementById('login').removeChild(document.getElementById('errorMessage'));
        }
        window.sessionStorage.setItem('activeUser', JSON.stringify(Store.getCustomer(email)));
        alert('You have successfully logged in!');
        hideMain1And2();
        displayProfile();
    } else {
        if (document.getElementById('login').lastChild === document.getElementById('errorMessage')) {
            document.getElementById('login').removeChild(document.getElementById('errorMessage'));
        }
        var errorMessage = document.createElement('span');
        var parent = document.getElementById('login');
        errorMessage.innerHTML = "Грешна парола или имейл";
        errorMessage.style.color = 'red';
        errorMessage.id = 'errorMessage'
        parent.appendChild(errorMessage);
        event.preventDefault();
    }
}, false);

//Профилна страница
function profilePage() {
    (function () {
        var profile = document.getElementById('profile-data');
        var x = document.createElement('h4');
        var user = Store.getLoggedUser();
        var firstName = user.firstName;
        var secondName = user.secondName;
        x.innerText = "Здравейте, " + firstName + " " + secondName + "!";
        x.id = 'greeting';

        if (document.getElementById('profile-data').lastElementChild == document.getElementById('greeting')) {
            return profile.replaceChild(x, x);
        } else {
            return profile.appendChild(x);
        }
    })();

    (function () {
        var user = Store.getLoggedUser();
        var details = document.getElementById('profile-details');

    });
};

//Основна част на магазина

(function shopControl() {
    var shop = document.getElementById('shop');
    for (var index = 0; index < shop.children.length; index++) {
        var shopChildren = shop.children[index].children;
        Array.prototype.forEach.call(shopChildren, (function (element) {
            if (element.nodeName == "DIV") {
                element.addEventListener('mouseover', function highlight(event) {
                    element.style.border = '1px solid white';
                    element.style.boxShadow = '10px 10px';
                    console.log(element.nodeName);
                }, false);

                element.addEventListener('mouseout', function exit(event) {
                    element.style.border = '0px';
                    element.style.boxShadow = '0px 0px';
                }, false);
            }
        }));
    }
})();

(function generateAllProducts() {
    Store.createProduct("Лаптоп LENOVO 110-14IBR", 439.20, "http://most.bg/media/catalog/product/cache/1/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/5/6/56701.png", "laptop");
    Store.createProduct("Лаптоп LENOVO Yoga 3 Pro 13", 2250.00, "http://most.bg/media/catalog/product/cache/1/small_image/196x196/9df78eab33525d08d6e5fb8d27136e95/l/e/lenovo_yoga3_pro_1.png", "laptop");
    Store.createProduct("Лаптоп Green Very Stylish", 439.20, "http://www.freeiconspng.com/uploads/laptop-png-27.png", "laptop");
    Store.createProduct("Лаптоп LENOVO 110-14IBR", 439.20, "http://most.bg/media/catalog/product/cache/1/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/5/6/56701.png", "laptop");
    Store.createProduct("Лаптоп LENOVO 110-14IBR", 439.20, "http://most.bg/media/catalog/product/cache/1/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/5/6/56701.png", "laptop");

})();

(function showProducts() {
    var productList = document.getElementById('productList');
    productList.style.display = 'block';
    (function displayProducts() {
        var shop = Store.getAllProducts();
        for (var index = 0; index < shop.length; index++) {
            var x = document.createElement('div');
            x.className = "col-md-3";
            for (var key in shop[index]) {
                if (shop[index].hasOwnProperty(key)) {
                    var property = shop[index][key];
                    switch (key) {
                        case "type":
                            break;
                        case "imageURL": {
                            var image = document.createElement('img');
                            image.src = property;
                            image.style.maxWidth = "100%";
                            image.style.maxHeight = "auto";
                            image.style.display = "block";
                            x.appendChild(image);
                        }
                            break;
                        case "name":
                            var ime = document.createElement('h3');
                            ime.innerText = property;
                            ime.className = 'page-header';
                            ime.style.color = 'white';
                            x.appendChild(ime);
                            break;
                        case "price":
                            var cena = document.createElement('h5');
                            cena.innerText = property + " лева с ДДС";
                            cena.className  = 'page-header';
                            cena.style.color = 'white';
                            x.appendChild(cena);
                            break;
                    }

                    // var property = shop[index][key];
                    // if (property !== shop[index].imageURL) {
                    //     if (property !== shop[index].type) x.innerHTML += property;
                    // } else {
                    //     var image = document.createElement('img');
                    //     image.src = property;
                    //     image.style.maxWidth = "100%";
                    //     image.style.maxHeight = "auto;";
                    //     x.appendChild(image);
                    // }
                }
            }
            productList.appendChild(x);
        }
        return true;
    })();
})();

document.getElementById('shop-slide-1').children[1].addEventListener('click', function () {
    hideMain1And2();
    productListVisibility(true);
}, false);