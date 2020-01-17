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
describe("Caso de Prueba 5",() =>{
    it('Deberia devolver un false si no lo registra', ()=>
    {
        const event =  {NombreEvento: null,DescEvento:'Evento de Prueba',Ubicacion:'Monterrey', Tipo:'Cultural', Fecha:'2020/02/12',Hora:'12:30',Restricciones:'No hay restricciones',FuenteEvento:'imagen.jpg'};
        expect(fucntions.addEvent(event)).toBe(false);
    })
})
describe("Caso de Prueba 6",() =>{
    it('Deberia devolver un true si lo logra registrar', ()=>
    {
        const event =  {NombreEvento: 'Eventos 1',DescEvento:'Evento de Prueba',Ubicacion:'Monterrey', Tipo:'Cultural', Fecha:'2020/02/12',Hora:'12:30',Restricciones:'No hay restricciones',FuenteEvento:'imagen.jpg'};
        expect(fucntions.addEvent(event)).toBe(true);
    })
})
describe("Caso de Prueba 7",() =>{
    it('Deberia devolver un evento con el id', ()=>
    {
        expect(fucntions.getEvent(1)).toContain(1);//En este caso es para traer toda la informacion del evento y el evento ya debra haber sido insertado
        })
})
describe("Caso de Prueba 8",() =>{
    it('No deberia devolver eventos', ()=>
    {
        expect(fucntions.getEvent(0)).toContain(0);
    })
})
