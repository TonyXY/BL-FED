<template>
    <Markdown :mdText="mdText" v-if="show">
    </Markdown>
</template>
<script>
import Markdown from '@/common/Markdown';
export default {
    data() {
        return {
            mdText:'',
            show:false
        }
    },
    components: {
        Markdown: Markdown
    },
    beforeRouteEnter(to, from, next) {
        webComm.baseRequestFile('docs/Articles/' + to.params.plan + '.md', {
            callback: function(response) {
                next(vm => {
                    vm.$store.commit('updateMdText', response);
                    vm.show= true;
                })
            }, 
            errorback: function(error) {
                next(false)
            }
        });
    },
    methods: {
        
    },
    created: function() {
        
    }
}
</script>

