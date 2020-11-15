//sideNav Push Content


function openNav(){
    document.querySelector("#mySideNav").style.width="250px";
    document.querySelector("#main").style.marginLeft="250px";
}

function closeNav(){
    document.querySelector("#mySideNav").style.width="0px";
    document.querySelector("#main").style.marginLeft="0px";
}