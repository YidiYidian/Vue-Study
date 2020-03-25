<template>
  <div>
      <h1>这是一个新闻组件</h1>
      <ul>
          <li>11111</li>
          <li>2222</li>
          <li>3333</li>
          <li>4444</li>

      </ul>
      <v-header></v-header>
  </div>
</template>

<script>
import Header from './Header.vue'
export default {
    components:{
        'v-header':Header
    }

}
</script>

<style>

</style>