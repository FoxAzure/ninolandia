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
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 150){
        alert("Vixe, game over :(");
        document.body.innerHTML = '<h1 class="game-over""> Atualize a página e jogue novamente </h1>'; // criando título ao final do jogo
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