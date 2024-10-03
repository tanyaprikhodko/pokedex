<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  pokemon: Object
})

const imgUrl = `https://img.pokemondb.net/artwork/large/${props.pokemon.name}.jpg`
</script>

<template>
  <div>
    {{ pokemon.name }}
    <img :src="imgUrl" height="100px" alt="pokemoncard" />
  </div>
</template>

<style scoped lang="scss">
div {
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  background-color: #fff;

  img {
    display: block;
    margin: 0 auto;
  }

  &:hover {
    border: 1px solid #7aa093;
    transform: scale(1.09);
  }
}
</style>
