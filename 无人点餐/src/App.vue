<template>
  <div id="app">
    <header>
      <router-link to="/router11">路由11</router-link>

      <router-link to="/router22">路由22</router-link>
      <router-link to="/usercenter">用户中心</router-link>
    </header>

    <router-view></router-view>
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
    <br />
    <v-user></v-user>
    <br />
    <hr />
    <v-home></v-home>
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
    <hr />
    <v-componentchild11></v-componentchild11>
    <br />
    <hr />
    <v-componentchild22></v-componentchild22>

    <br />
    <hr />
    <!-- 父子组件传值 -->

    <hr />
    <br />
    <hr />
    <v-news></v-news>
    <hr />
    <h1>你好VUE ----{{ msg }}</h1>
    <br />这是一个根组件
    <hr />
    <p>{{ obj.name }}</p>

    <hr />
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ index }}+{{ item }}</li>
    </ul>

    <hr />
    <ul>
      <li v-for="(item, index) in list1" :key="index">{{ item.title }}</li>
    </ul>

    <hr />
    <ul>
      <li v-for="(item, index) in list2" :key="index">
        {{ item.cate }}
        <ol>
          <li v-for="(news, index) in item.list" :key="index">{{news.title}}</li>
        </ol>
      </li>
    </ul>

    <hr />
    <div :title="title">这是一个数据绑定</div>
    <hr />
    <p>
      <a :href="url">这是一个超链接</a>
    </p>
    <hr />
    <p v-html="h"></p>
    <p v-text="msg"></p>
    {{msg}}
    <hr />
    <!-- 绑定class -->
    <ui>
      <li
        v-for="(item,index) in list"
        :key="index"
        v-text=" index +item"
        :class="{red :index == 0,blue:index ==1}"
      ></li>
    </ui>
    <hr />
    <div :class="{red:flag,blue:!flag}">
      <p>我是一个class绑定</p>
    </div>

    <hr />
    <!-- 绑定style -->

    <div class="box" :style="{width :widthbox+'px'}">
      <p>我是一个style 绑定</p>
    </div>
    <hr />
    <h1>{{msg}}</h1>
    <input type="text" v-model="msg" />
    <button @click="getMsg()">获取msg</button>
    <button @click="setMsg()">改变数值</button>

    <hr />
    <input type="text" ref="userinfo" />
    <hr />
    <div ref="box">改变字体颜色</div>
    <button @click="getinpuvalue()">获取输入框的值</button>
    <hr />
    <br />
    <button @click="requestdata()">请求数据</button>
    <hr />
    <ui>
      <li v-for="(item,index) in list4" :key="index">{{item}}</li>
    </ui>
    <hr />
    <br />
    <button @click="deleteData('111')">执行方法传值11111</button>

    <br />
    <hr />
    <!-- 执行方法传递事件对象 -->
    <button data-dddd="2223233" @click="eventfu($event)">事件对象</button>

    <br />
    <hr />
    <input type="text" v-model="todo" @keydown="addData($event)" @change="savelist5()" />
    <button @click="addData()">增加</button>
    <hr />
    <ul>
      <li v-for="(item,index) in list5" :key="index">
        {{item.title}}
        <button @click="removeData(index)">删除</button>
      </li>
    </ul>
    <hr />
    <h1>进行中</h1>
    <ul>
      <li v-for="(item,index) in formListing" :key="index">
        <input type="checkbox" v-model="item.checked" />
        {{item.title}}
        <button @click="removeData(index)">删除</button>
      </li>
    </ul>
    <hr />

    <h1>已完成</h1>
    <ul class="finished">
      <li v-for="(item,index) in formListed" :key="index">
        <input type="checkbox" v-model="item.checked" />
        {{item.title}}
        <button @click="removeData(index)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
// 双向数据绑定mvvm  双向数据绑定就是模型改变会影响视图，视图改变会影响模型，而且双向数据绑定必须在表单中使用，表单可以是输入框input
// 或者是selcet  或者是form表单

import storage from "./model/localstorage.js";
import Home from "./components/Home.vue";
import News from "./components/News.vue";
import Componentchild11 from "./components/Componentchild11";
import Componentchild22 from "./components/Componentchild22";
import User from "./components/User";
console.error(storage);
export default {
  // 组件名称
  name: "App",
  data() {
    return {
      msg: "你好Vue",
      widthbox: 300,
      obj: { name: "张三" },
      list: ["1111", "22222", "33333"],
      list4: [],
      list5: [
        { title: "1111", checked: true },
        { title: "2222", checked: false }
      ],
      todo: "",
      list1: [
        {
          title: "zhangsan"
        },
        {
          title: "lisi"
        }
      ],
      list2: [
        {
          cate: "国内",
          list: [{ title: "国内新闻1111" }, { title: "国内新闻22222" }]
        },
        {
          cate: "国际",
          list: [{ title: "国际新闻1111" }, { title: "国际新闻22222" }]
        }
      ],
      title: "这是一个标题",
      url: "https://vuejs.bootcss.com/guide/",
      h: "<h1>我是一个H文字</h1>",
      flag: true
    };
  },
  components: {
    "v-home": Home,
    "v-user": User,
    "v-news": News,
    "v-componentchild11": Componentchild11,
    "v-componentchild22": Componentchild22
  },
  methods: {
    getMsg() {
      alert(this.msg);
    },
    setMsg() {
      this.msg = "这是改变后的数值";
    },
    getinpuvalue() {
      // 获取dom节点
      console.error(this.$refs.userinfo);
      this.$refs.box.style.background = "red";
      alert(this.$refs.userinfo.value);
    },
    requestdata: function() {
      for (var i = 0; i < 10; i++) {
        this.list4.push("我是第" + i + "条数据");
      }
    },
    deleteData(val) {
      alert(val);
    },
    eventfu(e) {
      e.srcElement.style.background = "red";
      console.error(e.srcElement.dataset.dddd);
    },
    addData(e) {
      if (e.keyCode == 13) {
        this.list5.push({ title: this.todo, checked: false });
        this.todo = "";
        localStorage.setItem("hhh", JSON.stringify(this.list5));
      }
    },
    removeData: function(key) {
      this.list5.splice(key, 1);
      // localStorage.setItem("hhh", JSON.stringify(this.list5));
      storage.set("hhh", this.list5);
    },
    savelist5() {
      // localStorage.setItem("hhh", JSON.stringify(this.list5));
      storage.set("hhh", this.list5);
    }
  },
  mounted() {
    console.error("hhhhhhhhhhhhhhhhhhhhhhh");
    // var list55 = JSON.parse(localStorage.getItem("hhh"));
    var list55 = storage.get("hhh");
    if (list55) {
      this.list5 = list55;
    }
  },

  //利用vue的计算属性，过滤掉不需要的数据，剩下需要的数据再利用v-for循环遍历取出渲染
  computed: {
    formListing: function() {
      return this.list5.filter(function(item) {
        if (!item.checked) {
          return item.title;
        }
      });
    },
    formListed: function() {
      return this.list5.filter(function(item) {
        if (item.checked) {
          return item.title;
        }
      });
    }
  }
};
</script>

<style>
.red {
  color: red;
}
.blue {
  color: blue;
}
.box {
  width: 100px;
  height: 100px;
  background-color: red;
}
.finished li {
  background-color: red;
}
header{
  text-align: center;
}
</style>
