const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const pontos = document.getElementById("pontos");

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");

        setTimeout(function () {
            dino.classList.remove("jump");
        }, 300);
    }
}

let isAlive = setInterval(() => {
    let randomTime = Math.random() * 6000; //criar cactus de maneira aleatória

    // dino posição
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

    // cactus posição
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    // analisar se ambos se tocam
    if (cactusLeft < 30 && cactusLeft > 0 && dinoTop >= 140){
        let pontosobtidos = document.getElementById("pontos")

        if (Number(pontosobtidos.innerHTML) > 2000) {
            alert("Nossaaaa!!! que viciada kkkkk, nino caiu de boca no abacaxi com " + pontosobtidos.innerHTML + " pontos!");
        }else if(Number(pontosobtidos.innerHTML) == 0){
            alert("Vixe, não pode ver um abacaxi que já cai de boca? Você conseguiu 0 pontos kkkkk")
        }else{
            alert("Eita, o nino caiu no abacaxi... Sua pontuação foi " + pontosobtidos.innerHTML + " pontos!");
        }
    
        location.reload()
    }
    setTimeout(DezSegundos, 1000);
    setTimeout(isAlive, randomTime);
}, 10);


let contador = pontos.innerHTML;
function DezSegundos(){
    contador ++
    pontos.innerHTML = contador;
}


document.addEventListener("keydown", function (event) {
    jump();
});

document.addEventListener("touchstart", function (event) {
    jump();
});