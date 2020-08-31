import {
  addNewPlayer,
  getPlayers,
  getPlayerwithID,
  updatePlayer,
  deletePlayer,
} from "../controllers/playerControllers";

const routes = (app) => {
  app
    .route("/players")
    // get-endpoints
    .get(getPlayers)
    // POST endpoint
    .post(addNewPlayer);

  app
    .route("/player/:PlayerID")
    // get specific player
    .get(getPlayerwithID)
    // update specific player
    .put(updatePlayer)
    // update specific player
    .delete(deletePlayer);
};

export default routes;
