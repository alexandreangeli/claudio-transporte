<template>
  <div id="footer" class="footer-outer">
    <div class="footer-inner">
      <div>Copyright © 2021 {{ COMPANY_NAME }}</div>
      <div>Powered by Alexangeli Systems</div>
    </div>
  </div>
</template>

<script>
import { COMPANY_NAME } from "@/constants";

export default {
  data() {
    return {
      COMPANY_NAME,
    };
  },
};
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
  padding: 10px;
}
</style>
