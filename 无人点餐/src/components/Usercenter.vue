<template>
  <div id="usercenterid">
    <div class="usercenter">
      <div class="left">
        <ul >
          <li>
            
            <router-link to="/usercenter/useradd">增加用户</router-link>
            </li>
          <li>
            <router-link to="/usercenter/userlist">用户列表</router-link></li>
        </ul>
      </div>
      <div class="right">
        内容区域
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scopde>
.usercenter .left{
  display: flex;
  min-height: 400px;
  border-right:1px solid brown;
}
.usercenter .right{
  display: flex;
  flex: 1;}
</style>