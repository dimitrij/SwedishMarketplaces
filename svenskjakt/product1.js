const petData = [ 
    {
        "name": "VAPEN SÄLJES", 
        "title": "CG 1900 o SKB12 i mkt fint skick",
        "descripstion": "Säljer för dödsbo CG 1900 Lyx 30-06 Huskvarna tillverkad. SKB c…",
        "price": "3 kr",
        "photo": "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
    },
]

const pet2Data = [
    {
        "name": "HUNDAR SÄLJES: BASSET OCH BEAGLE", 
        "title": "Valpar väntas 13 Juni",
        "descripstion": "STARMAIDS Bumble-Bee (Doris), SE31172/2019, MLS N/N : 1 RÅ på drevpr…",
        "price": "18 000 kr",
        "photo": "pet.jpg"
    },
    {
        "name": "HUNDAR SÄLJES: STÄLLANDE HUNDAR",
        "title": "Jämthundsvalpar",
        "descripstion": "Två jämthundstikar säljes. Födda 28/3-21. Mor Kalla SE22425/2014. …",
        "price": "123 456 kr",
        "photo": "Camera.jpg"
    },
    {
        "name": "JAKT ERBJUDES", 
        "title": "Ny medlem",
        "descripstion": "Jaktlag med knappt 1.000 hektar sammanhängande huvudsakligen skogsmar…",
        "price": "22 000 kr",
        "photo": "Cat.jpg"
    }
]

function petTemplate(pet) {
    return `<div class="animal">
    <img class="pet-photo" src="${pet.photo}">
    <h6 class="pet-name">${pet.name}</h6>
    <p><strong>${pet.title}</strong></p>
    <p>${pet.descripstion}</p>
    <p>${pet.price}</p>
</div>`
}

document.getElementById("app1").innerHTML = `
    ${petData.map(petTemplate).join(" ")}
`

function pet2Template() {
    return `<div class="animal2">
    ><img class="pet-photo2" src="${pet2Data.photo}">
    <h6 class="pet-name2">${pet2Data.name}</h6>
    <p><strong>${pet2Data.title}</strong></p>
    <p>${pet2Data.descripstion}</p>
    <p>${pet2Data.price}</p>
    </div>`
}
document.getElementsByClassName("annon2").innerHTML = `
${pet2Data.map(pet2Template).join(" ")}`
