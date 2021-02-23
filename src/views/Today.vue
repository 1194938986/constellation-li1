<template>
  <div class="container">
    <ConsCard
        :name="todayData.name"
        :allIndex="todayData.all"
    />
    <NumList :data="todayData"/>
    <ConsList :data="todayData"/>
  </div>
</template>

<script>
import getData from "@/services";
import {computed, onActivated, onMounted, ref, toRefs} from 'vue'
import {useStore} from 'vuex'
import NumList from "comps/NumList";
import ConsList from "comps/List/Today";

export default {
  name:"TodayPage",
  components: {ConsList, NumList},
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
    // console.log(state.today)
    return {

      todayData:computed(()=>state.today)
    }

  }
}
</script>

<style lang="scss" scoped>

</style>