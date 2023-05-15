const contenitore = document.querySelector("main");

// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// DATI:
// Wayne Barnett    Founder & CEO    wayne-barnett-founder-ceo.jpg
// Angela Caroll    Chief Editor    angela-caroll-chief-editor.jpg
// Walter Gordon    Office Manager    walter-gordon-office-manager.jpg
// Angela Lopez    Social Media Manager    angela-lopez-social-media-manager.jpg
// Scott Estrada    Developer    scott-estrada-developer.jpg
// Barbara Ramos    Graphic Designer    barbara-ramos-graphic-designer.jpg

// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// Creare l’array di oggetti con le informazioni fornite.
let team = [
    {
        "nome" : "Wayne Barnett",
        "ruolo" : "Founder & CEO",
        "foto" : "wayne-barnett-founder-ceo.jpg"
    },
    {
        "nome" : "Angela Caroll",
        "ruolo" : "Chief Editor",
        "foto" : "angela-caroll-chief-editor.jpg"
    },
    {
        "nome" : "Walter Gordon",
        "ruolo" : "Office Manager",
        "foto" : "walter-gordon-office-manager.jpg"
    },
    {
        "nome" : "Angela Lopez",
        "ruolo" : "Social Media Manager",
        "foto" : "angela-lopez-social-media-manager.jpg"
    },
    {
        "nome" : "Scott Estrada",
        "ruolo" : "Developer",
        "foto" : "scott-estrada-developer.jpg"
    },
    {
        "nome" : "Barbara Ramos",
        "ruolo" : "Graphic Designer",
        "foto" : "barbara-ramos-graphic-designer.jpg"
    },
]
console.log(team);


// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for (let i = 0; i < team.length; i++) {

    let teamIesimo = team[i];

    let nomeMembro = teamIesimo.nome;
    let ruoloMembro = teamIesimo.ruolo;
    let fotoMembro = teamIesimo.foto;

    // BONUS 1:
    // Trasformare la stringa foto in una immagine effettiva
    // BONUS 2: Organizzare i singoli membri in card/schede
    let scheda = `<div class="container_card">
                <div class="card">

                    <img src="img/${teamIesimo.foto}">
                    <h1 class="name"> ${teamIesimo.nome} </h1>
                    <div class="rule"> ${teamIesimo.ruolo} </div>

                </div>
            </div>`

    contenitore.innerHTML += scheda;
}






