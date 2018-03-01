<template>
  <text>
    Welcome
  </text>
</template>

<script>
  export default {
    created () {
        console.log(navigator.product, this.$router.params);
    }
  };
</script>

<style>
.container {
  background-color: #f6f6ef;
}
</style>

