<template>
<div id="CounterGroup">
    <Counter/>
    <CounterItem v-for="item in $store.getters.getNumber()" v-bind:key="item.key" />
</div>
</template>

<script>
import Counter from './Counter.vue';
import CounterItem from './CounterItem.vue';
export default {
    name: 'CounterGroup',
    components: {
        Counter,
        CounterItem
    }
}
</script>
