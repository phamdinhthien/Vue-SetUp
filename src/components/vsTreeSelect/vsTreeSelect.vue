<template>
  <treeselect v-model="valuex" :multiple="true" :options="generateTree" />
</template>

<script>
import Treeselect from "@riophae/vue-treeselect";

export default {
  name: "VsTreeSelect",
  data(){
      return{
          valuex: null
      }
  },
  props: {
      options: {
          type: Array,
          default: []
      },
      label: String
  },
  components: {
      Treeselect
  },
  computed: {
    generateTree() {
        let data = this.options;
        let name = this.label;
      let map = {},
        node,
        roots = [],
        i;
      for (i = 0; i < data.length; i++) {
        map[data[i].id] = i;
        data[i].label = data[i][name];
      }

      for (i = 0; i < data.length; i++) {
        data[i].parentId ? (data[map[data[i].parentId]].children = []) : null;
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
  watch: {
      valuex(){
          this.$emit('select', this.valuex)
      }
  }
};
</script>
<style lang="sass">

</style>