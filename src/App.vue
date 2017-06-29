<template>
<div id="app" class="layout">
    <router-view name="header"></router-view>
    <router-view></router-view>
    <router-view name="footer"></router-view>
</div>
</template>

<script>
export default {
    name: 'app',
    data: function () {
        return {
        };
    }
}
</script>

<style lang="scss">
@import './assets/css/scss/style.scss';
</style>
