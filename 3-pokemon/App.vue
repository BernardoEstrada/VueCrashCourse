<template>
  <pokemon-cards
    :pokemons="pokemons"
    :selectedId="selectedId"
    @chosen="fetchEvolutions"
  />
  <br />
  <pokemon-cards
    :pokemons="evolutions"
  />
</template>

<script>
import PokemonCards from './PokemonCards.vue'
const api = 'https://pokeapi.co/api/v2/pokemon'
const IDS = [1, 4, 7]

export default {
  components: {
    PokemonCards
  },
  data () {
    return {
      pokemons: [],
      evolutions: [],
      selectedId: null,
    }
  },
  async created () {
    this.pokemons = await this.fetchData(IDS)
  },
  methods: {
    async fetchData(ids) {
      const responses = await Promise.all(
        ids.map(id => window.fetch(`${api}/${id}`))
      )
      const json = await Promise.all(responses.map(data=>data.json()))

      return json.map(datum => ({
        name: datum.name,
        id: datum.id,
        sprite: datum.sprites.other['official-artwork'].front_default,
        types: datum.types.map(type => type.type.name),
      }))
    },
    async fetchEvolutions(pokemon) {
      if(this.selectedId === pokemon.id) {
        this.selectedId = null
        this.evolutions = []
        return;
      }
      this.evolutions = await this.fetchData(
        [pokemon.id + 1, pokemon.id + 2]
      )
      this.selectedId = pokemon.id
    }
  },
}
</script>

<style scoped>
</style>