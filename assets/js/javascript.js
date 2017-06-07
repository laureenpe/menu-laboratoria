var responsive= document.getElementById("menu").addEventListener('click',dropDown); //Buscar el elemento al que quiero agregarle el evento

//funcion que le remueve la clase hide a dropdown
function dropDown(){
    var navbar= document.getElementById('dropdown');
    navbar.classList.remove('hide');
}


