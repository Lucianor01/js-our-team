/*
* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
* Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
* MILESTONE 0:
* Creare l’array di oggetti con le informazioni fornite.
* MILESTONE 1:
* Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
* MILESTONE 2:
* Stampare le stesse informazioni su DOM sottoforma di stringhe
* BONUS 1:
* Trasformare la stringa foto in una immagine effettiva
* BONUS 2:
* Organizzare i singoli membri in card/schede
*/

const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
]

for (let i = 0; i < team.length; i++) {
    let singoloElemento = team[i]

    let path = "./assets/img/"

    document.querySelector('.row').innerHTML += `
    <div class="col-4">
        <div class="card text-center mt-5">
            <img src="${path}${singoloElemento.image}" class="card-img-top" alt="...">
            <div class="card-body" id='${i}'>
                <h5 class="card-title">${singoloElemento.name}</h5>
                <span class="card-text">${singoloElemento.role}</span>
            </div>
        </div>
    </div>
`
}

console.log(team);