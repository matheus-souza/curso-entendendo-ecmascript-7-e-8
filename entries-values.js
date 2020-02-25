const Pessoa = {
    nome: 'Matheus',
    idade: 22
};

for (let [k, v] of Object.entries(Pessoa)) {
    console.log(`${k}: ${v}`);
}

console.log(Object.entries(Pessoa));

let mapa = new Map(Object.entries(Pessoa));
console.log(mapa.get('nome'));
console.log(mapa.get('idade'));

console.log(Object.values(Pessoa));

console.log(Object.entries({ [Symbol()]: 123}));
