<template>
  <div class="container">
    <ConsCard
        :name="yearData.name"
        :allIndex="yearData.all">
    </ConsCard>
    <ConsList :data="yearData"/>
  </div>
</template>

<script>
import getData from "@/services";
import {computed, onActivated, onMounted, ref} from 'vue'
import {useStore} from 'vuex'
import ConsList from 'comps/List/Year.vue'

export default {
  name:"YearPage",
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
      yearData:computed(()=>state.year)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>