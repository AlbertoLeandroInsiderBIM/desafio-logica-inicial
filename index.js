//Função para classificar o nível do nosso Herói com base no ganho de XP
function classificarnossoheroi (nome, xp) {
    let nivel;

    //Utilizando estrutura de decisão aprendida, determinar nivel do herói.
if (xp< 1000) {
    nivel = "Ferro";
} else if (xp > 1001 && xp <= 2000) {
    nivel = "Bronze"; 
} else if (xp > 2001 && xp <= 5000) {
    nivel = "Prata";
} else if (xp > 5001 && xp <= 7000) {
    nivel = "Ouro";
} else if (xp > 7001 && xp <= 8000) {
    nivel = "Platina";
} else if (xp > 8001 && xp <= 9000) {
    nivel = "Ascendente";
} else if (xp > 8001 && xp <= 9000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

//Retorno da mensagem com o nível do nosso Heroi
return (`O Herói de nome ${nome} está no nível de ${nivel}`);
}

//Exemplo de uso da Função
const nomeHeroi = "Mago negro";
const xpHeroi = 17500; // Exemplo de XP teste

const mensagem = classificarnossoheroi(nomeHeroi, xpHeroi);
console.log(mensagem); //Saida: O nosso Heroi de nome Mago Negro esta no nivel X
