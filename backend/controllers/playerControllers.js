import mongoose from "mongoose";
import { PlayerSchema } from "../models/playerModel";

const Player = mongoose.model("Player", PlayerSchema);

export const addNewPlayer = (req, res) => {
  let newPlayer = new Player(req.body);

  newPlayer.save((err, Player) => {
    if (err) {
      res.send(err);
    }
    res.json(Player);
  });
};

export const getPlayers = (req, res) => {
  Player.find({}, (err, Player) => {
    if (err) {
      res.send(err);
    }
    res.json(Player);
  });
};

export const getPlayerwithID = (req, res) => {
  Player.findById(req.params.PlayerID, (err, Player) => {
    if (err) {
      res.send(err);
    }
    res.json(Player);
  });
};

export const updatePlayer = (req, res) => {
  Player.findOneAndUpdate(
    { _id: req.params.PlayerID },
    req.body,
    { new: true },
    (err, Player) => {
      if (err) {
        res.send(err);
      }
      res.json(Player);
    }
  );
};

export const deletePlayer = (req, res) => {
  Player.remove(
    { _id: req.params.PlayerID },

    (err, Player) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "Success to delete player" });
    }
  );
};
