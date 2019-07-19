export class Usuario{
    private _nombre: String;
    private _nombreUsuario: String;
    private _contrasena: String;

    constructor(nombre: String, nombreUsuario: String, contrasena: String){
        this._nombre=nombre;
        this._nombreUsuario=nombreUsuario;
        this._contrasena=contrasena;
    }

    get nombreUsuario(): String{
        return this.nombreUsuario;
    }
}