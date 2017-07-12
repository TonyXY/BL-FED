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
    computed: {

    },
    methods: {

    },
    created:function(){
        var self = this;
        axios.get('docs/Notes/commURL.md')
        .then(function (response) {
            console.log(response);
            self.rawHtml = marked(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}
</script>

