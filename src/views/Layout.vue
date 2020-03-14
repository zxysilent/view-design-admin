<template>
	<div class="app-wrapper" :class="{hideSidebar:!state.sidebar.opened,hoverSideBar:state.sidebar.minOpen}">
		<!-- 左侧 -->
		<div class="side-wrapper" :class="{hover:!state.sidebar.minOpened,light:theme=='light'}">
			<!-- logo -->
			<div style="height:50px;" class="logo-box">
				<img :src="require('@/assets/img/logo.png')" alt="" height="50" v-show="state.sidebar.opened">
				<img src="https://file.iviewui.com/dist/76ecb6e76d2c438065f90cd7f8fa7371.png" alt="" height="40" width="40" style="position: absolute;top: 5px;left: 0" v-show="!state.sidebar.opened">
			</div>
			<!-- logo /-->
			<!-- 左侧导航 -->
			<navbar style="padding-bottom: 80px">
				<Menu width="220" :theme="theme" :accordion="true" :active-name="$route.name" :open-names="$route.name.split('-')">
					<MenuItem name="home" to="/home">
					<Icon type="md-home" />管理主页
					</MenuItem>
					<!-- <div v-for="(item,index) in menu " :key="index">
						<Submenu :name="index" v-if="item.children && item.children.length>0 && !item.hidden">
							<template slot="title">
								<Icon :type="item.icon?item.icon:''" />
								{{item.name}}
							</template>
							<Menu-item :name="sub.path" v-for="(sub,i) in item.children" :key="i" v-if="!sub.hidden">
								<Icon type="ios-attach" />
								{{sub.name}}
							</Menu-item>
						</Submenu>
						<div>
							<Menu-item :name="item.path" :key="index" v-if="item.children.length==0 && !item.hidden && item.level!=0 ">
								<Icon :type="item.icon?item.icon:''" />
								{{item.name}}
							</Menu-item>
						</div>
					</div>-->
					<template v-for="item in menu">
						<Submenu v-if="item.children" :name="item.name" :key="item.name">
							<template slot="title">
								<Icon :type="item.meta.icon"></Icon>
								{{item.meta.title}}
							</template>
							<MenuItem :name="itm.name" v-for="itm in item.children" :to="{name:itm.name}" :key="itm.name">
							<Icon :type="itm.meta.icon"></Icon>{{itm.meta.title}}
							</MenuItem>
						</Submenu>
						<MenuItem v-else :name="item.name" :to="{name:item.name}" :key="item.name">
						<Icon :type="item.meta.icon"></Icon>
						{{item.meta.title}}
						</MenuItem>
					</template>
				</Menu>

			</navbar>
			<div class="theme-switch" :class="{hidden:!state.sidebar.opened}">
				Switch Theme
				<i-switch size="large" @on-change="themeChange" v-model="themeBool">
					<span slot="open">Dark</span>
					<span slot="close">Light</span>
				</i-switch>
			</div>
			<!-- 左侧导航 /-->
		</div>
		<!-- 左侧 /-->
		<!-- 主体 -->
		<div class="main-wrapper">
			<!-- 头部 -->
			<Headers>
				<!-- 用户信息 -->
				<Dropdown class="userBox" slot='right'>
					<a href="javascript:void(0)">
						Artiely
						<Icon type="md-arrow-dropdown" />
					</a>
					<Dropdown-menu slot="list">
						<Dropdown-item @click.native="checkUser">个人信息</Dropdown-item>
						<Dropdown-item @click.native="logout">退出登录</Dropdown-item>
						<Dropdown-item @click.native="lock">锁定屏幕</Dropdown-item>
					</Dropdown-menu>
				</Dropdown>
				<!-- 用户信息 /-->
				<div class="messageBox" slot='msg-icon'>
					<Row>
						<Col :xs='{span:0}' :sm='{span:24}'>
						<div class="iconBox">
							<Badge :count="3">
								<Tooltip placement="bottom" content="通知">
									<Icon type="ios-notifications" />
								</Tooltip>
							</Badge>
						</div>
						</Col>
					</Row>
				</div>
			</Headers>
			<!-- 头部 /-->
			<!-- 内容部分 -->
			<div class="main-container">
				<container>
					<!-- 路由 -->
					<transition name="fade" mode="out-in">
						<router-view></router-view>
					</transition>
					<!-- 路由/ -->
				</container>
			</div>
			<!-- 内容部分 /-->
		</div>
		<!-- 主体 /-->
	</div>
</template>
<script>
import Headers from "@/components/layout/headers/Headers";
import Navbar from "@/components/layout/navbar/Navbar";
import Container from "@/components/layout/container/Container";
import menu from "@/router/menu";
import Cookies from "js-cookie";

export default {
	name: "full",
	components: {
		Headers,
		Navbar,
		Container
	},
	data() {
		const validatePass = (rule, value, callback) => {
			let password = Cookies.get("token");
			if (value === "") {
				callback(new Error("请输入密码"));
			} else if (value !== password) {
				callback(new Error("密码错误"));
			} else {
				callback();
			}
		};
		return {
			theme: "dark", // 主题
			themeBool: true,
			formValidate: {
				check_password: ""
			},
			menu: menu, // 导航菜单
			ruleValidate: {
				check_password: [
					{
						validator: validatePass,
						trigger: "blur"
					}
				]
			}
		};
	},
	created() {
		if (Cookies.getJSON("menu")) {
			this.menu = Cookies.getJSON("menu");
		}
		this.lang = this.$store.state.app.lang;
	},
	computed: {
		state() {
			return this.$store.state.app;
		}
	},
	mounted() {},
	methods: {
		// 查看个人信息密码验证
		checkUser(name) {
			this.$router.push({ name: "user-self" });
		},
		/**
		 *退出
		 */
		logout() {
			Cookies.remove("token");
			this.$router.push("/login");
			this.$Message.success("退出成功");
		},
		themeChange(state) {
			if (state) {
				this.theme = "dark";
			} else {
				this.theme = "light";
			}
		},
		lock() {
			// 设置为锁定
			this.$store.commit("SET_LOCK", "1");
			// 获取当前的页面path
			console.log(this.$route.path);
			this.$store.commit("SET_LOCK_PAGE", this.$route.path);
			this.$router.push("/lock");
		}
	}
};
</script>



