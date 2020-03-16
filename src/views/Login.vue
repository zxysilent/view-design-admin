
<template>
	<div class="login" @keydown.enter="submit">
		<div class="login-top">
			<div class="login-top-header">
				<div>
					<img class="login-top-header-logo" src="../assets/logo.png" alt="logo">
					<span class="login-top-header-title">欢迎登陆</span>
				</div>
			</div>
			<div class="login-top-desc">
				xxxxxxxxxxx管理系统
			</div>
		</div>
		<div class="login-center">
			<Form ref="loginForm" :model="loginModel" :rules="loginRules">
				<FormItem prop="mode" label="登录方式">
					<RadioGroup v-model="loginModel.mode" size="large" @on-change="onChange">
						<Radio label="normal">账号/密码</Radio>
						<Radio label="extend">企业名/密码</Radio>
					</RadioGroup>
				</FormItem>
				<FormItem prop="num" :label="tip">
					<Input size="large" prefix="ios-person-outline" type="text" v-model="loginModel.num" :placeholder="placeholder">
					</Input>
				</FormItem>
				<FormItem prop="pass" label="密 码">
					<Input size="large" prefix="ios-lock-outline" type="password" password v-model="loginModel.pass" placeholder="请输入密码">
					</Input>
				</FormItem>
				<FormItem>
					<Button size="large" @click="submit" type="primary" long>登 录</Button>
				</FormItem>
			</Form>
			<p class="login-center-tip">首页
				<a href="/" title="首页">
					<Icon type="ios-send-outline" size="20" />
				</a>
			</p>
			<!-- <div class="login-center-other">
				<span>其他登录方式</span>&nbsp;
				<a>
					<Icon type="logo-github" />
				</a>
			</div> -->
		</div>
		<div class="login-footer">
			<!-- <div class="login-footer-links">
				<a>帮助</a>
				<a>隐私</a>
				<a>条款</a>
			</div> -->
			<div class="login-footer-copyright">
				Copyright &copy; {{new Date().getFullYear()}}&nbsp;<a target="_blank" href="https://github.com/zxysilent">github.com/zxysilent</a>&nbsp;&nbsp;
				<!-- <a target="_blank" href="https://blog.zxysilent.com">blog.zxysilent.com</a> -->
			</div>
		</div>
	</div>
</template>
<script>
// import md5 from "js-md5";
// import { login } from "@/api/auth";
// import Util from "@/utils";
export default {
	data() {
		return {
			loginModel: { num: "", pass: "", mode: "normal" },
			tip: "账 号",
			placeholder: "请输入用户名",
			loginRules: {
				num: [{ required: true, message: "账号不能为空", trigger: "blur" }],
				pass: [{ required: true, message: "密码不能为空", trigger: "blur" }]
			}
		};
	},
	methods: {
		onChange(val) {
			if (val == "normal") {
				this.tip = "账 号";
				this.placeholder = "请输入账号";
			} else {
				this.tip = "企业名称";
				this.placeholder = "请输入企业名称";
			}
		},
		submit() {
			let that = this;
			that.$refs.loginForm.validate(valid => {
				if (valid) {
                    that.$router.push({ name: "home" });
					// let data = {
					//     num: that.user.num,
					//     mode:that.user.mode,
					// 	pass: md5(that.user.pass).substr(1, 30)
					// };
					// login(data).then(resp => {
					// 	if (resp.code == 200) {
					// 		this.$Message.success({
					// 			content: "登陆成功",
					// 			onClose: () => {
					// 				Util.setToken(resp.data);
					// 				that.$router.push({ name: "home" });
					// 			}
					// 		});
					// 	} else {
					// 		this.$Message.error(resp.msg);
					// 	}
					// });
				}
			});
		}
	}
};
</script>
<style lang="less" scoped>
.login {
	width: 100%;
	min-height: 100%;
	background: #f0f2f5 url(../assets/bg.svg) no-repeat 50%;
	background-size: 100%;
	padding: 110px 0 144px;
	position: relative;
	a {
		text-decoration: none;
	}
	.login-top {
		text-align: center;
		.login-top-header {
			height: 44px;
			line-height: 44px;
			.login-top-header-logo {
				height: 44px;
				vertical-align: top;
				margin-right: 16px;
				border-style: none;
				border-radius: 50%;
			}
			.login-top-header-title {
				font-size: 28px;
				color: rgba(0, 0, 0, 0.85);
				font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
					"微软雅黑", Arial, sans-serif;
				font-weight: 600;
				position: relative;
				top: 2px;
			}
		}
		.login-top-desc {
			font-size: 20px;
			color: rgba(0, 0, 0, 0.45);
			font-weight: 600;
			margin-top: 12px;
			margin-bottom: 30px;
		}
	}
	.login-center {
		min-width: 260px;
		width: 368px;
		margin: 0 auto;
		.login-center-other {
			text-align: left;
			margin-top: 24px;
			line-height: 22px;
		}
		.login-center-tip {
			text-align: center;
			color: #c3c3c3;
		}
	}
	.login-footer {
		position: absolute;
		width: 100%;
		bottom: 0;
		padding: 0 16px;
		margin: 48px 0 24px;
		text-align: center;
		.login-footer-links {
			margin-bottom: 8px;
			font-size: 14px;
			a {
				color: rgba(0, 0, 0, 0.45);
				transition: all 0.3s;
				&:not(:last-child) {
					margin-right: 40px;
				}
			}
		}
		.login-footer-copyright {
			color: rgba(0, 0, 0, 0.45);
			font-size: 14px;
		}
	}
}
</style>