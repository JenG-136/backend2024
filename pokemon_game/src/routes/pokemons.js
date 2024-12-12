const {Router} = require('express');
const { getAllPokemons, getPokemonById, get3RandomPokemons, CreatePokemon, updatePokemon, deletePokemon} = require('../controllers/pokemons');

const routes = Router();

routes.get('/', getAllPokemons );
routes.get('/play', get3RandomPokemons );
routes.get('/:id', getPokemonById);
routes.post('/', CreatePokemon);
routes.put('/:id', updatePokemon);
routes.delete('/:id', deletePokemon );

module.exports = routes;