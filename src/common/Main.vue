<template>
	<div class="main-width">
		<Row class="layout-content" :style="{'min-height':mainHeight+'px'}">
			<i-col span="24">
				<div class="layout-content-main">
					<Breadcrumb separator=">" v-show="breadcrumb.length>0">
						<Breadcrumb-item v-for="item in breadcrumb" :href="item.path" :key="item.path">
							{{ item.name }}
							
						</Breadcrumb-item>
					</Breadcrumb>
					<router-view></router-view>
				</div>
			</i-col>
		</Row>
	
		<Back-top :height="30" :bottom="30">
			<div class="top">返回顶端</div>
		</Back-top>
	</div>
</template>

<script>
export default {
	name: 'main',
	data() {
		return {
			mainHeight:480
		}
	},
	computed: {
		breadcrumb () {
			return this.$store.state.breadcrumb;
		}
	},
	created() {
		this.mainHeight = document.body.offsetHeight - 132;
	}
}
</script>
<style lang="scss">
@import "../assets/css/scss/params.scss";
.top {
	padding: 10px;
	background: rgba(0, 153, 229, .7);
	color: #fff;
	text-align: center;
	border-radius: 2px;
}
.ivu-breadcrumb{
	margin-bottom: rem(10);
}
</style>