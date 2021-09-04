<template>
  <div class="row" id="veadmin">
    <sidebar :items="sidebar" class="xcol-info" ref="sidebar"  v-on:sidebar="toggleSidebar"/>
    <main class="xcol-body">
      <navbar :username="username" v-on:sidebar="toggleSidebar"/>
      <div class="p-1"><slot/></div>
    </main>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
export default {
  name: "app",
  components: {Navbar, Sidebar},
  props:['sidebar','username'],
  methods:{
    toggleSidebar(){
      this.$refs.sidebar.$el.classList.toggle('toggleSidebar')
    }
  }
}
</script>

<style scoped>

.xcol-body{
  padding: 0;
}
#veadmin{
  direction: rtl;
  position: relative;
}
@media screen and (max-width: 500px){
  .xcol-info{
    min-width: 250px;
    position: fixed;
    z-index: 99;
    transform: translateX(100%);
    transition: 0.3s ease-in-out;
  }

  .toggleSidebar{
    transform: translateX(0);
  }
}
</style>