const { response, request } = require("express");

const Negocio = require('../models/negocio');

const getNegocios = async(req, res = response) => {

  const query = { estado: true };

  const [total, negocios] =await Promise.all([
    Negocio.countDocuments(query),
    Negocio.find(query)
  ]);

  res.json({
    total,
    negocios
  });
}

const postNegocios = async(req, res = response) => {

  const {nombre, logotipo, ubicacion, telefono } = req.body;
  
  const negocio = new Negocio({nombre, ubicacion, telefono});

  await negocio.save();

  res.status(201).json({
    negocio
  })
}

const putNegocios = async(req, res = response) => {

  const { id } = req.params;
  const { _id, logotipo, ...resto } = req.body;

  //TODO: si se actuliza ale nombre checar que esta no exista ya en la BD

  const negocio =await Negocio.findByIdAndUpdate( id, resto );

  res.json(negocio)
}

const deleteNegocios = async(req, res = response) => {
  
  const { id } = req.params;

  const negocio =await Negocio.findByIdAndUpdate( id, {estado:false} );

  res.json(negocio);
}

module.exports = {
  getNegocios,
  postNegocios,
  putNegocios,
  deleteNegocios
}