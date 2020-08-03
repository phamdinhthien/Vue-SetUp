<template>
  <div id="app">
    
    <vs-tree-select :options="options" label="name" @select="handleSelect">

    </vs-tree-select>
    <base-layout>
      <template v-slot:header>
        This is header
      </template>
    </base-layout>
  </div>
</template>
 
<script>
// import the component
import VsTreeSelect from './components/vsTreeSelect/vsTreeSelect.vue';
// import the styles
import "@riophae/vue-treeselect/dist/vue-treeselect.css";

import BaseLayout from './views/BaseLayout.vue';

export default {
  // register the component
  components: { VsTreeSelect, BaseLayout },
  data() {
    return {
      // define the default value
      value: null,
      // define options
      options:  [
      { id: 1, name: "Elemento 1", parentId: null },
      { id: 2, name: "Elemento 2", parentId: null },
      { id: 3, name: "Elemento 3", parentId: null },
      { id: 4, name: "Elemento 4", parentId: 1 },
      { id: 5, name: "Elemento 5", parentId: 1 },
      { id: 6, name: "Elemento 6", parentId: 2 },
      { id: 7, name: "Elemento 7", parentId: 3 },
      { id: 8, name: "Elemento 8", parentId: 3 },
      { id: 9, name: "Elemento 9", parentId: 3 },
      { id: 10, name: "Elemento 10", parentId: 4 },
      { id: 11, name: "Elemento 11", parentId: 5 },
      { id: 12, name: "Elemento 12", parentId: 5 },
      { id: 13, name: "Elemento 13", parentId: null },
      { id: 14, name: "Elemento 14", parentId: 13 },
      { id: 15, name: "Elemento 15", parentId: 14 },
      { id: 16, name: "Elemento 16", parentId: 15 },
      { id: 17, name: "Elemento 17", parentId: 16 },
    ]
    };
  },
  methods: {
    handleSelect(value){
      console.log(value)
    }
  }
};
</script>