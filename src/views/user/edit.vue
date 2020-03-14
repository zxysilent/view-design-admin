<template>
	<div>
		<Card dis-hover>
			<p slot="title">
				<Icon type="ios-create-outline" /> 修改用户
			</p>
			<div style="max-width:520px">
				<Form ref="dataForm" :model="dataForm" :label-width="100" label-position="right" label-colon :rules="dataRules">
					<FormItem label="登录账号" prop="num">
						<Input v-model="dataForm.num" readonly disabled> <span slot="append">不可修改</span></Input>
					</FormItem>
					<FormItem label="用户姓名" prop="name">
						<Input v-model="dataForm.name"></Input>
					</FormItem>
					<FormItem label="用户电话" prop="phone">
						<Input v-model="dataForm.phone"></Input>
					</FormItem>
					<FormItem label="邮箱地址" prop="email">
						<Input v-model="dataForm.email"></Input>
					</FormItem>
					<FormItem>
						<Button type="warning" :loading="loading" @click="emit">提交保存</Button>
						<Button type="success" @click="reset" style="margin-left: 8px">重置填写</Button>
					</FormItem>
				</Form>
			</div>
		</Card>
	</div>
</template>
<script>
import md5 from "js-md5";
export default {
	data() {
		return {
			auth: {},
			dataForm: { name: "", passwd: "123456", num: "", phone: "", role: 4096 },
			loading: false,
			dataRules: {
				name: [
					{ required: true, message: "请输入姓名", trigger: "blur" },
					{ min: 5, message: "请至少输入5个字符", trigger: "blur" },
					{ max: 32, message: "最多输入32个字符", trigger: "blur" }
				]
			}
		};
	},
	methods: {
		valideNum(rule, value, callback) {
			callback();
		},
		init() {},
		reset() {
			this.$refs.dataForm.resetFields();
		},
		emit() {
			this.$refs.dataForm.validate(valid => {
				if (valid) {
					this.loading = true;
					setTimeout(() => {
						this.loading = false;
					}, 1000);
				}
			});
		}
	},
	mounted() {
		this.init();
	}
};
</script>
