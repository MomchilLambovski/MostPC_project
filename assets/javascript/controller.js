// document.getElementById("signUp").addEventListener('click', function replaceMain() {
//     var mainDivContent = document.body.children[0].children[1];
//     var newDiv = document.createElement('div');
//     newDiv.style.backgroundColor = "blue";
//     newDiv.style.width = "1000px";
//     newDiv.style.height = "100px";
//     mainDivContent.innerHTML = newDiv;
//     // return document.body.children[0].children[1].replaceChild(newDiv, mainDiv);
// }, false);

// document.body.children[0].children[1].children[0].style.display = "none";

// var main = document.getElementById("main-wrapper");
// document.querySelector("main").removeChild(main);
// console.log(typeof Array.prototype.findIndex());

function getElement(element) {
    return getElementById(element);
}


function hideMain1() {
    var x = document.getElementById('main-wrapper1');
    var y = document.getElementById('main-wrapper2');
    var z = document.getElementById('acc-login');
    x.style.display = 'none';
    if (z.style.display = 'none') z.style.display = 'block';
    y.style.display = 'block';
}

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
    hideMain1();
    document.getElementById('registration-container').style.display = 'none';
}, false);
document.getElementById('signUp').addEventListener('click', function (event) {
    event.preventDefault();
    hideMain1();
    document.getElementById('registration-container').style.display = 'none';
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
    } else {
        alert('User with this email already exists!');
    }
    event.preventDefault();
}, false);