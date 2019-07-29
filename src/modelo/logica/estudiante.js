export default class Estudiante{

    constructor(id,nombre,nombreUsuario,contrasena,codPadre){
        this._id = id;
        this._nombre = nombre;
        this._nombreUsuario = nombreUsuario;
        this._contrasena = contrasena;
        this._codPadre = codPadre;
        this._listaActividades = [];
    }

    copia(estudiante=Estudiante){
        this._id = estudiante.id;
        this._nombre = estudiante.nombre;
        this._nombreUsuario = estudiante.nombreUsuario;
        this._contrasena = estudiante.contrasena;
        this._codPadre = estudiante.codPadre;
        if(estudiante.listarActividades != undefined) this._listaActividades = estudiante.listarActividades;
        
    }

    get id(){
        return this._id;
    }
    get nombre(){
        return this._nombre;
    }
    get nombreUsuario(){
        return this._nombreUsuario;
    }
    get contrasena(){
        return this._contrasena;
    }
    get codPadre(){
        return this._codPadre;
    }
    get listaActividades(){
        return this._listaActividades;
    }

    set id(value){
        this._id=value;
    }
    set nombre(value){
        this._nombre=value;
    }
    set nombreUsuario(value){
        this._nombreUsuario=value;
    }
    set contrasena(value){
        this._contrasena=value;
    }
    set codPadre(value){
        this._codPadre=value;
    }
    set listaActividades(value){
        this._listaActividades=value;
    }

    static listarDB(estudiante){
        let cadena =[];
        estudiante.listarActividades.forEach(actividad => {
            cadena.push({
                estado: actividad.estado,
                fechaEntrega: actividad.fechaEntrega,
                id: actividad.id,
                materia: actividad.materia,
                tarea: actividad.tarea,
            });
        });
        return cadena;
    }
}