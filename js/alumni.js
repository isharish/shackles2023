window.addEventListener("resize", calwidth);
window.addEventListener("scroll", scrollfunc);
var wid;

let row = document.getElementsByClassName("gyro");
let nrow = document.getElementsByClassName("gyr");
let orow = document.getElementsByClassName("gy");
let wrow = document.getElementsByClassName("gyros");
let srow = document.getElementsByClassName("gyrs");
let brow = document.getElementsByClassName("gyrsm");
calwidth();

function calwidth() {
    wid = window.innerWidth;
    row[0].className = row[0].className.replace("row-cols-3", " ");
    row[0].className = row[0].className.replace("row-cols-2", " ");
    row[0].className = row[0].className.replace("row-cols-1", " ");
    nrow[0].className = nrow[0].className.replace("row-cols-3", " ");
    nrow[0].className = nrow[0].className.replace("row-cols-2", " ");
    nrow[0].className = nrow[0].className.replace("row-cols-1", " ");
    orow[0].className = orow[0].className.replace("row-cols-3", " ");
    orow[0].className = orow[0].className.replace("row-cols-2", " ");
    orow[0].className = orow[0].className.replace("row-cols-1", " ");
    wrow[0].className = wrow[0].className.replace("row-cols-3", " ");
    wrow[0].className = wrow[0].className.replace("row-cols-2", " ");
    wrow[0].className = wrow[0].className.replace("row-cols-1", " ");
    srow[0].className = srow[0].className.replace("row-cols-3", " ");
    srow[0].className = srow[0].className.replace("row-cols-2", " ");
    srow[0].className = srow[0].className.replace("row-cols-1", " ");
    brow[0].className = brow[0].className.replace("row-cols-3", " ");
    brow[0].className = brow[0].className.replace("row-cols-2", " ");
    brow[0].className = brow[0].className.replace("row-cols-1", " ");
    if (wid < 1100 && wid > 650) {
        row[0].className += " row-cols-2";
        nrow[0].className += " row-cols-2";
        orow[0].className += " row-cols-2";
        wrow[0].className += " row-cols-2";
        srow[0].className += " row-cols-2";
        brow[0].className += " row-cols-2";
    } else if (wid < 650) {
        row[0].className += " row-cols-1";
        nrow[0].className += " row-cols-1";
        orow[0].className += " row-cols-1";
        wrow[0].className += " row-cols-1";
        srow[0].className += " row-cols-1";
        brow[0].className += " row-cols-1";
    } else if (wid > 1100) {
        row[0].className += " row-cols-3";
        nrow[0].className += " row-cols-3";
        orow[0].className += " row-cols-3";
        wrow[0].className += " row-cols-3";
        srow[0].className += " row-cols-3";
        brow[0].className += " row-cols-3";
    }
}



function displaymodal(str) {
    var modal = document.getElementById(str);
    modal.style.display = "flex";


    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function closemodal(str) {
    var close = document.getElementById(str);
    close.style.display = "none";
}

let home = document.getElementById("link1");
let about = document.getElementById("link2");
let events = document.getElementById("link3");
let workshop = document.getElementById("link4");
let contact = document.getElementById("link5");
let links = [home, about, events, workshop, contact];


// window.onscroll = function() { scrollfunc() };

function scrollfunc() {
    widths = window.innerWidth;
    home.className = home.className.replace(" active", "");
    about.className = about.className.replace(" active", "");
    events.className = events.className.replace(" active", "");
    workshop.className = workshop.className.replace(" active", "");
    contact.className = contact.className.replace(" active", "");
    if (widths > 430) {
        if (document.documentElement.scrollTop >= 0 && document.documentElement.scrollTop <= 800) {
            home.className += ' active';
        } else if (document.documentElement.scrollTop > 800 && document.documentElement.scrollTop <= 1600) {
            about.className += ' active';
        } else if (document.documentElement.scrollTop > 1600 && document.documentElement.scrollTop <= 3600) {
            events.className += ' active';
        } else if (document.documentElement.scrollTop > 3600 && document.documentElement.scrollTop <= 4500) {
            workshop.className += ' active';
        } else if (document.documentElement.scrollTop > 4500) {
            contact.className += ' active';
        }
    } else {
        if (document.documentElement.scrollTop >= 0 && document.documentElement.scrollTop <= 500) {
            home.className += ' active';
        } else if (document.documentElement.scrollTop > 500 && document.documentElement.scrollTop <= 1500) {
            about.className += ' active';
        } else if (document.documentElement.scrollTop > 1500 && document.documentElement.scrollTop <= 5000) {
            events.className += ' active';
        } else if (document.documentElement.scrollTop > 5000 && document.documentElement.scrollTop <= 6400) {
            workshop.className += ' active';
        } else if (document.documentElement.scrollTop > 6400) {
            contact.className += ' active';
        }
    }
}

var countDownDate = new Date("Apr 17, 2023 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("days").innerHTML = days;
    document.getElementById("hrs").innerHTML = hours;
    document.getElementById("minut").innerHTML = minutes;
    document.getElementById("secs").innerHTML = seconds;

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = 00;
        document.getElementById("hrs").innerHTML = 00;
        document.getElementById("minut").innerHTML = 00;
        document.getElementById("secs").innerHTML = 00;
    }
}, 1000);