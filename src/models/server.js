import express from 'express';
import { bootcampRouter } from '../routes/bootcamp.routers.js';
import { cursoRouter } from '../routes/user.routers.js'; // Corregir el nombre de la importación

export default class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.static('public'));
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/bootcamps', bootcampRouter);
        this.app.use('/users', cursoRouter); // Usar cursoRouter en lugar de routerUser
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Corriendo en el puerto: ${this.port}`)
        })
    }

}