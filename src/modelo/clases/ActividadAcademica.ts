export class ActividadAcademica{
    private tarea: String;
    private id: String
    private materia: String;
    private estado: String;
    private fechaEntrega: Date;

    constructor(id: String, tarea: String, materia: String, estado: String, fechaEntrega: Date){
        this.tarea=tarea;
        this.materia=materia;
        this.estado=estado;
        this.id=id;
        this.fechaEntrega=fechaEntrega;
    }
}