var express = require("express");
const {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} = require("../controllers/forms");
const {
  validatorCreateItem,
  validatorGetItem,
} = require("../validators/forms");
var router = express.Router();

/**
 * Lista todos los formularios
 */
router.get("/", getItems);

/**
 * Lista un formulario por ID
 */
router.get("/:id", validatorGetItem, getItem);

/**
 * Crea un nuevo formulario
 */
router.post("/", validatorCreateItem, createItem);

/**
 * Actualizar formulario
 */
router.put("/:id", validatorGetItem, validatorCreateItem, updateItem);

/**
 * Eliminar formulario
 */
router.delete("/:id", validatorGetItem, deleteItem);

module.exports = router;
