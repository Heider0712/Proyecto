const { response } = require("express");

const Proyecto = require("../models/proyecto");

const proyectoGet = async (req, res = response) => {
  const proyectos = await Proyecto.find();

  res.json({
    proyectos,
  });
};

const proyectoPost = async (req, res) => {
  const body = req.body;
  let mensaje = "proyecto creado.";

  try {
    const proyecto = new Proyecto(body);
    await proyecto.save();
  } catch (error) {
    mensaje = "Problemas al crear el proyecto.";
    console.log(error);
  }
  res.json({
    msg: mensaje,
  });

}
const proyectoPut = async (req, res) => {
  const { _id, nombre, horasDedicadas, valorProyecto, numeroIntegrantes } = req.body;
  let mensaje = "Modificación exitosa";

  try {
    await Proyecto.findOneAndUpdate({ _id: _id }, { nombre: nombre, horasDedicadas: horasDedicadas, valorProyecto: valorProyecto, numeroIntegrantes: numeroIntegrantes });
  } catch (error) {
    mensaje = "Problemas al modificar";
    console.log(error);
  }
  res.json({
    msg: mensaje,
  });
};

const proyectoDelete = async (req, res = response) => {
  const { _id } = req.body;
  let mensaje = "Eliminación exitosa";
  try {
    await Proyecto.deleteOne({ _id: _id });
  } catch (error) {
    mensaje = "Problemas al eliminar";
    console.log(error);
  }
  res.json({
    msg: mensaje,
  });
};

module.exports = { proyectoGet, proyectoPost, proyectoPut, proyectoDelete };


//terremotos: fecha, magnitud, ubicacion