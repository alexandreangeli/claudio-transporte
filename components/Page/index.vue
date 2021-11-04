<template>
  <div id="company" class="page-outer">
    <div class="page-inner">
      <slot />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.page-outer {
  padding: 75px 50px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  position: relative;
}

.page-inner {
  max-width: $screenMaxWidth;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
