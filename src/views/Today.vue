<template>
  <div class="container">
    <ConsCard
        :name="todayData.name"
        :allIndex="todayData.all">
    </ConsCard>
  </div>
</template>

<script>
import getData from "@/services";
import {computed, onMounted} from 'vue'
import {useStore} from 'vuex'

export default {
  name:"TodayPage",
  setup(){
    const store = useStore(),
          state = store.state;
    onMounted(()=>{
      getData(store);
    })

    return {
      todayData:computed(()=>state.today)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>