
document.getElementById("openNav").addEventListener("click", openNav);
document.getElementById("closeNav").addEventListener("click", closeNav);

function openNav() {

    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("openNav").style.display = "none";     // Oculta o botão openNav
    document.getElementById("itemsNavBar").style.display = "block";
    
    
    //document.getElementById("Back-Header").style.marginLeft = "250px"
    
}

function closeNav() {

    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("openNav").style.display = "block";    // Torna o botão openNav visível novamente
    document.getElementById("itemsNavBar").style.display = "none";
    
    
    //document.getElementById("Back-Header").style.marginLeft = "0";

}
