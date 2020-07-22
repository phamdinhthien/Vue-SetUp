<template>
  <div
    :class="[type]"
    class="vs-collapse">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'VsCollapse',
  props:{
    accordion:{
      default:false,
      type: Boolean
    },
    type:{
      default:'default',
      type: String
    },
    openHover:{
      default:false,
      type: Boolean
    }
  },
  methods:{
    emitChange() {
      this.$emit('change')
    },
    closeAllItems(el) {
      let children = this.$children
      children.map((item) => {
        if(item.$el !== el) {
          item.maxHeight = '0px'
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/vars.scss';
@import '@/scss/root.scss';
@import '@/scss/colors.scss';
@import '@/scss/mixins.scss';
@import '@/scss/components/vsCollapse.scss';
</style>