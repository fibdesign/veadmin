<template>
  <div class="row" id="veadmin">
    <sidebar :items="sidebar" class="xcol-info"/>
    <main class="xcol-body">
      <navbar :username="username"/>
      <div class="p-1"><slot/></div>
    </main>
  </div>
</template>

<script>
import Sidebar from "@/plugins/veadmin/components/Sidebar";
import Navbar from "@/plugins/veadmin/components/Navbar";
export default {
  name: "app",
  components: {Navbar, Sidebar},
  props:['sidebar','username']
}
</script>

<style scoped>

.xcol-body{
  padding: 0;
}
#veadmin{
  direction: rtl;
}
</style>