<template>
  <div id="app">
    <img src="./assets/logo.png">
   <h1> {{message}}</h1>
    <router-view/>
  </div>
</template>

<script>
// export default {
//   name: 'App'
// }
//导入组件：
// import HelloWorld from './components/HelloWorld'
export default {
  name:'app',
  data(){
    return{
      message:"你大幅度好，欢迎来到VueDemo !"
    }
  }
 
}



</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
