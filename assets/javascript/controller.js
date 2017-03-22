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
    hideMain1();
    var y = document.getElementById('acc-login');
    var z = document.getElementById('registration-container');
    y.style.display = 'none';
    z.style.display = 'block'
    document.getElementById('registration-form').style.display = 'block';
}, false);

function selectedElement(){
    var curElement = document.activeElement;
    return  curElement;
}


document.addEventListener('DOMContentLoaded', function formValidation() {
    document.forms[2].addEventListener('submit', function (event) {
        for (var index = 0; index < document.forms[2].length - 1; index++) {
            var element = document.forms[2][index];
            var parentDiv = element.parentNode;
            if (element.value.trim().length <= 0) {
                if(parentDiv.lastChild === document.getElementById('error')){
                    parentDiv.removeChild(document.getElementById('error'));
                }
                var errorMessage = document.createElement("span");
                errorMessage.id = 'error';
                errorMessage.style.color = 'red';
                errorMessage.style.border = '1px solid red';
                errorMessage.innerHTML = 'Не са въведени коректни данни';
                event.preventDefault();
                parentDiv.appendChild(errorMessage);
                break;
            } else {
                if (parentDiv.lastChild === document.getElementById('error')) {
                    parentDiv.removeChild(document.getElementById('error'));
                    continue;
                } else {
                    continue;
                }
            }
        }
    }, false);
});