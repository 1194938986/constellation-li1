<template>
  <div class="container">
    <ConsCard
        :name="tomorrowData.name"
        :allIndex="tomorrowData.all">
    </ConsCard>
  </div>
</template>

<script>
import getData from "@/services";
import {computed, onMounted} from 'vue'
import {useStore} from 'vuex'

export default {
  name:"TomorrowPage",
  setup(){
    const store = useStore(),
          state = store.state;
    onMounted(()=>{
      getData(store);
    })

    return {
      tomorrowData:computed(()=>state.tomorrow)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>