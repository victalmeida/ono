function escuro(){
    let body = document.getElementById("fundo");
    let sd = document.getElementById("saida");
    let pg = document.getElementById("txt");
    pg.style.color = "white";
    sd.style.color = "white";
    body.style.backgroundColor = "black";
   
}
function claro(){
    let body = document.getElementById("fundo");
    let sd = document.getElementById("saida");
    let pg = document.getElementById("txt");
    pg.style.color = "black";
    body.style.backgroundColor = "white";
    sd.style.color = "black";
   
}


function calcular(){
    var terreno = Number(document.getElementById("terreno").value);
    var largura = Number(document.getElementById("largura").value);
    var comprimento  = Number(document.getElementById("comprimento").value);
    var valor= 0;
    var saida = document.getElementById("saida");

    valor = terreno / (largura*comprimento);
    saida.innerHTML = `Dadas as medidas o numero de lotes nesse terreno sera de : ${valor} lotes. `;
    
}
