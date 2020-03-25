<template>
  <div>
    
    <h6>这是一个头部组件</h6>
    <button @click="getparentdata()">获取父组件的内容</button>
    <h6>{{title}}</h6>
    <button @click="run('123')">执行父组件的方法</button>
    <button @click="getparent()">获取父组件的数据和方法</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mss:'我是子组件的数据'
    };
  },
  methods:{
    getparent(){
      alert(this.home.msg);
      this.home.run();

    },
    run2(){
      alert('我是子组件的方法')
    },
    getparentdata(){
      alert(this.$parent.msg) 
    }
  },
  props: ["title",'run','home']
};
</script>

<style  scoped>
div {
  color: red;
}
</style>