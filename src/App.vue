<template>
  <div id="app">
    <h1>Estacionamiento de Empresa</h1>
    <nav>
      <router-link to="/">Inicio</router-link>
      <router-link to="/agregar">Agregar Empleado</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  background-color: #f5f5f5;
  padding: 20px;
}

nav {
  margin-bottom: 20px;
}

nav a {
  margin: 0 15px;
  text-decoration: none;
  color: #2c3e50;
  font-weight: bold;
}

nav a:hover {
  color: #42b983;
}
</style>
