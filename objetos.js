//objetos.js

const Yo = {
    Nombre: "Engelhard", 
    Apellido: "Pacheco", 
    Edad: 25, 
    Altura: 1.97, 
    Desarrolador: true
    };
console.log(Yo);

const edad = Yo.Edad;
console.log(edad);

const Yo_amigos = [
    {...Yo},
    {Nombre: "Braiam", 
    Apellido: "Linares", 
    Edad: 28,
    Altura: "???",
    Desarrolador: false},
    {Nombre: "Rosa", 
    Apellido: "Resplandor", 
    Edad: 27,
    Altura: "???",
    Desarrolador: false}
    ];
console.log(Yo_amigos);

const edades_ordenadas = Yo_amigos.sort((a,b)=> b.Edad - a.Edad);
console.log(edades_ordenadas);