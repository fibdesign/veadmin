<template>
  <aside class="bg-white hv-100 box-s">

    <div class="row-c">
      <h5 class="f-success Logo"><b>Veadmin<sup><small class="f-danger">Panel</small></sup></b></h5>
      <div class="sidebarBtn row-c mr-2" @click="$emit('sidebar')">
        <i class="fib-close h6"></i>
      </div>
    </div>
    <hr>

    <router-link
        v-for="(item, index) in items"
        :key="index"
        :to="{path: item.link}" class="row SidebarLink">
      <fib-icon :icon="item.icon"/>
      <p>{{ item.label }}</p>
    </router-link>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
  props:['items']
}
</script>

<style scoped lang="scss">
.SidebarLink{
  align-items: center;
  padding: .5em 1em;
  font-size: 20px;
  cursor: pointer;
  p{  transition: all 0.2s ease-in-out; }
  &:hover p{ color: #009774; }
}
.Logo{
  line-height: 2.75rem!important;
}
hr{
  border-color: #f7f7f7;
}

.sidebarBtn{
  display: none;
  height: 30px;
  width: 30px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover{
    background-color: #00000015;
  }
}
@media screen and (max-width: 500px){
  .sidebarBtn{display: block}
}
</style>