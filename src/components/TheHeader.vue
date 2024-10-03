<script setup lang="ts"></script>

<template>
  <header>
    <h1>Pokedex</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  background-color: #7aa093;
  padding: 1rem 2rem;

  nav {
    display: flex;
    gap: 1rem;
    align-items: center;

    a {
      text-decoration: none;
      color: #2c3e50;
      font-size: 1rem;
      font-weight: 400;
      padding: 0.2rem 0.4rem;
      border-radius: 0.2rem;

      &:hover {
        background-color: #a9c9bc;
      }
    }

    .router-link-active {
      background-color: #a9c9bc;
      font-weight: 500;
    }
  }
}
</style>
