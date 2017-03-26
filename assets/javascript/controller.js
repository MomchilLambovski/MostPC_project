function elementVisibility(show, id) {
    if (show) {
        document.getElementById(id).style.display = 'block';
    } else {
        document.getElementById(id).style.display = 'none';
    }
}

window.addEventListener('load', function () {
    elementVisibility(false, 'productList');
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
    elementVisibility(false, 'productList');
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
    elementVisibility(false, 'productList');
    elementVisibility(false, 'profile-page');
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
    elementVisibility(false, 'productList');
    elementVisibility(false, 'profile-page');
    showRegistration();
}, false);

document.getElementById('goToRegistration').addEventListener('click', function hide(event) {
    showRegistration();
    elementVisibility(false, 'productList');
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

        var profileShopCart = document.getElementById('profile-shopCart');

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
    Store.createProduct("Лаптоп LENOVO Yoga 3 Pro 13", 2250.00, "http://most.bg/media/catalog/product/cache/1/small_image/196x196/9df78eab33525d08d6e5fb8d27136e95/l/e/lenovo_yoga3_pro_1.jpg", "laptop");
    Store.createProduct("Лаптоп Green Very Stylish", 439.20, "http://www.freeiconspng.com/uploads/laptop-png-27.png", "laptop");
    Store.createProduct("Лаптоп Дърво Стилизирано", 100, "http://4.bp.blogspot.com/-1xYCTzaE6fA/Tnffe4UJUKI/AAAAAAAAAFA/ZhQEsSQrBf4/s1600/MSI-GT660R-Gaming-Laptop-1.jpg", "laptop");
    Store.createProduct("Лаптоп Чудесен 11223311-AbcD", 555.55, "http://juniotech.com/sites/Sebastian/img/laptop3.png", "laptop");
    Store.createProduct("Таблет SONY 123xx1235124", 400.00, "http://pngimg.com/uploads/tablet/tablet_PNG8593.png", "tablet");
    Store.createProduct("Таблет Чудесен 11223311-AbcD", 555.55, "http://www.pngpix.com/wp-content/uploads/2016/04/Tablet-PNG-Image.png", "tablet");
    Store.createProduct("Таблет asdasd3311-AbcD", 555.55, "http://juniotech.com/sites/Sebastian/img/laptop3.png", "tablet");
    Store.createProduct("Таблет Чуден 11223311-AbcD", 555.55, "http://juniotech.com/sites/Sebastian/img/laptop3.png", "tablet");
    Store.createProduct("Таблетесен 11223311-AbcD", 555.55, "http://juniotech.com/sites/Sebastian/img/laptop3.png", "tablet");
})();

function displayProducts() {
    elementVisibility(false, 'profile-page');
    var shop = Store.getAllProducts();
    for (var index = 0; index < shop.length; index++) {
        var x = document.createElement('div');
        x.className = "col-md-3 box";
        x.style.boxSizing = "border-box";
        for (var key in shop[index]) {
            if (shop[index].hasOwnProperty(key)) {
                var property = shop[index][key];
                switch (key) {
                    case "type":
                        break;
                    case "imageURL": {
                        var div = document.createElement('div');
                        var image = document.createElement('img');
                        image.src = property;
                        image.style.width = "200px";
                        image.style.height = "150px";
                        div.style.width = "200px";
                        div.style.height = "150px";
                        image.style.display = "block";
                        div.appendChild(image)
                        x.appendChild(div);
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
                        cena.className = 'page-header';
                        cena.style.color = 'white';
                        x.appendChild(cena);
                        break;
                }
            }

        }
        var button = document.createElement('button');
        button.innerText = 'Добави в количка'
        button.className = 'btn btn-primary btn-lg boton';
        x.appendChild(button);
        productList.appendChild(x);
    }
    return true;
};

(function showProducts() {
    var productList = document.getElementById('productList');
    elementVisibility(false, 'profile-page');
    productList.style.display = 'block';

    displayProducts();
})();

function showTypeOfProducts(type) {
    var productsOfType = Store.getProductsByType();
};

document.getElementById('shop-slide-1').children[1].addEventListener('click', function () {
    hideMain1And2();
    elementVisibility(true, 'productList');
}, false);

document.getElementById('allProducts').addEventListener('click', function (event) {
    hideMain1And2();
    elementVisibility(true, 'productList');
    event.preventDefault();
}, false);

document.getElementById('shoppingCart').addEventListener('mouseenter', function (event) {
    var shopCartList = document.createElement('div');
    shopCartList.style.position = 'absolute';
}, true);

function buttonsAddToCart() {
    var buttons = document.getElementsByClassName('boton');
    Array.prototype.forEach.call(buttons, function (button) {
        button.addEventListener('click', function addToCart() {
            button.parentNode.removeChild(button.parentNode.lastChild);
            // document.getElementById('profile-shopCart').appendChild(button.parentNode);
        }, false);
    });
}
buttonsAddToCart();

//Searchbar
(function searchBar() {
    var bar = document.getElementById('searchBar');
    var products = Store.getAllProducts();
    for (var index = 0; index < products.length; index++) {
        if (products[index] == products[products.length - 1]) {
            break;
        }
        else {
            if (products[(index + 1)].type == products[index].type) continue;
            var option = document.createElement('option');
            option.innerHTML = products[index].type;
            bar.appendChild(option);
        }
    }
})();

