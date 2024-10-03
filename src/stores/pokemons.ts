import { ref } from 'vue'
import { defineStore } from 'pinia'

export default defineStore('pokemonsStore', () => {
  const pokemonsList = ref<{ name: string; url: string }[]>()
  const next = ref(null)

  const getPokemons = async (loadMore = false) => {
    try {
      if (loadMore && !next.value) return
      else if (loadMore) {
        // fetch next page
      }
      const response = await fetch('https://pokeapi.co/api/v2/pokemon').then((res) => res.json())

      pokemonsList.value = response.results

      const getMedia = await fetch('https://pokeapi.co/api/v2/pokemon-color/5/').then((res) =>
        res.json()
      )
      console.log(getMedia)
      // const imagesPromises = pokemonsList.value?.map(({ name }) => {
      //   return new Promise((resolve, reject) => {
      //     fetch(`https://pokeapi.co/media/sprites/items/${name}.jpg`)
      //       .then((res) => res.json())
      //       .then((data) => {
      //         resolve(data)
      //       })
      //       .catch((error) => {
      //         reject(error)
      //       })
      //   })
      // })

      // const imagesResponse = await Promise.all(imagesPromises).then((res) => {
      //   console.log(res)
      // })
    } catch (error) {
      console.error(error)
    }
  }

  return { getPokemons, pokemonsList }
})
