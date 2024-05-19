<template>
  <div id="app">
    <nav>
      <router-link to="/home">home</router-link> |
      <router-link to="/about">about</router-link>
    </nav>
    <router-view />
  </div>
</template>
<script>
console.log('process.env.BASE_URL==>', process.env.BASE_URL)
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
