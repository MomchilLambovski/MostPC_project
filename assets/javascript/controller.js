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

function selectedElement() {
    var curElement = document.activeElement;
    return curElement;
};

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

    (function (){
        var user = Store.getLoggedUser();
        var details = document.getElementById('profile-details');
        
    });
};

//Основна част на магазина

