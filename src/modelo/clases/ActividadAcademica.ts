export class ActividadAcademica{
    private id: Number;
    private tarea: String;
    private materia: String;
    private estado: String;
    private fechaEntrega: Date;

    constructor(id: Number, tarea: String, materia: String, estado: String, fechaEntrega: Date){
        this.id=id;
        this.tarea=tarea;
        this.materia=materia;
        this.estado=estado;
        this.fechaEntrega=fechaEntrega;
    }
}