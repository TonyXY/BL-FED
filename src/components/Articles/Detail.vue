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
        axios.get('docs/Articles/'+to.params.plan+'.md')
        .then(function (response) {
            next(vm => {
                vm.rawHtml = marked(response.data);
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

