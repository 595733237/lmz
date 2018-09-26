<template>
  <div id="app">
    <div id="nav">
    	<div class="row">
    			<label><i class="el-icon-question"></i ><strong> 问卷管理</strong></label>
    			<router-link to="/">我的问卷</router-link>
    	</div>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 20px ;
  color: black;
}
.row label{
	color: #FFFFFF;
}
#nav {
  padding: 10px;
  padding-left: 100px ;
  width: 100%;
  background: #EE7419;
}

#nav a {
  color: #FFFFFF;
  padding-left: 100px;
}

#nav a.router-link-exact-active {
  color: #FFFFFF;
}
</style>
