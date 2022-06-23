const planets = require('../../models/planets.models')
const planets = [];

const planetsController = require('./planets.controller');
const planetsRouter = require('./planets.router');

const planetsController = express.Router();

planetsRouter.get('/planets', getAllPlanets);

function getAllPlanets(req, res){
  return res.status(200).json(planets);
}