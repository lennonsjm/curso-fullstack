const botoes = document.querySelector(".accordion");
const paneis = document.querySelector(".panel");

for (let i = 0; i < botoes.length; i++){
    let numero = i;

    botoes[numero].onclick = function(){
    if(paneis[numero].style.display == "block"){
        paneis[numero].style.display = "none";
    }else{
        paneis[numero].style.display = "block";
    }

    

    }
}