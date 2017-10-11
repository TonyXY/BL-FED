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
import Clipboard from 'clipboard';
export default {
    data() {
        return {
            rawHtml: '',
            toc: [],
            tocshow: false,
            tocspan: 0,
            conspan: 24
        }
    },
    beforeRouteEnter(to, from, next) {
        webComm.baseRequestFile('docs/Notes/' + to.params.plan + '.md', {
            callback: function(response) {
                next(vm => {
                    var renderer = new marked.Renderer();
                    var idx = 1;
                    var cidx = 1;
                    renderer.heading = function(text, level) {
                        // var slug = text.toLowerCase().replace(/[^\w]+/g, '-');
                        var slug = 'slug_' + idx;
                        if (level == 1 && text == "TOC") {
                            vm.tocshow = true;
                            vm.tocspan = 6;
                            vm.conspan = 18;
                            return '';
                        }

                        vm.toc.push({
                            level: level,
                            slug: slug,
                            title: text
                        });
                        idx += 1;
                        return "<h" + level + " id=\"" + slug + "\"><a href=\"#" + slug + "\" class=\"anchor\"></a>" + text + "</h" + level + ">";
                    };
                    renderer.code = function(code, language) {
                        var codeIdx = 'code_' + cidx;
                        var highCode = '';
                        cidx += 1;
                        highCode = '<code class="lang-'+ language +'" id="code_'+ codeIdx+'">'+ require('highlight.js').highlightAuto(code).value+'</code>';
                        return '<pre><span class="clipboard" data-clipboard-target="#code_' + codeIdx +'"><i class="ivu-icon ivu-icon-clipboard"></i></span>' + highCode + '</pre>';
                    };
                    vm.rawHtml = marked(response, { renderer: renderer });
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
        goAnchor(selector) {
            var anchor = this.$el.querySelector(selector);
            document.documentElement.scrollTop = anchor.offsetTop;
            document.body.scrollTop = anchor.offsetTop;
        }
    },
    created: function() {
        var that = this;
        var clipboard = new Clipboard('.clipboard');
        clipboard.on('success', function(e) {
            e.clearSelection();
            that.$Message.success('代码已复制到剪贴板');
        });
    }
}
</script>

