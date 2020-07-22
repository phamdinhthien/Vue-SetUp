<template>
  <li class="vs-image">
    <div class="con-vs-image">
      <div
        :v-bind="$attrs"
        :style="styleImage"
        class="vs-image--img">
      </div>
    </div>
    <img
      :src="src"
      class="imag-blur"
      alt="">
  </li>
</template>
<script>
export default {
  name: 'VsImage',
  inheritAttrs: false,
  props:{
    src:{
      default: null,
      type: String
    }
  },
  computed:{
    styleImage () {
      return {
        backgroundImage: `url(${this.src})`
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/scss/vars.scss';
@import '@/scss/root.scss';
@import '@/scss/colors.scss';
@import '@/scss/mixins.scss';
@import '@/scss/components/vsImages.scss';
</style>