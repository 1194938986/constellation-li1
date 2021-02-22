<template>
  <div class="container">
    <ConsCard
        :name="weekData.name"
        :allIndex="weekData.all">
    </ConsCard>
  </div>
</template>

<script>
import getData from "@/services";
import {computed, onMounted} from 'vue'
import {useStore} from 'vuex'

export default {
  name:"WeekPage",
  setup(){
    const store = useStore(),state = store.state;

    onMounted(()=>{
      getData(store);
    })

    return {
      weekData:computed(()=>state.week)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>