//Objetos, Class

class productos{
    nombre;
    codigo;
    precio;
    color;
    unidades;
    disponibilidad;

    constructor(nombre,codigo,precio,color,unidades,disponibilidad)
    {
        this.nombre = nombre;
        this.codigo = codigo;
        this.precio = precio;
        this.color = color;
        this.unidades = unidades;
        this.disponibilidad = disponibilidad;
    }
   
    sumarIVA()
    {
     return this.precio  * 1.21;
    }

    precioMinorista()
    {
        return this.precio * 1.21 * 1.80;
    }
   
}