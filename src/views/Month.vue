<template>
  <div class="container">
    <ConsCard
        :name="monthData.name"
        :allIndex="Number(monthData.all)">
    </ConsCard>
  </div>
</template>

<script>
import getData from "@/services";
import {computed, onMounted} from 'vue'
import {useStore} from 'vuex'

export default {
  name:"MonthPage",
  setup(){
    const store = useStore(),
          state = store.state;
    onMounted(()=>{
      getData(store);
    })

    return {
      monthData:computed(()=>state.month)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>