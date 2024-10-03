<script setup lang="ts">
import pokemonsStore from '../stores/pokemons'
import PokemonCard from '../components/PokemonCard.vue'
import { computed } from 'vue'

const store = pokemonsStore()

store.getPokemons()

const loadMorePokemons = () => {
  store.getPokemons()
}

const pokemons = computed(() => store.pokemonsList)
</script>

<template>
  <main>
    <section>
      <div class="list-container">
        <PokemonCard v-for="pokemon in pokemons" :key="pokemon.id" :pokemon="pokemon" />
      </div>
    </section>
    <button @click="loadMorePokemons">Load more</button>
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  overflow-y: hidden;
  padding: 2rem 0;

  section {
    flex: 1;
    overflow-y: scroll;
    overflow-x: hidden;

    .list-container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      padding: 2rem;
    }
  }

  button {
    margin: 2rem auto;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.5rem;
    background-color: #7aa093;
    color: #ffffff;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
      background-color: #5f7a6e;
    }
  }
}
</style>
