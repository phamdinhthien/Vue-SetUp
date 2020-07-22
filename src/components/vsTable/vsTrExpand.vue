<template>
  <transition name="tr-expand">
    <tr
      v-if="active"
      class="tr-expand"
    >
      <td :colspan="colspan">
        <div class="content-tr-expand">
          <slot></slot>

          <button
            v-if="close"
            class="tr-expand--close"
            @click="$emit('click', $event)"
          >
            <i class="material-icons">
              clear
            </i>
          </button>
        </div>
      </td>
    </tr>
  </transition>
</template>

<script>
export default {
  props: {
    close: {
      type: Boolean,
      default: false
    },
    colspan:{
      default: 1,
      type: Number
    }
  },
  data:() => ({
    active: false
  }),
  mounted() {
    this.active = true
  }
}
</script>
<style lang="scss" scoped>
@import '@/scss/vars.scss';
@import '@/scss/root.scss';
@import '@/scss/colors.scss';
@import '@/scss/mixins.scss';
@import '@/scss/components/vsSelect.scss';
</style>