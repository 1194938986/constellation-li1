<template>
  <div class="container">
    <ConsCard
        :name="yearData.name"
        :allIndex="Number(yearData.all)">
    </ConsCard>
  </div>
</template>

<script>
import getData from "@/services";
import {computed, onMounted} from 'vue'
import {useStore} from 'vuex'

export default {
  name:"YearPage",
  setup(){
    const store = useStore(),state = store.state;

    onMounted(()=>{
      getData(store);
    })

    return {
      yearData:computed(()=>state.year)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>