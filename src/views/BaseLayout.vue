<template>
 <div>
    <slot name="header"> </slot>

 </div>
</template>

<script>
export default {
    name: "BaseLayout",
    mounted(){
        console.log(this.$slots.header)
    }
}
</script>