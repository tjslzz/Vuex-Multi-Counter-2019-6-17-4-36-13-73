<template>
<div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <CounterGroup/>
    <CounterSumunter/>
</div>
</template>

<script>
import CounterGroup from './components/CounterGroup.vue';
import CounterSumunter from './components/CounterSum.vue';
export default {
    name: 'app',
    components: {
        CounterGroup,
        CounterSumunter
    },
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
// import axios from "axios";
//   mounted () {
//     axios
//       .get('http://localhost:8888/hello')
//       .then(response => (this.info = response.data))
//   }
