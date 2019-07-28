import Padre from "../logica/padre";

export default class PadreController{
    listarEstudiantes(padre=Padre){
        //return padre.listaHijos;
        let respuesta = [
            {
                id:1,
                nombre: 'Gerardo',
                tareas:[
                    {
                        id:1,
                        fecha: '27-07-2019',
                        materia: 'Mate',
                        actividad: 'Tarea',
                        hecha: false,
                        verificada: false
                    },
                    {
                        id:2,
                        fecha: '27-07-2019',
                        materia:'ingles',
                        actividad: 'Examen',
                        hecha: false,
                        verificada: false
                    }
                ]
            },
            {
                id:2,
                nombre: 'Carlos',
                tareas:[
                    {
                        id:3,
                        fecha: '27-07-2019',
                        materia:'lengua',
                        actividad: 'Examen',
                        hecha: true,
                        verificada: false
                    }
                ]
            },
            {
                id:3,
                nombre: 'Maria',
                tareas:[
                    {
                        id:4,
                        fecha: '27-07-2019',
                        materia:'economia',
                        actividad: 'Expo',
                        hecha: false,
                        verificada: false
                    },
                    {
                        id:5,
                        fecha: '27-07-2019',
                        materia:'dibujo',
                        actividad:'Proyecto',
                        hecha: true,
                        verificada: true
                    }
                ]
            }
        ]
        return respuesta;
    }
}