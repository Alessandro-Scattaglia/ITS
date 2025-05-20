/**
 * Author: Alessandro Scattaglia
 * 
 * Updates user profile info on the page, adds styling to list items, inserts an image,
 * and loads a CSS stylesheet after a delay.
 * 
 * @example
 * // Sets body font to Arial
 * // Changes nickname to "Ale Scatty"
 * // Changes favorites to "Coding, Sleeping, Pizza"
 * // Changes hometown to "Torino"
 * // Adds "list-item" class to each <li>
 * // Appends an image with width 200px
 * // After 4 seconds, loads "css/style.css"
 */

document.body.style.fontFamily = "Arial, sans-serif";

document.getElementById("nickname").innerText = "Ale Scatty";
document.getElementById("favorites").innerText = "Coding, Sleeping, Pizza";
document.getElementById("hometown").innerText = "Torino";

const listItems = document.querySelectorAll("li");
listItems.forEach(item => item.className = "list-item");

const img = document.createElement("img");
img.src = "https://fad.its-ictpiemonte.it/pluginfile.php/53281/user/icon/snap/f1?rev=1501690";
img.alt = "My Photo";
img.style.width = "200px";
document.body.appendChild(img);

setTimeout(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "css/style.css";
    document.head.appendChild(link);
}, 4000);
