import { reloadTracks } from "./spotifyAPIScript.js";
/*User inputs and stuff*/
//CURRENT SETTINGS
let theme = "pink";
let timeFrame = "short";
const dataInterface = document.querySelector("#dataInterface");
const currentDate = new Date().toDateString();
document.querySelector("#displayDate").innerText = currentDate;

//theme buttons + bind onclick function
const themeButtons = document.querySelectorAll(".themeButton");
themeButtons.forEach(button => {
    button.onclick = () => {
        changeTheme(button.value);
    }
});
//time buttons + bind onclick function
const timeButtons = document.querySelectorAll(".timeButton");
timeButtons.forEach(button => {
    button.onclick = () => {
        changeTimeFrame(button.value);
    }
});

function changeTheme(newTheme) {
    if (newTheme === theme) {
        return;
    }
    //update selected button visual
    document.querySelector(`#${theme}ThemeButton`).classList.remove("selectedOption");
    document.querySelector(`#${newTheme}ThemeButton`).classList.add("selectedOption");
    //update interface
    dataInterface.style.backgroundImage = `url("public/assets/${newTheme}UI.png")`;
    //change neo only
    if (newTheme === "neo") {
        dataInterface.style.color = "var(--green)";
    }
    else {
        dataInterface.style.color = "var(--grey)";
    }
    //update current settings
    theme = newTheme;
}
function changeTimeFrame(newTimeFrame) {
    if (newTimeFrame === timeFrame) {
        return;
    }
    //update selected button visual
    document.querySelector(`#${timeFrame}TimeButton`).classList.remove("selectedOption");
    document.querySelector(`#${newTimeFrame}TimeButton`).classList.add("selectedOption");
    //update current settings
    timeFrame = newTimeFrame;
    //call api
    reloadTracks(timeFrame);
}