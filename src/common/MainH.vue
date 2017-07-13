<template>
	<div class="main-width">
		<Row class="layout-content">
			<i-col span="24">
				<div class="layout-content-main">
					<router-view></router-view>
				</div>
			</i-col>
		</Row>
		<Back-top :height="30" :bottom="60">
			<div class="top">返回顶端</div>
		</Back-top>
	</div>
</template>

<script>
export default {
	name: 'main',
	data() {
		return {

		}
	}
}
</script>
<style scoped>
.top {
	padding: 10px;
	background: rgba(0, 153, 229, .7);
	color: #fff;
	text-align: center;
	border-radius: 2px;
}
</style>