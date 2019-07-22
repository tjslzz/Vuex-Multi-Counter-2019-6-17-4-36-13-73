<template>
  <div id = "each">
    <p >{{count}}</p>
    <button v-on:click="$emit('addnum',1);count ++">我加</button>
    <button  v-on:click="$emit('subnum',1);count --">我减</button>
  </div>
</template>
<script>
export default {
  name: 'each',
  data:function(){
    return {
      count : 8,
    }
  },
  mounted(){
      this.$emit('addnum',this.count);
  },
  destroyed(){
    this.$emit('subnum',this.count);
  }
}
</script>
