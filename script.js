function openInvitation() {

document.getElementById("loader").style.display = "none";

document.getElementById("bgMusic").play();

}

const weddingDate =
new Date("June 24, 2026 06:00:00").getTime();

setInterval(() => {

const now = new Date().getTime();

const gap = weddingDate - now;

document.getElementById("days").innerHTML =
Math.floor(gap / (1000 * 60 * 60 * 24));

document.getElementById("hours").innerHTML =
Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

document.getElementById("minutes").innerHTML =
Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));

document.getElementById("seconds").innerHTML =
Math.floor((gap % (1000 * 60)) / 1000);

}, 1000);
