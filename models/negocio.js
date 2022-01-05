const { Schema, model } = require('mongoose');

const imgTemp = `https://media.istockphoto.com/photos/red-stamp-on-a-white-background-temporary-picture-id1072055834?k=20&m=1072055834&s=612x612&w=0&h=BOXgKE2GE20g1pAyLdkoPWcWJ3ZvX8jkV8bK8hDIBVQ=`

const NegocioSchema = Schema({
  nombre: {
    type: String,
    require: [true, 'El nombre del Negocio es obligatorio'],
    unique: true
  },
  logotipo: {
    type: String,
    require: [true, 'La imagen/logotipo del Negocio es obligatoria'],
    default: imgTemp
  },
  ubicacion: {
    type: String,
    require: [true, 'La ubicacion del Negocio es obligatoria']
  },
  telefono: {
    type: String,
    require: [true, 'El telefono del Negocio es obligatorio']
  },
  estado: {
    type: Boolean,
    default: true
  },
})

NegocioSchema.methods.toJSON = function() {
  const { __v, _id, ...negocio } = this.toObject();

  return negocio;
}

module.exports = model( 'Negocio', NegocioSchema );