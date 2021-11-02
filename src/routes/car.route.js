"use strict";

const express = require("express");
const { Car } = require("../models/index");
const carRouter = express.Router();

const validator = require('../middleware/validator')

// Getting All cars endpiont
carRouter.get("/car", getCar);

// Getting one car endpiont
carRouter.get("/car/:id", getOneCar);

// Create new car endpiont
carRouter.post("/car", validator, createCar);

// Ubdate an exists car endpiont
carRouter.put("/car/:id", validator, updateCar);

// Delete car endpiont
carRouter.delete("/car/:id", deleteCar);

async function getCar(req, res) {
  const allCars = await Car.findAll();
  res.status(200).json(allCars);
}

async function getOneCar(req, res) {
  let id = parseInt(req.params.id);
  const oneCar = await Car.findOne({
    where: { id: id },
  });
  res.status(200).json(oneCar);
}

async function createCar(req, res, next) {
  const newCarObj = req.body;
  let newCar = await Car.create(newCarObj);
  res.status(201).json(newCar);
}


async function updateCar(req, res) {
  let id = parseInt(req.params.id);
  const updateCarObj = req.body;

  let foundCar = await Car.findOne({ where: { id: id } });
  let updateCar = await foundCar.update(updateCarObj);

  res.status(201).json(updateCar);
}

async function deleteCar(req, res) {
  let id = parseInt(req.params.id);

  let deleteCar = await Car.destroy({ where: { id } });

  res.status(204).json(deleteCar);
}

module.exports = carRouter;
