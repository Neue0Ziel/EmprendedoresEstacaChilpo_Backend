const express = require("express");
const cors = require("cors");

const { dbConnection } = require('../database/config');

class Server {
  
  constructor() {
    this.app = express();
    this.PORT = process.env.PORT;

    // Rutas
    this.negociosPath = '/api/negocios';

    //Conecar a base de datos
    this.conectarDB();
    
    //Middlewares
    this.middlewares();

    //Rutas de mi aplicacion
    this.routes();
  }

  async conectarDB() {
    await dbConnection();
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // Lectura y Parseo del body
    this.app.use(express.json());

    // Directorio publico
    this.app.use(express.static('public'));
  }

  routes() {

    this.app.use( this.negociosPath, require( '../routes/negocios.routes' ));
  }

  listen() {
    
    this.app.listen(this.PORT, () => {
      console.log("Servidor corriendo en puerto:", this.PORT);
    });
  }
}

module.exports = Server;
