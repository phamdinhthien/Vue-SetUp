<template>
  <h3 class="vs-navbar--title">
    <slot></slot>
  </h3>
</template>
<script>
export default {
  name:'VsNavbarTitle',
}
</script>
<style lang="scss" scoped>
@import '@/scss/vars.scss';
@import '@/scss/root.scss';
@import '@/scss/colors.scss';
@import '@/scss/mixins.scss';
@import '@/scss/components/vsNavbar.scss';
</style>