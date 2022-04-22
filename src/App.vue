<template>
  <div id="app">
    <div id="nav">
      <ul>
        <li><router-link to="/">HTML</router-link></li>
        <li><router-link to="/CSS">CSS</router-link></li>
        <li><router-link to="/Bootstrap">Bootstrap</router-link></li>
        <li><router-link to="/JQuery">JQuery</router-link></li>
        <li><router-link to="/JavaScript">JavaScript</router-link></li>
        <li><router-link to="/Git">MYSQL</router-link></li>
        <li><router-link to="/PHP">PHP</router-link></li>
        <li><router-link to="/VueJs">Vue js</router-link></li>
        <li><router-link to="/Git">Git</router-link></li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: #0c2461;
}

#nav {
  padding: 30px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 11;
  width: 100%;
  background-color: #0C2461;

  a {
    font-weight: bold;
    color: white;
    text-decoration-line: none;
    font-size: 25px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  ul{
    list-style-type: none;
    justify-content: center;
    align-items: center;
    display: flex;
    li{
      margin: 0 50px;
    }
  }
}
</style>
