<template>
	<Menu mode="horizontal" :theme="theme" active-name="1" @on-select="goPage">
		<div class="main-width layout-top">
			<div class="layout-logo">
				<router-link to="/">
					<img src="./../assets/images/logo.png" alt="">
				</router-link>
			</div>
			<div class="layout-nav">
				<Menu-item name="Notes">
					<Icon type="ios-navigate"></Icon>
					笔记
				</Menu-item>
				<Menu-item name="Article">
					<Icon type="ios-keypad"></Icon>
					文章
				</Menu-item>
				<Menu-item name="About">
					<Icon type="ios-analytics"></Icon>
					关于
				</Menu-item>
			</div>
		</div>
	</Menu>
</template>

<script>
export default {
	name: 'header',
	data() {
		return {
			theme: 'light'
		}
	},
	created(){
	},
	mounted(){
	},
	methods:{
		goPage(name){
			this.$router.push('/'+name);
		}
	}
}
</script>

