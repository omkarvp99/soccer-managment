import express from "express";
import mongoose, { mongo } from "mongoose";
import bodyparser from "body-parser";
import cors from "cors";
import routes from "./routes/soccerRoutes";

const app = express();
const Port = 4000;

// Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/soccerDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// body-parser setup
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// CORS setup
app.use(cors());

routes(app);

app.get("/", (req, res) => res.send(`our soccer app is runing ${Port}`));
app.listen(Port, () => console.log(`soccer app is runing ${Port}`));
