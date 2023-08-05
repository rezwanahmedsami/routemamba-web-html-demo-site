var Homenav = document.getElementById("Homenav");
var PricingNav = document.getElementById("PricingNav");
var FeaturesNav = document.getElementById("FeaturesNav");

function Navigatehandler(e){
    e.preventDefault();
    e.stopImmediatePropagation();
    let href = e.target.getAttribute("href");
    routemamba.navigate(href);
}
Homenav.addEventListener("click", Navigatehandler);

PricingNav.addEventListener("click", Navigatehandler);

FeaturesNav.addEventListener("click", Navigatehandler);