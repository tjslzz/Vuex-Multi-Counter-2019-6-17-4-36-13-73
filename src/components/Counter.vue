<template>
<h3 id="counter">请输入数字 <input type="text" v-model.number="count" @input="update"></h3>
</template>

<script>
export default {
    name: 'counter',
    data() {
        return {
            count: ''
        }
    },
    methods: {
        update() {
            this.$store.commit('update', this.count);
        }
    }

}
</script>
