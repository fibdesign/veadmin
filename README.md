# Veadmin
An admin panel based on Vue.js


# Requirement
* [Vue 2](https://vuejs.org/)
* [Vue-Router](https://router.vuejs.org/)
* [MaxUp](maxup.fibdesign.ir)

# Getting Start
- you can install via `github` or `npm`
```bash
git clone https://github.com/fibdesign/veadmin.git
```
or
```bash
npm i fib-veadmin
```

- import veadmin into your project and use it as plugin:
```js
import veadmin from 'fib-veadmin'
Vue.use(veadmin)
```

- simply use it in your `app` component
```vue
<template>
  
  <veadmin username="Your Name" :sidebar="sidebarItems">
    <router-view/>
  </veadmin>
  
</template>

<script>
export default {
  data(){
    return{
      sidebarItems:[
        { icon: 'fib-dashboard', label: 'میز کار', link: '/' },
        { icon: 'fib-pen', label: 'وبلاگ', link: '/blog' },
        { icon: 'fib-comments', label: 'نظرات', link: '/comments' },
        { icon: 'fib-list', label: 'ویژگی ها', link: '/properties' },
        { icon: 'fib-email', label: 'پیام ها', link: '/messages' },
        { icon: 'fib-bag', label: 'شرکت ها', link: '/companies' },
      ]
    }
  }
}
</script>
```
# warning
This plugin using a font icon that use `fib-iconName` class.