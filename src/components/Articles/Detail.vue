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
        webComm.baseRequestFile('docs/Articles/' + to.params.plan + '.md', {
            callback: function(response) {
                next(vm => {
                    vm.rawHtml = marked(response);
                })
            },
            errorback: function(error) {
                next(false)
            }
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

