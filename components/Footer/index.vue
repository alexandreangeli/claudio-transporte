<template>
  <div id="footer" class="footer-outer">
    <div class="footer-inner">
      <div>Copyright © 2021 Cláudio Transporte e Resgate de Motos</div>
      <div>Powered by Alexangeli Systems</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.footer-outer {
  background: $black;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.footer-inner {
  width: 100%;
  max-width: $screenMaxWidth;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: $white;
  text-align: center;
  padding: 0 10px;
}
</style>
