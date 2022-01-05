
const Negocio = require('../models/negocio');

const nombreNegocioExiste = async( nombre ) => {
  
  const existeNegocio = await Negocio.findOne({ nombre });
  if( existeNegocio ) {
    
    throw new Error(`El Negocio: '${ nombre }', ya esta registrado`);
  }
}

const existeNegociooById = async( id ) => {
  //Verificar si el correo existe
  const existeNegocio = await Negocio.findById(id);
  if( !existeNegocio ) {

    throw new Error(`El ID: '${ id }', No existe`);
  }
}

module.exports = {
  nombreNegocioExiste,
  existeNegociooById
}