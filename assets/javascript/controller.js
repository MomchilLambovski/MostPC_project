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
    if(z.style.display = 'none') z.style.display = 'block';
    y.style.display = 'block';
}



document.getElementById('profile').addEventListener('click', function (event) {
    event.preventDefault();
    hideMain1();
}, false);
document.getElementById('signUp').addEventListener('click', function (event) {
    event.preventDefault();
    hideMain1()
}, false);

document.getElementById('registration').addEventListener('click', function hide(event) {
    event.preventDefault();
    hideMain1();
    var y = document.getElementById('acc-login');
    var z = document.getElementById('registration-form');
    y.style.display = 'none';
    z.style.display = 'block'
}, false);