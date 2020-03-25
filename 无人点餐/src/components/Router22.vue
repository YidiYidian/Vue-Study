<template>
  <div>
    <h1>路由22-新闻</h1>
    
    <ul>
      <li v-for="(item,index) in list" :key = 'index'>
        
         <router-link :to = "'/content/'+item.aid"> {{index}}------ {{item.title}}</router-link></li>
    </ul>
    
  </div>
</template>

<script>
export default {
  data(){
    return{
      list:[]
    }
  },
  methods: {
    requestData() {
      var api =
        "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
      this.$http.jsonp(api).then(
        response => {
          this.list = response.body.result;
          console.error(response);
        },
        function(error) {
          console.error(error);
        }
      );
    }
  },
  mounted() {
    this.requestData();
  }

}
</script>

<style>
div {
  color: brown;
}
</style>