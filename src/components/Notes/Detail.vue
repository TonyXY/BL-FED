<template>
    <Row :gutter="16">
        <Col :span="tocspan">
        <Affix :offset-top="100" v-show="tocshow">
            <Card>
                <p slot="title">
                    <Icon type="social-buffer"></Icon>
                    目录
                </p>
                <ul class="bl-list">
                    <li v-for="item in toc" :key="item.id">
                        <a href="javascript:void(0)" @click="goAnchor('#'+item.slug)" v-html="
                item.title"></a>
                    </li>
                </ul>
            </Card>
        </Affix>
        <div>&nbsp;&nbsp;</div>
        </Col>
        <Col :span="conspan">
        <div v-html="rawHtml" class="markdown-content">
        </div>
        </Col>
    </Row>
</template>

<script>
export default {
    data() {
        return {
            rawHtml: '',
            toc: [],
            tocshow:true,
            tocspan:6,
            conspan:18
        }
    },
    beforeRouteEnter(to, from, next) {
        axios.get('docs/Notes/' + to.params.plan + '.md')
            .then(function (response) {
                next(vm => {
                    var renderer = new marked.Renderer();
                    var idx = 1;
                    renderer.heading = function (text, level) {
                        // var slug = text.toLowerCase().replace(/[^\w]+/g, '-');
                        var slug = 'slug_' + idx;
                        vm.toc.push({
                            level: level,
                            slug: slug,
                            title: text
                        });
                        idx += 1;
                        return "<h" + level + " id=\"" + slug + "\"><a href=\"#" + slug + "\" class=\"anchor\"></a>" + text + "</h" + level + ">";
                    };
                    vm.rawHtml = marked(response.data, { renderer: renderer });
                })
            })
            .catch(function (error) {
                next(false)
            });
    },
    computed: {

    },
    methods: {
        goAnchor(selector) {
            var anchor = this.$el.querySelector(selector);
            document.body.scrollTop = anchor.offsetTop;
        }
    },
    created: function () {

    }
}
</script>

