<template>
<div id="counter_item">
    <p>{{counterNum}}</p>
    <button v-on:click="addnum">我加</button>
    <button v-on:click="subnum">我减</button>
</div>
</template>

<script>
export default {
    name: 'counter_item',
    data: function () {
        return {
            counterNum: 8,
        }
    },
    methods: {
        addnum() {
            this.$store.commit('add', 1);
            this.counterNum++;
        },
        subnum() {
            this.$store.commit('sub', 1);
            this.counterNum--;
        }
    },
    mounted() {
        this.$store.commit('add', this.counterNum);
    },
    destroyed() {
        this.$store.commit('sub', this.counterNum);
    }
}
</script>
