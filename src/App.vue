<template>
	<div id="app">
		<router-view />
	</div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
html,
body {
	width: 100%;
	height: 100%;
	background: #f0f0f0;
	overflow: auto;
	font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial,
		sans-serif;
}
#app {
	width: 100%;
	height: 100%;
}
#nav {
	padding: 30px;
	a {
		font-weight: bold;
		color: #2c3e50;
		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
