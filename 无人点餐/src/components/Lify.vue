<template>
  <div id="life">
    <h1>生命周期的演示</h1>
    {{ msg }}
    <button @click="run()">改变数值</button>
  </div>
</template>

<script>
export default {
  name: "Life",
  data() {
    return {
      msg: "生命周期"
    };
  },
  methods: {
    run() {
      this.msg = "这是改变后的值";
    }
  },
  components: {},
  //   生命周期钩子函数
  beforeCreate() {
    console.error("实例刚刚被创建");
  },
  created() {
    console.error("实例创建完成");
  },
  beforeMount() {
    console.error("模板编译之前");
  },
  mounted() {
    //   请求数据，操作dom
    console.error("模板编译完成");
  },
  beforeUpdate() {
    console.error("数据更新之前");
  },
  updated() {
    console.error("数据更新完成");
  },
  beforeDestroy() {
    console.error("实例销毁之前");
  },
  destroyed() {
    console.error("实例销毁完成");
  }
};
</script>

<style></style>
