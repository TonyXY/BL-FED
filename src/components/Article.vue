<template>
    <div>
        I'm the article page
    </div>
</template>

<script>
export default {
    data() {
        return {
            percent: 0
        }
    },
    computed: {
        color() {
            let color = '#2db7f5';
            if (this.percent == 100) {
                color = '#5cb85c';
            }
            return color;
        }
    },
    methods: {
        add() {
            if (this.percent >= 100) {
                return false;
            }
            this.percent += 10;
        },
        minus() {
            if (this.percent <= 0) {
                return false;
            }
            this.percent -= 10;
        }
    }
}
</script>

