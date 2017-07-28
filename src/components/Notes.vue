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

