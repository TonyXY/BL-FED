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
                    <li v-for="item in movieList" :key="item.id">
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
                    <li v-for="item in movieList" :key="item.id">
                        <a :href="item.url" target="_blank">{{ item.name }}</a>
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
                    <li v-for="item in movieList" :key="item.id">
                        <a :href="item.url" target="_blank">{{ item.name }}</a>
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
                    <li v-for="item in movieList" :key="item.id">
                        <a :href="item.url" target="_blank">{{ item.name }}</a>
                        <span>
                            {{ item.date }}
                        </span>
                    </li>
                </ul>
            </Card>
            </Col>
        </Row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            movieList: [
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
                },
                {
                    id: 3,
                    name: '常用JavaScript',
                    pname:'Notes/Detail',
                    plan: 'commonUseJs',
                    date: '2017-07-16'
                },
                {
                    id: 3,
                    name: '阿甘正传',
                    url: 'https://movie.douban.com/subject/1292720/',
                    date: 9.4
                },
                {
                    id: 4,
                    name: '美丽人生',
                    url: 'https://movie.douban.com/subject/1292063/',
                    date: 9.5
                },
                {
                    id: 5,
                    name: '千与千寻',
                    url: 'https://movie.douban.com/subject/1291561/',
                    date: 9.2
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

