<template>
  <div>
    <h1>路由111--商品</h1>
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <!-- get请求 -->
        <!-- <router-link :to="'/product?aid = '+item.aid">{{index}}------ {{item.title}}</router-link> -->
        <!-- 路由请求 -->
        <router-link :to="'/product/'+index">{{index}}------ {{item}}</router-link>
        
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ["商品11111","商品22222","商品33333",]
    };
  },
  methods: {
    
  },
  mounted() {
  }
};
</script>

<style>
div {
  color: brown;
}
</style>