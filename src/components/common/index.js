import ConsCard from 'comps/common/Card.vue'
import ConsItem from 'comps/common/ConsItem.vue';
import Summary from "comps/common/Summary.vue";

let MyPlugin = {};

MyPlugin.install = function (Vue){
    Vue.component(ConsCard.name,ConsCard);
    Vue.component(ConsItem.name,ConsItem);
    Vue.component(Summary.name,Summary);
}

export default MyPlugin;
