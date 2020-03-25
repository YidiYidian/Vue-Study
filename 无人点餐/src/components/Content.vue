<template>
  <div>
    <h1>新闻详情</h1>
    <h1>{{list.title}}</h1>
    <br>
    <div v-html="list.content"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list:[],
      msg: "新闻详情数据",
    };
  },
  methods: {
    requestData(aid) {
      var api =
        "http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid=" + aid;
      this.$http.get(api).then(
        (response) => {
          this.list = response.body.result[0];
          console.error("22222="+response);
        },
        function(error) {
          console.error(error);
        }
      );
    }
  },
  mounted() {
    var aid = this.$route.params.aid;
    console.error("1111111111" + this.$route.params.aid);
    this.requestData(aid);
  }
};
</script>

<style>
</style>