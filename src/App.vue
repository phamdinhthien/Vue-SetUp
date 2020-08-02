<template>
  <div id="app">
    <treeselect v-model="value" :multiple="true" :options="generateTree(options, 'name')" />
  </div>
</template>
 
<script>
// import the component
import Treeselect from "@riophae/vue-treeselect";
// import the styles
import "@riophae/vue-treeselect/dist/vue-treeselect.css";

export default {
  // register the component
  components: { Treeselect },
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
    generateTree(data, name) {
      let map = {},
        node,
        roots = [],
        i;
      for (i = 0; i < data.length; i++) {
        map[data[i].id] = i;
        data[i].label = data[i][name];
      }

      for (i = 0; i < data.length; i++) {
        data[i].parentId ? data[map[data[i].parentId]].children = [] : null;
        node = data[i];
        if (node.parentId) {
            data[map[node.parentId]].children.push(node);
        } else {
          roots.push(node);
        }
      }
      return roots;
    },
  },
};
</script>