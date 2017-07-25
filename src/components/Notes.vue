<template>
    <div>
        <Row :gutter="16">
            <Col span="12">
            <Card>
                <p slot="title">
                    <Icon type="ios-film-outline"></Icon>
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
                    <Icon type="ios-film-outline"></Icon>
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
                    <Icon type="ios-film-outline"></Icon>
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
                    <Icon type="ios-film-outline"></Icon>
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
                    name: '常用Css',
                    pname:'Notes/Detail',
                    plan: 'commonUseCss',
                    date: '2017-07-16'
                }
            ],
            jsList: [
                {
                    id: 1,
                    name: '常用JavaScript',
                    pname:'Notes/Detail',
                    plan: 'commonUseJs',
                    date: '2017-07-16'
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

