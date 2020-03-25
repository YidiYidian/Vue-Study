<template>
  <div id="home">
    <button @click="gonews()">通过JavaScript实现新闻页面跳转</button>

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <button @click="getchild()">获取子组件的方法和数据</button>
    <hr />
    <br />
    {{ msg }}
    <h1>这是一个home组件</h1>
    <v-header :title="msg" :run="run" :home="this"></v-header>
    <hr />
    <br />
    <br />
    <br />
    <br />
    <br />

    <button @click="getData2()">axios请求数据</button>
    <ul>
      <li v-for="(item,index) in list2" :key="index">{{item.title}}</li>
    </ul>
    <br />
    <hr />
    <button @click="getData()">请求数据</button>
    <ul>
      <li v-for="(item,index) in list" :key="index">{{item.title}}</li>
    </ul>
    <br />
    <v-header ref="header"></v-header>
    <v-lify v-if="flag"></v-lify>
    <button @click="flag = !flag">挂载和销毁组件</button>
    <br />
    {{ msg }}
    <h1>这是一个home组件</h1>
    <button @click="run()">点击事件</button>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Lify from "./Lify.vue";
import Axios from "axios";

export default {
  name: "home",
  data() {
    return { list: [], list2: [], flag: true, msg: "这个是home主页的内容" };
  },
  methods: {
    run(data) {
      alert("this.msg" + data);
    },
    getData() {
      // 请求数据
      var api =
        "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
      // this.$http.get(api).then(function(response){
      //     console.log(response)
      //     },function(error){
      //         console.error(error)
      //         })
      this.$http.get(api).then(
        response => {
          this.list = response.body.result;
          console.log(response);
        },
        function(error) {
          console.error(error);
        }
      );
    },
    gonews(){
      // 动态路由跳转
      // this.$router.push({path:'router22'});
      // 匿名路由跳转
       this.$router.push({name:'Router22'});


    },
    getData2() {
      // 请求数据
      var api =
        "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
      // this.$http.get(api).then(function(response){
      //     console.log(response)
      //     },function(error){
      //         console.error(error)
      //         })
      Axios.get(api)
        .then(response => {
          this.list2 = response.data.result;
          console.log(response);
        })
        .catch(error => {
          console.error(error);
        });
    },
    getchild() {
      // alert( this.$refs.header.mss)
      this.$refs.header.run2();
    }
  },
  components: {
    "v-header": Header,
    "v-lify": Lify
  },
  mounted() {
    this.getData();
  }
};
</script>

<style scoped>
/* #home h1 {
  color: red;
} */
#home h1 {
  color: red;
}
</style>
