console.log(screen.width);
console.log(screen.height);

var elements = document.querySelectorAll('label');
var i = 0;
while (i < elements.length) {
    elements[i].style.transformOrigin = 'Left';
    if (screen.width > 1000) {
        elements[i].style.scale = 1.2;
    }
    else {
        console.log("In");
        elements[i].style.scale = 3.2 + (-screen.width / 500);

        //elements2[i].styleh
    }
    console.log(elements[i].style.scale);
    i++;
}
var logo = document.querySelectorAll('h1')[0];
// logo.style.all = "revert";
logo.style.fontSize = "200%";
var logo2 = document.querySelectorAll('span')[0];
// logo.style.all = "revert";
logo2.style.fontSize = "70%";
console.log(logo.style.fontSize)