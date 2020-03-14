const menu = [
	// {
	// {
	// 	path: "/chart",
	// 	name: "chart",
	// 	component: Chart,
	// 	meta: {}
	// },
	// {
	// 	path: "/list",
	// 	name: "list",
	// 	component: List,
	// 	meta: {}
	// },
	// {
	// 	path: "/userInfo",
	// 	name: "userInfo",
	// 	component: UserInfo,
	// 	icon: "icon-addpeople_fill",
	// 	meta: {}
	// },
	// {
	// 	path: "/table",
	// 	name: "table",
	// 	component: Table,
	// 	meta: {}
	// },
	// },
	// {
	// 	path: "/article",
	// 	name: "article",
	// 	meta: { title: "文章管理", icon: "ios-paper" },
	// 	children: [
	// 		{
	// 			path: "list",
	// 			name: "article-list",
	// 			meta: { title: "内容列表", icon: "md-list" }
	// 		},
	// 		{
	// 			path: "add",
	// 			name: "article-add",
	// 			meta: { title: "添加内容", icon: "md-add" },
	// 			component: () => import("@/views/article/add.vue")
	// 		}
	// 	]
	// },
	{
		path: "/pages",
		name: "pages",
		meta: {title:"页面集合",icon:"ios-hammer"},
		children: [
			{
				path: "notfound",
				name: "pages-notfound",
				meta: { title: "未发现", icon: "ios-paper" }
			},
			{
				path: "editor",
				name: "pages-editor",
				meta: { title: "富文本", icon: "ios-paper" }
			}
		]
	},
	{
		path: "/tag",
		name: "tag",
		meta: { title: "标签管理", icon: "md-pricetag" },
		children: [
			{
				path: "list",
				meta: { title: "标签列表", icon: "md-list" },
				name: "tag-list"
			},
			{
				path: "add",
				meta: { title: "添加标签", icon: "md-add" },
				name: "tag-add"
			}
		]
	},
	{
		path: "/user",
		name: "user",
		meta: { title: "用户管理", icon: "md-person" },
		children: [
			{
				path: "list",
				name: "user-list",
				meta: { title: "用户列表", icon: "md-people" }
			},
			{
				path: "add",
				name: "user-add",
				meta: { title: "添加用户", icon: "md-person-add" }
			}
		]
	},
	{
		path: "/setting",
		name: "setting",
		meta: {
			title: "系统设置",
			icon: "ios-cog-outline"
		},
		children: [
			{
				path: "base",
				meta: { title: "基本设置", icon: "ios-code-working" },
				name: "setting-base"
			},
			{
				path: "analytic",
				meta: { icon: "ios-pulse", title: "统计设置" },
				name: "setting-analytic"
			},
			{
				path: "register",
				meta: { title: "用户注册", icon: "logo-vimeo" },
				name: "register"
			}
		]
	},

	{ path: "/500", name: "500", meta: { title: "500-异常", icon: "ios-bug" } },
	{ path: "/*", name: "404", meta: { title: "404-没发现", icon: "md-bug" } }
];
export default menu;
