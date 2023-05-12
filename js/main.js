const elTeamCard = document.querySelectorAll(".card");
console.log(elTeamCard);

// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg

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
    }
]
;

// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for (let key in team) {
    console.log(team[key])
}
for (let i = 0; i < team.length; i++) {
    let teamIesimo = team[i];
    console.log("nome : " + teamIesimo.nome);
    console.log("ruolo : " + teamIesimo.ruolo);
    console.log("foto : " + teamIesimo.foto);

    for (let i = 0; i < elTeamCard.length; i++) {
        let card = elTeamCard[i];
        card.innerHTML = teamIesimo.nome;
    }
}

// Stampare le stesse informazioni su DOM sottoforma di stringhe









// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2: Organizzare i singoli membri in card/schede
// Consigli del giorno:
// Ragioniamo come sempre a step. Prima la logica in italiano e poi traduciamo in codice. E ricordiamoci che console.log() è nostro amico!
// Buon lavoro e buon we! :vasca_da_bagno: