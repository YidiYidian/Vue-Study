<template>
  <div>组件22</div>
</template>

<script>
import VueEvent from "../model/VueEvent.js";
export default {
  data(){
    return{

    }
  },
  methods:{

  },
  mounted(){
    VueEvent.$on('to-22',function(data){
      alert(data)

    })
  }

}
</script>

<style>

</style>