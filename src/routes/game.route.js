"use strict";

const express = require("express");
const { Game } = require("../models/index");
const gameRouter = express.Router();

const validator = require('../middleware/validator')

// Getting All Games endpiont
gameRouter.get("/game", getGame);

// Getting one Game endpiont
gameRouter.get("/game/:id", getOneGame);

// Create new Game endpiont
gameRouter.post("/game", createGame);

// Ubdate an exists Game endpiont
gameRouter.put("/game/:id", updateGame);

// Delete Game endpiont
gameRouter.delete("/game/:id", deleteGame);

async function getGame(req, res) {
  const allGames = await Game.findAll();
  res.status(200).json(allGames);
}

async function getOneGame(req, res) {
  let id = parseInt(req.params.id);
  const oneGame = await Game.findOne({
    where: { id: id },
  });
  res.status(200).json(oneGame);
}

async function createGame(req, res, next) {
  const newGameObj = req.body;
  let newGame = await Game.create(newGameObj);
  res.status(201).json(newGame);
}


async function updateGame(req, res) {
  let id = parseInt(req.params.id);
  const updateGameObj = req.body;

  let foundGame = await Game.findOne({ where: { id: id } });
  let updateGame = await foundGame.update(updateGameObj);

  res.status(201).json(updateGame);
}

async function deleteGame(req, res) {
  let id = parseInt(req.params.id);

  let deleteGame = await Game.destroy({ where: { id } });

  res.status(204).json(deleteGame);
}

module.exports = gameRouter;
