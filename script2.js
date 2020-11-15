//sideNav Push Content with opacity


function openNav(){
    document.querySelector("#mySideNav").style.width="250px";
    document.querySelector("#main").style.marginLeft="250px";
    document.body.style.backgroundColor="rgba(0,0,0,0.2)";
}

function closeNav(){
    document.querySelector("#mySideNav").style.width="0px";
    document.querySelector("#main").style.marginLeft="0px";
    document.body.style.backgroundColor="white";
}