const petData = [ 
    {
        "name": "VAPEN SÄLJES", 
        "title": "CG 1900 o SKB12 i mkt fint skick",
        "descripstion": "Säljer för dödsbo CG 1900 Lyx 30-06 Huskvarna tillverkad. SKB c…",
        "price": "3 kr",
        "photo": "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
    },
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
    },
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

document.getElementById("app").innerHTML = `
    ${petData.map(petTemplate).join(" ")}
`

//     {
//         id: "HUNDAR SÄLJES: STÄLLANDE HUNDAR",
//         dap: "VÄSTERBOTTEN08 MAY, KL. 15:55",
//         title: "Karelarvalpar väntas vecka 23",
//         description: "U J SE11556/2021 (FI42660/17) Kantolanrinteen Pimu e. FI33942/14 FI B…",
//         price: "14 500 kr",
//         photo: "cat.jpg"
//     },
    
//     {
//         id: "ÖVRIGT", 
//         dap: "SKÅNE08 MAY, KL. 05:40",
//         title: "Eftersök i Skåne",
//         description: "Vi utför eftersök inom Skånes gränser på allt klövvilt dygnet ru…",
//         price: "795 kr",
//         photo: "cat.jpg"
//     },
    
//     {
//         id: "HUNDAR KÖPES", 
//         dap: "VÄSTRA GÖTALAND07 MAY, KL. 18:06",
//         title: "Jämthundsvalp, hane.",
//         description: "Efter meriterade föräldrar, född senast maj. Erfaren hundförare, j…",
//         price: "20 000 kr",
//         photo: "cat.jpg"
    
//     },

//     {
//         id: "VAPEN SÄLJES", 
//         dap: "SKÅNE06 MAY, KL. 17:13",
//         title: "Drilling.",
//         description: "Fabrikat: Simson Suhl. Hagel: kal 12. Kula: 6,5 x 55. Klass 1. Med ha…",
//         price: "20 000 kr",
//         photo: "cat.jpg"
//     },
    
//     {
//         id: "HUNDAR SÄLJES: TAX", 
//         dap: "VÄSTRA GÖTALAND 06 MAY KL. 16:27",
//         title: "Taxvalpar korthårig leverans vecka 23",
//         description: "Valpar två tikar fyra hanar födda 04-11 Efter Aavanmeren Za Za Zaa S…",
//         price: "14 000 kr",
//         photo: "cat.jpg"
//     },
    
//     {
//         id: "ÖVRIGT",
//         dap: "05 MAY KL. 13:02",
//         title: "Bokcirkel",
//         description: "Är Du intresserad av gamla svenska storviltjägare i Afrika? Vi kan …",
//         price: "Pris ej angivet",
//         photo: "cat.jpg"
//     }
// ]


