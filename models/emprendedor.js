const { Schema, model } = require('mongoose');

const EmprendedorSchema = Schema({
  nombre: {
    type: String,
    require: [true, 'El nombre es obligatorio']
  },
  correo: {
    type: String,
    require: [true, 'El correo es obligatorio'],
    unique: true
  },
  password: {
    type: String,
    require: [true, 'La contraseña es obligatorio'],
  },
  img: {
    type: String,
  },
  rol: {
    type: String,
    require: true,
    emun: ['ADMIN_ROLE', 'SALE_ROLE','USER_ROLE']
  },
  estado: {
    type: Boolean,
    default: true,
  },
  google: {
    type: Boolean,
    default: false
  }
})

EmprendedorSchema.methods.toJSON = function() {
  const { __v, password, _id, ...emprendedor } = this.toObject();

  return emprendedor;
}

module.exports = model( 'Emprendedor', UsuarioSchema );