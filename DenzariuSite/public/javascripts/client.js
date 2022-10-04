var slideIndex = 1;
var n = 1;
const bulletColors = ["#71092C", "#52b788", "#3B79A0", "#692D94"]
var notBlocked = true;

const lineColor = '#460e56';
var newLineColor = '#460e56';




const slideRL = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
];
const moveRightLeft = [
    {
        marginLeft: '0%',
        marginRight: '0%'
    },
    {
        marginLeft: '+30%',
        marginRight: '-30%'
    },
    {
        marginLeft: '-100%',
        marginRight: '+100%'
    },
    {
        marginLeft: '-100%',
        marginRight: '+100%'
    },
    {
        marginLeft: '-100%',
        marginRight: '+100%'
    },
    {
        marginLeft: '+30%',
        marginRight: '-30%',
    },
    {
        marginLeft: '0%',
        marginRight: '0%'
    },

];

const moveLeft = [

    {
        marginLeft: '-100%',
        marginRight: '+100%'
    },
    {
        marginLeft: '0%',
        marginRight: '0%'
    }
];

const moveRight = [
    {
        marginLeft: '+100%',
        marginRight: '-100%'
    },
    {
        marginLeft: '0%',
        marginRight: '0%'
    }
];


const moveUp = [
    {
        marginTop: '0%',
        marginBottom: '0%'
    },
    {
        marginTop: '+100vh',
        marginBottom: '-100vh'
    }
];

const moveDown = [
    {
        marginTop: '-100vh',
        marginBottom: '+100vh'
    },
    {
        marginTop: '0%',
        marginBottom: '0%'
    }
];


const slideRLTiming = {
    duration: 300,
    iterations: 1
}

const colorFadeTiming = {
    duration: 2400,
    iterations: 1
}

// AT BOOT //
var txt = " I am Denzariu";
var txt2 = " I am Denis-Stefan Pinzariu and this is my website."
var i = 0;
var speed = 125;

start();

function start() {
    /* Set dots style
    var slides = document.getElementsByClassName("slider__slides");
    var dots = document.getElementsByClassName("bullet_item");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        console.log(dots[i].className);

        dots[i].style.webkitTransform = "scale(0.5)";
        dots[i].style.msTransform = "scale(0.5)";
        dots[i].style.transform = "scale(0.5)";
        dots[i].style.opacity = 0.5;
        //outer[i].style.backgroundColor = bulletColors[slideIndex - 1];
        console.log(slides[i].id + '\n');
    }

    slides[slideIndex - 1].style.display = "block";

    dots[slideIndex - 1].className += " active";

    dots[slideIndex - 1].style.webkitTransform = "scale(1)";
    dots[slideIndex - 1].style.msTransform = "scale(1)";
    dots[slideIndex - 1].style.transform = "scale(1)";
    dots[slideIndex - 1].style.opacity = 1;
    */

    
    setTimeout(addThenDeleteText, 2400);
}

//ADD NAME HIGHLIGHT AFTER TYPING
// DELETE THEN ADD ANIM //

function addThenDeleteText() {
    document.getElementById("dynamicText").className += " line-1 anim-typewriter";
    
    addText();
}

function addText() {
    if (i < txt.length) {
        document.getElementById("dynamicText").innerHTML += txt.charAt(i);
        i++;
        setTimeout(addText, speed);
    }
    else {
        setTimeout(deleteText, speed * 4);
    }
}

function deleteText() {
    if (i > 8) {

        document.getElementById("dynamicText").innerHTML = document.getElementById("dynamicText").innerHTML.slice(0, -1);
        i--;
        setTimeout(deleteText, speed);
    }
    else {
        setTimeout(addNewText, speed);
    }
}

function addNewText() {
    if (i < txt2.length) {
        document.getElementById("dynamicText").innerHTML += txt2.charAt(i);
        i++;
        setTimeout(addNewText, speed);
    }
}



// SLIDES //

function prevSlide() {
    if (slideIndex > 1 && notBlocked) {
        notBlocked = false;
        showSlides(slideIndex - 1);
    }
}

function nextSlide() {
    if (slideIndex < 4 && notBlocked) {
        notBlocked = false;
        showSlides(slideIndex + 1);
    }
}

function currentSlide(n) {
    if (n != slideIndex && notBlocked) {
        notBlocked = false;
        showSlides(n); 
    }
}


function showSlides(_n) {
    
    console.log(slideIndex);
    var slides = document.getElementsByClassName("slider__slides");
    var dots = document.getElementsByClassName("bullet_item");
    var outer = document.getElementsByClassName("outer");

    dots[slideIndex - 1].className = dots[slideIndex - 1].className.replace(" active", "");
    console.log(dots[slideIndex - 1].className);

    dots[slideIndex - 1].style.webkitTransform = "scale(0.5)";
    dots[slideIndex - 1].style.msTransform = "scale(0.5)";
    dots[slideIndex - 1].style.transform = "scale(0.5)";
    dots[slideIndex - 1].style.opacity = 0.5;
    outer[slideIndex - 1].style.backgroundColor = bulletColors[slideIndex - 1];
    console.log(slides[slideIndex - 1].id + '\n');

    dots[_n - 1].className += " active";

    dots[_n - 1].style.webkitTransform = "scale(1)";
    dots[_n - 1].style.msTransform = "scale(1)";
    dots[_n - 1].style.transform = "scale(1)";
    dots[_n - 1].style.opacity = 1;

    slides[slideIndex - 1].animate(moveUp, slideRLTiming);

    

    setTimeout(changeSlide, slideRLTiming.duration);

    n = _n;
}

function changeSlide() {
    var i;

    var slides = document.getElementsByClassName("slider__slides");
    
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    slides[n - 1].animate(moveDown, slideRLTiming);

    slides[slideIndex - 1].style.display = "none";
    slides[n - 1].style.display = "block";
    

    // Change lines' color and move them
    var hlines = document.getElementsByClassName("retrobg-hline");
    var vlines = document.getElementsByClassName("retrobg-vline");
    var retrolines = document.getElementById("retrobg-lines");

    const linesMove = [
        { transform: 'rotateX(84deg) translateY( 0 )' },
        { transform: 'rotateX(84deg) translateY( 100px )' },
        { transform: 'rotateX(84deg) translateY( 200px )' }
    ];

    retrolines.animate(linesMove, colorFadeTiming);

    newLineColor = bulletColors[n - 1];

    const colorFadeLines = [
        { backgroundColor: lineColor },
        { backgroundColor: newLineColor },
        { backgroundColor: lineColor }
    ];


    for (i = 0; i < hlines.length; i++)
        hlines[i].animate(colorFadeLines, colorFadeTiming);
    for (i = 0; i < vlines.length; i++)
        vlines[i].animate(colorFadeLines, colorFadeTiming);


    slideIndex = n;
    notBlocked = true;
    console.log(notBlocked);
}



// Move animation
/*
var id = null;
function moveIt(elem) {
    //var elem = document.getElementById("slider__slides active");
    var pos = 0;

    clearInterval(id);
    id = setInterval(frame, 50);
    function frame() {
        if (pos == 10) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.left = bounce(pos);
        }
    } 
}
*/


