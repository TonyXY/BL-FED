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
        <Col :span="conspan" id="marked">
        <Markhtml :para="rawParas" :temp="rawHtml"></Markhtml>
        </Col>
    </Row>
</template>

<script>
import Clipboard from 'clipboard';
let clipboard = null;
export default {
    data() {
        return {
            rawParas: {},
            rawHtml: '<div></div>',
            toc: [],
            tocshow: false,
            tocspan: 0,
            conspan: 24
        }
    },
    computed:{
        mdText() {
            return this.$store.state.mdText;
        }
    },
    components: {
        Markhtml: {
            functional: true,
            render: (h, context) => {
                const temp = context.props.temp;
                const para = context.props.para;
                return h({ template: temp }, {
                    attrs: para
                })
            },
            props: {
                temp: {
                    type: String,
                    required: true
                },
                para: {
                    type: Object,
                    required: true
                }
            }
        }
    },
    beforeDestroy() {
        // 导航离开该组件的对应路由时调用
        clipboard.destroy();
    },
    methods: {
        goAnchor(selector) {
            var anchor = this.$el.querySelector(selector);
            document.documentElement.scrollTop = anchor.offsetTop;
            document.body.scrollTop = anchor.offsetTop;
        }
    },
    mounted: function() {
        var that = this;
        var renderer = new marked.Renderer();
        var idx = 1;
        var cidx = 1;
        var MyComponent = null;
        var component = null;
        renderer.heading = function(text, level) {
            // var slug = text.toLowerCase().replace(/[^\w]+/g, '-');
            var slug = 'slug_' + idx;
            if (level == 1 && text == "TOC") {
                that.tocshow = true;
                that.tocspan = 6;
                that.conspan = 18;
                return '';
            }

            that.toc.push({
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
            highCode = '<code class="lang-' + language + '" id="code_' + codeIdx + '">' + require('highlight.js').highlightAuto(code).value + '</code>';
            return '<pre><span class="clipboard" data-clipboard-target="#code_' + codeIdx + '"><Tooltip content="复制代码" placement="top"><Icon type= "clipboard" /></Tooltip></span>' + highCode + '</pre>';
        };
        that.rawHtml = '<div class="markdown-content" >' + marked(that.mdText, { renderer: renderer }) + '</div>';
        clipboard = new Clipboard('.clipboard');
        clipboard.on('success', function(e) {
            e.clearSelection();
            that.$Message.success('代码已复制到剪贴板');
        });
    }
}
</script>

