<template>
  <aside class="bg-white hv-100 box-s">

    <h5 class="f-success Logo f-center"><b>Veadmin<sup><small class="f-danger">Panel</small></sup></b></h5>
    <hr>

    <router-link
        v-for="(item, index) in items"
        :key="index"
        :to="{path: item.link}" class="row navlinks">
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
.navlinks{
  align-items: center;
  padding: .5em 1em;
  font-size: 20px;
  p{
    transition: all 0.2s ease-in-out;
  }
  &:hover p{
    color: #009774;
  }
}
.Logo{
  line-height: 2.75rem!important;
}
hr{
  border-color: #f7f7f7;
}
</style>