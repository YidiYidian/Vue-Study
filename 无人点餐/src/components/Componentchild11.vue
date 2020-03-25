<template>
  <div>组件11
      <button @click="emitEvent()">给组件22广播数据</button>
  </div>
  
</template>

<script>
import VueEvent from "../model/VueEvent.js";
export default {
  data() {
    return {
      msg: "给组件22广播的数据"
    };
  },
  methods: {
      emitEvent(){
         
         VueEvent.$emit('to-22',this.msg);
      }
  }
};
</script>

<style>
</style>