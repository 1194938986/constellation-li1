<template>
<!--  <div :class="['nav-item',{'nav-current':index === curIdx}]" @click="navClick(index)">{{item}}</div>-->
  <div
      class="nav-item"

      :data-index="index"
  >{{item}}</div>
<!--  @click="navClick(index)"-->
</template>

<script>
export default {
  name: "NavItem",
  props:{
    item:String,
    // curIdx: Number,
    index:Number
  },
  // setup(props,{emit}){
  //   const navClick = (index) =>{
  //     emit('navClick',index)
  //   }
  //
  //   return{
  //     navClick
  //   }
  // },
}
</script>

<style lang="scss" scoped>
.nav-item {
  width: .8rem;
  height: 100%;
  font-size: .14rem;
  line-height: .38rem;
  text-align: center;
  color: #666;

  &.nav-current {
    color: #DB7093;
    font-weight: bold;
  }
}
</style>