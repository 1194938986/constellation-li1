<template>
  <div class="num-list">
    <NumItem
        v-for="(item,index) of numData"
        :key="index"
        :item="item"
        :data="data"
    />
  </div>
</template>

<script>
import numData from 'datas/num';
import NumItem from './Item';

export default {
  name: "NumList",
  props:{
    data:Object
  },
  components:{
    NumItem
  },
  setup(){
    return{
      numData
    }
  }
}
</script>

<style lang='scss' scoped>
.num-list {
  display: flex;
  flex-flow: row;
  margin: 15px 0;
  padding: 10px;
  box-shadow: 2px 2px 5px #999999;
}
</style>