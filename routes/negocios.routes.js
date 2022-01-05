const { Router } = require("express");
const { check } = require("express-validator");

const { validarCampos } = require('../middlewares/validar-campos');
const { nombreNegocioExiste, existeNegociooById } = require('../helpers/db-validator')
const {
  getNegocios,
  postNegocios,
  putNegocios,
  deleteNegocios } = require("../controllers/negocios.controllers");

const router = Router();

router.get("/", getNegocios);

router.post("/",[
  check('nombre', 'El nombre es Obligatorio').not().isEmpty(),
  check('nombre').custom(nombreNegocioExiste),
  check('ubicacion', 'La ubicacion es Obligatoria').not().isEmpty(),
  check('telefono', 'El telefono es obligatorio').not().isEmpty(),
  validarCampos
],postNegocios);

router.put("/:id",[
  check('id', 'No es un ID Valido').isMongoId(),
  check('id').custom( existeNegociooById ),
  check('nombre').custom(nombreNegocioExiste),
  validarCampos
], putNegocios);

router.delete("/:id",[
  check('id', 'No es un ID Valido').isMongoId(),
  check('id').custom( existeNegociooById ),
  validarCampos
],  deleteNegocios);


module.exports = router;
