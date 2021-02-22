<template>
  <div id="app">
    <my-header>星座物语</my-header>
    <NavBar></NavBar>
    <router-view v-slot="{Component}">
      <keep-alive>
        <component :is="Component"></component>
      </keep-alive>
    </router-view>
    <tab></tab>
  </div>
</template>

<script>
import MyHeader from "comps/Header/index.vue";
import Tab from 'comps/Tab/index.vue';

import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {watch} from "vue";
import NavBar from "comps/NavBar/index.vue";



export default {
  name:'App',
  components: {MyHeader,Tab,NavBar},
  setup(){
    const store = useStore(),state = store.state,

          router = useRouter();

    router.push('/');
    store.commit('setField','today');

    watch(()=>{
      return router.currentRoute.value.name;
    },(value) => {
      store.commit('setField',value);
    })
  }
}
</script>

