<template>
    <div v-html="rawHtml" class="markdown-content">
    
    </div>
</template>

<script>
export default {
    data() {
        return {
           rawHtml:''
        }
    },
    beforeRouteEnter (to, from, next) {
        axios.get('docs/Notes/'+to.params.plan+'.md')
        .then(function (response) {
            next(vm => {
                console.log(vm.$parent);
                vm.rawHtml = marked(response.data);
                // vm.$parent.breadcrumb = to.meta.breadcrumb;
            })
        })
        .catch(function (error) {
            next(false)
        });
    },
    computed: {

    },
    methods: {

    },
    created:function(){
        
    }
}
</script>

