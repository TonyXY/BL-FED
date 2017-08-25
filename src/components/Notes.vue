<template>
    <div>
        <Row :gutter="16">
            <Col span="12">
            <Card>
                <p slot="title">
                    <Icon type="social-buffer"></Icon>
                    Css
                </p>
                <ul class="bl-list">
                    <li v-for="item in cssList" :key="item.id">
                        <router-link :to="{name:item.pname,params: { plan: item.plan }}">{{ item.name }}</router-link>
                        <span>
                            {{ item.date }}
                        </span>
                    </li>
                </ul>
            </Card>
            </Col>
            <Col span="12">
            <Card>
                <p slot="title">
                    <Icon type="social-buffer"></Icon>
                    JavaScript
                </p>
                <ul class="bl-list">
                    <li v-for="item in jsList" :key="item.id">
                        <router-link :to="{name:item.pname,params: { plan: item.plan }}">{{ item.name }}</router-link>
                        <span>
                            {{ item.date }}
                        </span>
                    </li>
                </ul>
            </Card>
            </Col>
        </Row>
        <br>
        <Row :gutter="16">
            <Col span="12">
            <Card>
                <p slot="title">
                    <Icon type="social-buffer"></Icon>
                    HTML
                </p>
                <ul class="bl-list">
                    <li v-for="item in htmlList" :key="item.id">
                        <router-link :to="{name:item.pname,params: { plan: item.plan }}">{{ item.name }}</router-link>
                        <span>
                            {{ item.date }}
                        </span>
                    </li>
                </ul>
            </Card>
            </Col>
            <Col span="12">
            <Card>
                <p slot="title">
                    <Icon type="social-buffer"></Icon>
                    其他
                </p>
                <ul class="bl-list">
                    <li v-for="item in otherList" :key="item.id">
                        <router-link :to="{name:item.pname,params: { plan: item.plan }}">{{ item.name }}</router-link>
                        <span>
                            {{ item.date }}
                        </span>
                    </li>
                </ul>
            </Card>
            </Col>
        </Row>
        <br>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cssList: [
                {
                    id: 1,
                    name: '常用地址',
                    pname:'Notes/Detail',
                    plan: 'commURL',
                    date: '2017-07-11'
                },
                {
                    id: 2,
                    name: '常用Css代码',
                    pname:'Notes/Detail',
                    plan: 'commonUseCss',
                    date: '2017-07-16'
                },
                {
                    id: 3,
                    name: '常用的CSS命名规则',
                    pname:'Notes/Detail',
                    plan: 'commonCssName',
                    date: '2017-07-28'
                },
                {
                    id: 4,
                    name: 'Sass 学习',
                    pname: 'Notes/Detail',
                    plan: 'sass',
                    date: '2017-07-28'
                }
            ],
            jsList: [
                {
                    id: 1,
                    name: '常用JavaScript代码',
                    pname:'Notes/Detail',
                    plan: 'commonUseJs',
                    date: '2017-07-16'
                },
                {
                    id: 2,
                    name: '常用正则表达式',
                    pname:'Notes/Detail',
                    plan: 'regUse',
                    date: '2017-07-28'
                },
                {
                    id: 3,
                    name: '排序相关',
                    pname: 'Notes/Detail',
                    plan: 'sort',
                    date: '2017-07-29'
                },
                {
                    id: 4,
                    name: 'es6学习',
                    pname: 'Notes/Detail',
                    plan: 'es6',
                    date: '2017-07-29'
                },
                {
                    id: 5,
                    name: 'js异常错误整理',
                    pname: 'Notes/Detail',
                    plan: 'jsError',
                    date: '2017-08-21'
                }
            ],
            htmlList: [
                {
                    id: 1,
                    name: '常用select切换html结构及js',
                    pname:'Notes/Detail',
                    plan: 'selectHtml',
                    date: '2017-07-20'
                },
                {
                    id: 2,
                    name: '常用tab切换html结构及js',
                    pname:'Notes/Detail',
                    plan: 'tabHtml',
                    date: '2017-07-19'
                },
                {
                    id: 3,
                    name: '前端优化相关',
                    pname: 'Notes/Detail',
                    plan: 'fed',
                    date: '2017-07-29'
                },
                {
                    id: 4,
                    name: 'meta相关',
                    pname: 'Notes/Detail',
                    plan: 'metaHtml',
                    date: '2017-08-24'
                }
            ],
            otherList: [
                {
                    id: 1,
                    name: 'mac使用的一些经验',
                    pname:'Notes/Detail',
                    plan: 'macUse',
                    date: '2017-07-19'
                },
                {
                    id: 2,
                    name: '一些常用功能的demo',
                    pname:'Notes/Detail',
                    plan: 'someDemo',
                    date: '2017-07-26'
                },
                {
                    id: 3,
                    name: 'vscode使用',
                    pname:'Notes/Detail',
                    plan: 'vscodeUse',
                    date: '2017-07-27'
                },
                {
                    id: 4,
                    name: 'gulp配置',
                    pname: 'Notes/Detail',
                    plan: 'gulp',
                    date: '2017-08-06'
                },
                {
                    id: 5,
                    name: 'Git常用命令',
                    pname: 'Notes/Detail',
                    plan: 'git',
                    date: '2017-08-06'
                }
            ]
        }
    },
    computed: {

    },
    methods: {

    }
}
</script>

