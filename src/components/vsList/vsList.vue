<template lang="html">
  <div
    class="vs-list">
    <slot/>
  </div>
</template>

<script>
export default {
  name:'VsList'
}
</script>
<style lang="scss" scoped>
@import '@/scss/vars.scss';
@import '@/scss/root.scss';
@import '@/scss/colors.scss';
@import '@/scss/mixins.scss';
@import '@/scss/components/vsList.scss';
</style>