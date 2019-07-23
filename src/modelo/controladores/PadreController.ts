import { Padre } from '../clases/Padre';
import { SistemaNotificacion } from '../clases/SistemaNotificacion';
import { SistemaControlActividad } from '../clases/SistemaControlActividad';
import { PadrePersistencia } from '@/persistencia/padrePersistencia';
import { NotificacionPersistencia } from '@/persistencia/notificacionPersistencia';

export class PadreController {
    private _padre: Padre;
    private _sistemaNotificacion: SistemaNotificacion;
    private _sistemaActividades: SistemaControlActividad;
    private _persistenciaPadre: PadrePersistencia;
    private _persistenciaNotificacion: NotificacionPersistencia;

    constructor(cod : String){
        this._persistenciaPadre = new PadrePersistencia();
        this._persistenciaNotificacion = new NotificacionPersistencia();
        this._padre = this._persistenciaPadre.buscar(cod);
        this._sistemaNotificacion = new SistemaNotificacion(this._persistenciaNotificacion.listar(cod));
        this._sistemaActividades = new SistemaControlActividad();
    }

    public registrarHijo(nombre:String,nombreUsuario:String,contrasena:String){
        this._padre.registrarHijo(nombre,nombreUsuario,contrasena);
        this._persistenciaPadre.actualizar(this._padre);
    }
}