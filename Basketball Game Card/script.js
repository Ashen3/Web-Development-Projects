let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let home_count = 0;
let guest_count = 0;

function plusOneHome() {
    home_count += 1;
    homeScore.innerHTML = home_count;
}   

function plusTwoHome() {
    home_count += 2;
    homeScore.innerHTML = home_count;
}  

function plusThreeHome() {
    home_count += 3;
    homeScore.innerHTML = home_count;
}  

function plusOneGuest() {
    guest_count += 1;
    guestScore.innerHTML = guest_count;
}   

function plusTwoGuest() {
    guest_count += 2;
    guestScore.innerHTML = guest_count;
}  

function plusThreeGuest() {
    guest_count += 3;
    guestScore.innerHTML = guest_count;
}  

