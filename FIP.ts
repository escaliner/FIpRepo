interface iMusic {
    name: string,
    artist:string,
    style: string,
    price: number,
}


const disc1: iMusic={
    name: "Cancion Animal",
    artist: "Soda Stereo",
    style: "Rock Nacional",
    price: 3900,
}
const disc2: iMusic = {
    name: "Radioactive",
    artist: "Dragon",
    style: "Pop-Rock",
    price: 5000,
}
const disc3: iMusic = {
    name: "El Alma al Aire",
    artist: "Alejandro Sanz",
    style: "Melodico/Romantico",
    price: 4000,
}


console.log(`el nombre del disco es: ${disc1.name}, su precio al mercado es de ${disc1.price}`)
console.log(`el nombre del disco es: ${disc2.name}, su precio al mercado es de ${ disc2.price }`)
console.log(`el nombre del disco es: ${disc3.name}, su precio al mercado es de ${ disc3.price }`)


// ts-node FIP.ts