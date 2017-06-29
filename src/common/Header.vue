<template>
	<Menu mode="horizontal" :theme="theme1" active-name="1">
		<div class="main-width">
		<div class="layout-logo">
			<a href="javascript:void(0)">
				<img src="images/logo.png" alt="">
			</a>
		</div>
		<div class="layout-nav">
			<Menu-item name="1">
				<Icon type="ios-navigate"></Icon>
				笔记
			</Menu-item>
			<Menu-item name="2">
				<Icon type="ios-keypad"></Icon>
				文章
			</Menu-item>
			<Menu-item name="3">
				<Icon type="ios-analytics"></Icon>
				关于
			</Menu-item>
			<Menu-item name="4">
				<Icon type="ios-paper"></Icon>
				导航四
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
			theme1: 'light'
		}
	}
}
</script>

