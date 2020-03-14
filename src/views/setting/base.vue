
<template>
	<Card dis-hover>
		<p slot="title">
			<Icon type="ios-settings-outline" /> 基本设置
		</p>
		<div style="max-width:600px">
			<Form ref="base" :model="dataForm" label-position="top">
				<FormItem label="站点名称" prop="title">
					<Input v-model="dataForm.title" search enter-button="确    定" @on-search="emit('title')"></Input>
				</FormItem>
				<FormItem label="Logo" prop="logo_url">
					<Input v-model="dataForm.logo_url" readonly search enter-button="确    定" @on-search="emit('logo_url')"></Input>
					尺寸最好为 140x140px。
				</FormItem>
				<FormItem label="站点描述" prop="description">
					<Input v-model="dataForm.description" search enter-button="确    定" @on-search="emit('description')"></Input>
				</FormItem>
				<FormItem label="站点地址" prop="site_url">
					<Input v-model="dataForm.site_url" search enter-button="确    定" @on-search="emit('site_url')"></Input>
				</FormItem>
				<FormItem label="关键词" prop="keywords">
					<Input v-model="dataForm.keywords" search enter-button="确    定" @on-search="emit('keywords')"></Input>
				</FormItem>
				<FormItem label="每页文章数目" prop="page_size">
					<Slider v-model="dataForm.page_size" :min="4" :max="12" show-stops @on-change="onChange"></Slider>
					此数目用于指定文章每页显示的文章数目.
				</FormItem>
				<FormItem label="Github" prop="github_url">
					<Input v-model="dataForm.github_url" search enter-button="确    定" @on-search="emit('github_url')"></Input>
				</FormItem>
				<FormItem label="备案号" prop="miitbeian">
					<Input v-model="dataForm.miitbeian" search enter-button="确    定" @on-search="emit('miitbeian')"></Input>
				</FormItem>
			</Form>
		</div>
	</Card>
</template>
<script>
import { apiOptsBase, admOptsEdit } from "@/api/opts";
export default {
	data() {
		return {
			dataForm: {}
		};
	},
	methods: {
		emit(key) {
			// admOptsEdit({
			// 	key: key,
			// 	value: this.base[key]
			// }).then(resp => {
			// 	if (resp.code == 200) {
			// 		this.$Message.success({ content: "更新成功" });
			// 	} else {
			// 		this.$Message.error({
			// 			content: `更新失败`,
			// 			duration: 3,
			// 			onClose() {
			// 				this.init();
			// 			}
			// 		});
			// 	}
			// });
		},
		onChange(val) {
			// admOptsEdit({ key: "page_size", value: val + "" }).then(resp => {
			// 	if (resp.code != 200) {
			// 		this.$Message.error({
			// 			content: `更新失败,请重试`,
			// 			duration: 3,
			// 			onClose() {
			// 				this.init();
			// 			}
			// 		});
			// 	}
			// });
		},
		init() {
			// apiOptsBase().then(resp => {
			// 	if (resp.code == 200) {
			// 		this.dataForm.page_size = Number(resp.data.page_size, 10);
			// 		this.base = resp.data;
			// 	} else {
			// 		this.base = {};
			// 	}
			// });
		}
	},
	mounted() {
		// this.init();
	}
};
</script>
