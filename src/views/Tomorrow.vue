<template>
  <div class="container">
    <ConsCard
        :name="tomorrowData.name"
        :allIndex="tomorrowData.all">
    </ConsCard>
    <ConsList :data="tomorrowData"></ConsList>
  </div>
</template>

<script>
import getData from "@/services";
import {computed, onActivated, onMounted, ref} from 'vue'
import {useStore} from 'vuex'
import ConsList from "comps/List/Tomorrow.vue"

export default {
  name:"TomorrowPage",
  components:{
    ConsList
  },
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
      tomorrowData:computed(()=>state.today)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>