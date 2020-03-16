import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/Layout.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "layout",
		component: Layout,
		children: [
			{
				path: "/home",
				name: "home",
				meta: { icon: "md-home" },
				component: () => import("@/views/Home.vue")
			}
		]
	},
	{
		path: "/pages",
		name: "pages",
		meta: {},
		component: Layout,
		children: [
			{
				path: "notfound",
				name: "pages-notfound",
				meta: { title: "未发现", icon: "ios-paper" },
				component: () => import("@/views/pages/notfound.vue")
			},{
				path: "editor",
				name: "pages-editor",
				meta: { title: "富文本", icon: "ios-paper" },
				component: () => import("@/views/pages/editor.vue")
			}
		]
	},
	// {
	// 	path: "/article",
	// 	name: "article",
	// 	meta: { title: "文章管理", icon: "ios-paper" },
	// 	component: Layout,
	// 	children: [
	// 		{
	// 			path: "list",
	// 			name: "article-list",
	// 			meta: { title: "内容列表", icon: "md-list" },
	// 			component: () => import("@/views/article/list.vue")
	// 		},
	// 		{
	// 			path: "add",
	// 			name: "article-add",
	// 			meta: { title: "添加内容", icon: "md-add" },
	// 			component: () => import("@/views/article/add.vue")
	// 		},
	// 		{
	// 			path: "edit/:id(\\d+)",
	// 			name: "article-edit",
	// 			meta: { title: "修改内容" },
	// 			component: () => import("@/views/article/edit.vue")
	// 		}
	// 	]
	// },
	{
		path: "/tag",
		name: "tag",
		meta: { title: "标签管理", icon: "md-pricetag" },
		component: Layout,
		children: [
			{
				path: "list",
				meta: { title: "标签列表", icon: "md-list" },
				name: "tag-list",
				component: () => import("@/views/tag/list.vue")
			},
			{
				path: "add",
				meta: { title: "添加标签", icon: "md-add" },
				name: "tag-add",
				component: () => import("@/views/tag/add.vue")
			}
		]
	},
	{
		path: "/user",
		name: "user",
		meta: { title: "用户管理", icon: "md-person" },
		component: Layout,
		children: [
			{
				path: "list",
				name: "user-list",
				meta: { title: "用户列表", icon: "md-people" },
				component: () => import("@/views/user/list.vue")
			},
			{
				path: "self",
				name: "user-self",
				meta: { title: "个人中心", icon: "md-information" },
				component: () => import("@/views/user/self.vue")
			},
			{
				path: "add",
				name: "user-add",
				meta: { title: "添加用户", icon: "md-person-add" },
				component: () => import("@/views/user/add.vue")
			},
			{
				path: "edit/:id(\\d+)",
				name: "user-edit",
				meta: { title: "修改用户" },
				component: () => import("@/views/user/edit.vue")
			}
		]
	},
	{
		path: "/setting",
		name: "setting",
		meta: { title: "系统设置", icon: "ios-cog-outline" },
		component: Layout,
		children: [
			{
				path: "base",
				meta: { title: "基本设置", icon: "ios-code-working" },
				name: "setting-base",
				component: () => import("@/views/setting/base.vue")
			},
			{
				path: "analytic",
				meta: { icon: "ios-pulse", title: "统计设置" },
				name: "setting-analytic",
				component: () => import("@/views/setting/analytic.vue")
			}
		]
	},
	{
		path: "/login",
		name: "login",
		component: () => import("@/views/Login.vue")
	},
	{
		path: "/setting/register",
		name: "register",
		meta: { icon: "logo-vimeo", title: "用户注册" },
		component: () => import("@/views/user/register.vue")
	},
	{
		path: "/lock",
		name: "lock",
		component: () => import("@/components/layout/base/lock")
	},
	{ path: "/500", name: "500", meta: { title: "500-异常" }, component: () => import("@/components/errors/500.vue") },
	{ path: "/*", name: "404", meta: { title: "404-没发现" }, component: () => import("@/components/errors/404.vue") }
];
const router = new VueRouter({
	mode: "hash",//"history",
	base: process.env.BASE_URL,
	routes
});

export default router;
