<template>
  <div class="vs-navbar--items">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'VsNavbarItems'
}
</script>
<style lang="scss" scoped>
@import '@/scss/vars.scss';
@import '@/scss/root.scss';
@import '@/scss/colors.scss';
@import '@/scss/mixins.scss';
@import '@/scss/components/vsNavbar.scss';
</style>