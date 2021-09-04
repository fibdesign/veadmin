<template>
  <nav class="navigation noshadow bg-success">
    <ul>
      <li><i class="fib-menu-lines"></i></li>
<!--      <li><input type="text" placeholder="جستجو..." class="veadminForm"></li>-->
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
//.veadminForm{
//  background-color: unset;
//  border: unset;
//  padding: 10px;
//  color: white;
//  &::placeholder{
//    color: white;
//  }
//}
</style>