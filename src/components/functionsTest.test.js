const fucntions = require('./API/api-calls');

describe("Caso de Prueba 1",() =>{
    it('Deberia devolver un usuario con el id', ()=>
    {
        expect(fucntions.getUser(1)).toContain(1);//En este caso es para traer toda la informacion del usuario y el usuario ya ha sido insertado
        })
})
describe("Caso de Prueba 2",() =>{
    it('No deberia devolver ningun item', ()=>
    {
        expect(fucntions.getUser(0)).toContain(0);
    })
})
describe("Caso de Prueba 3",() =>{
    it('Deberia devolver un false si no lo registra', ()=>
    {
        const user =  {Nombre: null,Correo:'algo@gmail.com',Contrasena:'1234', NombreUsuario:'Carlitos'};
        expect(fucntions.addUser(user)).toBe(false);
    })
})
describe("Caso de Prueba 4",() =>{
    it('Deberia devolver un true si lo logra registrar', ()=>
    {
        const user =  {Nombre: 'Ignacio',Correo:'algo@gmail.com',Contrasena:'1234', NombreUsuario:'Ignacio'};
        expect(fucntions.addUser(user)).toBe(true);
    })
})
describe("Caso de Prueba 3",() =>{
    it('Deberia devolver un false si no lo registra', ()=>
    {
        const event =  {Nombre: null,Correo:'algo@gmail.com',Contrasena:'1234', NombreUsuario:'Carlitos'};
        expect(fucntions.addEvent(event)).toBe(false);
    })
})
describe("Caso de Prueba 4",() =>{
    it('Deberia devolver un true si lo logra registrar', ()=>
    {
        const user =  {Nombre: 'Ignacio',Correo:'algo@gmail.com',Contrasena:'1234', NombreUsuario:'Ignacio'};
        expect(fucntions.addUser(user)).toBe(true);
    })
})