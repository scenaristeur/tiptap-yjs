<template>
  <div>
  <router-view/>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <IpfsInfo />
 <!-- <OrbitManage /> -->
</div>
</template>

<script>
// @ is an alias to /src
import IpfsInfo from '@/components/IpfsInfo.vue'

export default {
  name: 'HomeView',
  components: {
    IpfsInfo
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

nav {
  padding: 30px;
  text-align: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
