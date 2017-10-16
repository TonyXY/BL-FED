<template>
    <div>
        <Row :gutter="16">
            <Col span="24">
                <ul class="bl-list">
                    <li v-for="item in list" :key="item.id">
                        <router-link :to="{name:item.pname,params: { plan: item.plan }}">{{ item.name }}</router-link>
                        <span>
                            {{ item.date }}
                        </span>
                    </li>
                </ul>
            </col>
        </Row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                /* {
                    id: 1,
                    name: '生活随感【20170724】',
                    pname:'Articles/Detail',
                    plan: '20170724',
                    date: '2017-07-24'
                } */  
                {
                    id: 2,
                    name: 'JavaScript跨域总结',
                    pname:'Articles/Detail',
                    plan: 'cros',
                    date: '2017-10-13'
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

