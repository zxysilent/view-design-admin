<template>
	<Card dis-hover>
		<p slot="title">
			<Icon type="md-person" /> 用户列表
		</p>
		<Form inline>
			<FormItem>
				<Select v-model="page.mult" placeholder="请选择" style="width:200px">
					<Option value="beijing">New York</Option>
					<Option value="shanghai">London</Option>
					<Option value="shenzhen">Sydney</Option>
				</Select>
			</FormItem>
			<FormItem>
				<Button type="primary" @click="search">查&nbsp;询</Button>
			</FormItem>
		</Form>
		<Table size="small" border :columns="tabCol" :data="tabData"></Table>
		<br>
		<Page :total="page.total" :current.sync="page.pi" :page-size="page.ps" :page-size-opts="[10,12,15]" @on-change="piChange" @on-page-size-change="psChange" show-sizer show-elevator show-total></Page>
	</Card>
</template>
<script>
// import { apiArticlePage, admArticleDrop } from "@/api/article";
// import { admUserPage, admUserDrop, admUserReset, admUserChgAtv } from "@/api/user";
export default {
	data() {
		return {
			page: { pi: 1, ps: 12, mult: "", total: 0 },
			tabCol: [
				{ type: "index", width: 60, align: "center" },
				{ title: "登录账号", key: "num", width: 200 },
				{ title: "用户名", width: 280, key: "name" },
				{
					title: "用户角色",
					minWidth: 150,
					render: (h, data) => {
						if (data.row.role == 512) {
							return h("div", "市局管理员");
						} else if (data.row.role == 256) {
							return h("div", "企业管理员");
						} else if (data.row.role == 128) {
							return h("div", "设备管理员");
						}
					}
				},
				{ title: "用户电话", width: 150, key: "phone" },
				{ title: "用户邮箱", width: 150, key: "email" },
				// {
				// 	title: "状态",
				// 	width: 100,
				// 	key: "istop",
				// 	render: (h, data) => {
				// 		let taht = this;
				// 		return h(
				// 			"i-switch",
				// 			{
				// 				props: { value: this.getRole(40), size: "large" },
				// 				on: {
				// 					"on-change": function(val) {
				// 						admUserChgAtv({ id: data.row.id, flag: val }).then(resp => {
				// 							if (resp.code != 200) {
				// 								taht.$Message.error({
				// 									content: "状态修失败",
				// 									onClose: () => {
				// 										taht.init();
				// 									}
				// 								});
				// 							}
				// 						});
				// 					}
				// 				}
				// 			},
				// 			[
				// 				h("span", {
				// 					slot: "open",
				// 					domProps: {
				// 						innerHTML: "启用"
				// 					}
				// 				}),
				// 				h("span", {
				// 					slot: "close",
				// 					domProps: {
				// 						innerHTML: "禁用"
				// 					}
				// 				})
				// 			]
				// 		);
				// 	}
				// },
				{
					title: "创建日期",
					width: 150,
					render: (h, data) => {
						return h("div", data.row.ctime.replace(/T|\+08:00/g, " "));
					}
				},
				{
					title: "操作",
					key: "action",
					width: 120,
					align: "center",
					render: (h, data) => {
						return h("a", [
							h(
								"Poptip",
								{
									props: { confirm: true, title: "确定要重置密码吗？" },
									on: {
										"on-ok": () => {
											admUserReset(data.row.id).then(resp => {
												if (resp.code != 200) {
													this.$Message.error(resp.msg);
												}
											});
										}
									}
								},
								[
									h("Icon", {
										props: { type: "md-refresh", size: "20", color: "#2F4056" },
										attrs: { title: "重置密码" },
										style: { marginRight: "10px" }
									})
								]
							),
							h("Icon", {
								props: { type: "md-create", size: "20", color: "#FFB800" },
								attrs: { title: "修改" },
								style: { marginRight: "10px" },
								on: {
									click: () => {
										this.$router.push({
											name: "user-edit",
											params: { id: data.row.id }
										});
									}
								}
							}),
							h(
								"Poptip",
								{
									props: { confirm: true, title: "确定要删除吗？" },
									on: {
										"on-ok": () => {
											admUserDrop(data.row.id).then(resp => {
												if (resp.code == 200) {
													this.$Message.success({
														content: "删除成功",
														onClose: () => {
															this.tabData.splice(data.index, 1);
														}
													});
												} else {
													this.$Message.error(resp.msg);
												}
											});
										}
									}
								},
								[
									h("Icon", {
										props: { type: "ios-trash", size: "20", color: "#FF5722" },
										attrs: { title: "删除" }
									})
								]
							)
						]);
					}
				}
			],
			tabData: [
				{
					id: 79,
					eid: 74,
					name: "深圳市中保亚太保安服务",
					num: "深圳市中保亚太保安服务",
					nick: "",
					openid: "",
					avatar: "",
					phone: "",
					email: "",
					city: "",
					role: 256,
					auth: 0,
					state: 0,
					ltime: "2020-03-10T10:02:51+08:00",
					utime: "2020-03-10T10:02:51+08:00",
					ctime: "2020-03-10T10:02:51+08:00"
				},
				{
					id: 78,
					eid: 73,
					name: "四川奥兰多化工",
					num: "四川奥兰多化工",
					nick: "",
					openid: "",
					avatar: "",
					phone: "",
					email: "",
					city: "",
					role: 256,
					auth: 0,
					state: 0,
					ltime: "2020-03-10T10:02:42+08:00",
					utime: "2020-03-10T10:02:42+08:00",
					ctime: "2020-03-10T10:02:42+08:00"
				},
				{
					id: 77,
					eid: 72,
					name: "莱克施德（）药业",
					num: "莱克施德（）药业",
					nick: "",
					openid: "",
					avatar: "",
					phone: "",
					email: "",
					city: "",
					role: 256,
					auth: 0,
					state: 0,
					ltime: "2020-03-10T10:02:30+08:00",
					utime: "2020-03-10T10:02:30+08:00",
					ctime: "2020-03-10T10:02:30+08:00"
				},
				{
					id: 76,
					eid: 71,
					name: "四川杰晟蜀邦树脂",
					num: "四川杰晟蜀邦树脂",
					nick: "",
					openid: "",
					avatar: "",
					phone: "",
					email: "",
					city: "",
					role: 256,
					auth: 0,
					state: 0,
					ltime: "2020-03-10T10:02:18+08:00",
					utime: "2020-03-10T10:02:18+08:00",
					ctime: "2020-03-10T10:02:18+08:00"
				},
				{
					id: 75,
					eid: 70,
					name: "三丁能源",
					num: "三丁能源",
					nick: "",
					openid: "",
					avatar: "",
					phone: "",
					email: "",
					city: "",
					role: 256,
					auth: 0,
					state: 0,
					ltime: "2020-03-10T10:02:02+08:00",
					utime: "2020-03-10T10:02:02+08:00",
					ctime: "2020-03-10T10:02:02+08:00"
				},
				{
					id: 74,
					eid: 69,
					name: "阳光俊和",
					num: "阳光俊和",
					nick: "",
					openid: "",
					avatar: "",
					phone: "",
					email: "",
					city: "",
					role: 256,
					auth: 0,
					state: 0,
					ltime: "2020-03-10T10:01:50+08:00",
					utime: "2020-03-10T10:01:50+08:00",
					ctime: "2020-03-10T10:01:50+08:00"
				},
				{
					id: 73,
					eid: 68,
					name: "江苏强达建设工程",
					num: "江苏强达建设工程",
					nick: "",
					openid: "",
					avatar: "",
					phone: "",
					email: "",
					city: "",
					role: 256,
					auth: 0,
					state: 0,
					ltime: "2020-03-10T10:01:26+08:00",
					utime: "2020-03-10T10:01:26+08:00",
					ctime: "2020-03-10T10:01:26+08:00"
				},
				{
					id: 72,
					eid: 67,
					name: "多利商贸",
					num: "多利商贸",
					nick: "",
					openid: "",
					avatar: "",
					phone: "",
					email: "",
					city: "",
					role: 256,
					auth: 0,
					state: 0,
					ltime: "2020-03-10T10:01:12+08:00",
					utime: "2020-03-10T10:01:12+08:00",
					ctime: "2020-03-10T10:01:12+08:00"
				},
				{
					id: 71,
					eid: 66,
					name: "四川泰禾化工",
					num: "四川泰禾化工",
					nick: "",
					openid: "",
					avatar: "",
					phone: "",
					email: "",
					city: "",
					role: 256,
					auth: 0,
					state: 0,
					ltime: "2020-03-10T10:00:52+08:00",
					utime: "2020-03-10T10:00:52+08:00",
					ctime: "2020-03-10T10:00:52+08:00"
				},
				{
					id: 70,
					eid: 65,
					name: "联盛新材料",
					num: "联盛新材料",
					nick: "",
					openid: "",
					avatar: "",
					phone: "",
					email: "",
					city: "",
					role: 256,
					auth: 0,
					state: 0,
					ltime: "2020-03-10T10:00:41+08:00",
					utime: "2020-03-10T10:00:41+08:00",
					ctime: "2020-03-10T10:00:41+08:00"
				},
				{
					id: 69,
					eid: 64,
					name: "兴平药品零售连锁嘉陵",
					num: "兴平药品零售连锁嘉陵",
					nick: "",
					openid: "",
					avatar: "",
					phone: "",
					email: "",
					city: "",
					role: 256,
					auth: 0,
					state: 0,
					ltime: "2020-03-10T10:00:31+08:00",
					utime: "2020-03-10T10:00:31+08:00",
					ctime: "2020-03-10T10:00:31+08:00"
				},
				{
					id: 68,
					eid: 63,
					name: "维乐高进出口",
					num: "维乐高进出口",
					nick: "",
					openid: "",
					avatar: "",
					phone: "",
					email: "",
					city: "",
					role: 256,
					auth: 0,
					state: 0,
					ltime: "2020-03-10T10:00:18+08:00",
					utime: "2020-03-10T10:00:18+08:00",
					ctime: "2020-03-10T10:00:18+08:00"
				}
			]
		};
	},
	methods: {
		init() {
			// admUserPage(this.page).then(resp => {
			// 	if (resp.code == 200) {
			// 		this.tabData = resp.data.items;
			// 		this.page.total = resp.data.count;
			// 	} else {
			// 		this.tabData = [];
			// 		this.page.total= 0;
			// 	}
			// });
		},
		search() {
			this.page.pi = 1;
			this.init();
		},
		piChange(pi) {
			this.page.pi = pi;
			this.init();
		},
		psChange(ps) {
			this.page.ps = ps;
			this.init();
		}
	},
	created() {
		// this.init();
		console.log(process.env.srv, process.env);
	}
};
</script>