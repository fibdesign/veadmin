<template>
  <nav class="navigation noshadow bg-success">
    <ul>
      <li><div class="sidebarBtn row-c" @click="$emit('sidebar')"><i class="fib-menu-lines"></i></div></li>
    </ul>
    <ul class="mr-auto">
      <li class="row-c">
        <p>{{ username }}</p>
<!--        <i class="fib-chevron-down"></i>-->
      </li>
      <li><a href="/logout"><i class="fib-power"></i></a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props:['username']
}
</script>

<style scoped lang="scss">

nav *{
  color: white!important;
}
.sidebarBtn{
  display: none;
  height: 30px;
  width: 30px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover{
    background-color: #ffffff15;
  }
}
@media screen and (max-width: 500px){
  .sidebarBtn{display: block}
}
</style>