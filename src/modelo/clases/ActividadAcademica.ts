export class ActividadAcademica{
    private tarea: String;
    private materia: String;
    private estado: String;
    private fechaEntrega: Date;

    constructor(tarea: String, materia: String, estado: String, fechaEntrega: Date){
        this.tarea=tarea;
        this.materia=materia;
        this.estado=estado;
        this.fechaEntrega=fechaEntrega;
    }
}