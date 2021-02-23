<template>
  <div class="container">
    <ConsCard
        :name="monthData.name"
        :allIndex="Number(monthData.all)"/>
    <ConsList :data="monthData"/>
  </div>
</template>

<script>
import getData from "@/services";
import {computed, onActivated, onMounted, ref} from 'vue'
import {useStore} from 'vuex'
import ConsList from "comps/List/Month";

export default {
  name:"MonthPage",
  components: {ConsList},
  setup(){
    const store = useStore(),
        state = store.state,
        status = ref('');


    onMounted(()=>{
      getData(store);
      status.value = state.consName;
    })

    onActivated(()=>{
      if(status.value !== state.consName){
        getData(store);
        status.value = state.consName;
      }
    })
    // console.log(state.month.month)
    // console.log('month:' + state.consName)

    return {
      monthData:computed(()=>state.month)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>