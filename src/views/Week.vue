<template>
  <div class="container">
    <ConsCard
        :name="weekData.name"
        :allIndex="weekData.all">
    </ConsCard>
    <ConsList :data="weekData"/>
  </div>
</template>

<script>
import getData from "@/services";
import {computed, onActivated, onMounted, ref} from 'vue'
import {useStore} from 'vuex'
import ConsList from "comps/List/Week.vue";

export default {
  name:"WeekPage",
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

    return {
      weekData:computed(()=>state.week)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>