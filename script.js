const nome = "Isaac";
const idade = 20;
const nacionalidade = "Brasileiro";

function isBrazilian() {
    if (nacionalidade == "Brasileiro" && idade >= 18) {
        console.log(`Olá ${nome}, você não precisa de passaporte!`)
    } else if (nacionalidade == "Brasileiro" && idade < 18) {
        console.log(`Olá ${nome}, você precisa de autorização dos responsáveis!`)
    } else if (nacionalidade != "Brasileiro" && idade < 18) {
        console.log(`Olá ${nome}, você precisa de autorização dos responsáveis e de um passaporte!`)
    } else if (nacionalidade != "Brasileiro" && idade >= 18) {
        console.log(`Olá ${nome}, você precisa de um passaporte!`)
    }
}