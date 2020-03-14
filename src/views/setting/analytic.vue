
<template>
	<Card dis-hover>
		<p slot="title">
			<Icon type="ios-pulse" /> 统计设置
		</p>
		<div style="max-width:520px">
			<Form label-position="top">
				<FormItem label="网站统计代码">
					<Input v-model="dataForm.value" type="textarea" :autosize="{minRows: 10,maxRows: 20}" placeholder="Enter code "></Input>
				</FormItem>
				<div>
					<Button type="warning" :loading="loading" @click="emit">提交保存</Button>
				</div>
			</Form>
		</div>
	</Card>
</template>
<script>
import { apiOptsGet, admOptsEdit } from "@/api/opts";
export default {
	data() {
		return {
			dataForm: { key: "analytic", value: "" },
			loading: false
		};
	},
	methods: {
		emit() {
			this.loading = true;
			// admOptsEdit(this.model).then(resp => {
			// 	this.loading = false;
			// 	if (resp.code == 200) {
			// 		this.$Message.success({ content: "网站统计代码,更新成功" });
			// 	} else {
			// 		this.$Message.error({
			// 			content: `网站统计代码,更新失败,请重试`,
			// 			duration: 3,
			// 			onClose() {
			// 				this.init();
			// 			}
			// 		});
			// 	}
			// });
		},
		init() {
			// apiOptsGet(this.dataForm.key).then(resp => {
			// 	if (resp.code == 200) {
			// 		this.dataForm.value = resp.data;
			// 	} else {
			// 		this.dataForm.value = "";
			// 	}
			// });
		}
	},
	mounted() {
		// this.init();
	}
};
</script>
