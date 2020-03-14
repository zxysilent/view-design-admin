
<template>
	<Card :bordered="false" dis-hover>
		<p slot="title">
			<Icon type="ios-add-circle-outline" /> 添加
		</p>
		<div>
			<Form ref="dataForm" :model="dataForm" :rules="dataRules" label-colon label-position="top">
				<FormItem label="标题" prop="name">
					<Input v-model="dataForm.name" placeholder="请填写"></Input>
				</FormItem>
				<FormItem label="富文本" prop="content">
					<tiny-editor ref="editor" id="editor" :height="'400'" v-model="dataForm.content"></tiny-editor>
				</FormItem>
				<FormItem>
					<Button type="warning" :loading="loading" @click="emit">提交保存</Button>
					<Button type="success" @click="reset" style="margin-left: 8px">重置填写</Button>
				</FormItem>
			</Form>
		</div>
	</Card>
</template>
<script>
import TinyEditor from "@/components/editor/TinyEditor.vue";
export default {
	components: { TinyEditor },
	data() {
		return {
			dataForm: { name: "", content: "" },
			dataRules: {
				name: [{ required: true, message: "请填写", trigger: "blur", max: 64 }],
				content: [{ required: true, message: "请填写", trigger: "blur" }]
			},
			loading: false
		};
	},
	methods: {
		reset() {
			this.$refs.dataForm.resetFields();
		},
		emit() {
			this.$refs["dataForm"].validate(valid => {
				if (valid) {
					// this.loading = true;
					// admTagAdd(this.dataForm).then(resp => {
					// 	this.loading = false;
					// 	if (resp.code == 200) {
					// 		this.$Message.success({
					// 			content: "标签信息添加成功",
					// 			onClose: () => {
					// 				this.$router.push({
					// 					name: "tag-list"
					// 				});
					// 			}
					// 		});
					// 	} else {
					// 		this.$Message.error({ content: `标签信息添加失败,请重试`, duration: 3 });
					// 	}
					// });
				}
			});
		}
	}
};
</script>
