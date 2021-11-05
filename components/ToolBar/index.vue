<template>
  <div ref="toolbarRef" class="toolbar-outer">
    <div class="toolbar-inner">
      <a href="#infobar" class="toolbar-item btn-icon">Início</a>
      <a href="#company" class="toolbar-item btn-icon">Empresa</a>
      <a href="#services" class="toolbar-item btn-icon">Serviços</a>
    </div>
  </div>
</template>

<script>
function goToPage() {
  window.open(url, "_blank").focus();
}

export default {
  methods: {
    goToCompany() {},
    goToServices() {},
  },
  beforeMount() {
    window.addEventListener("scroll", () => {
      const infobarOuter = document.querySelector(".infobar-outer");
      const toolbarOuter = document.querySelector(".toolbar-outer");
      if (infobarOuter && toolbarOuter) {
        if (window.pageYOffset >= infobarOuter.getBoundingClientRect().height) {
          toolbarOuter.classList.add("toolbar-outer--stickied");
        } else {
          toolbarOuter.classList.remove("toolbar-outer--stickied");
        }
      }
    });
  },
};
</script>

<style scoped lang="scss">
.toolbar-outer {
  z-index: 2;
  width: 100%;
  display: flex;
  position: absolute;
  background: transparent;
  padding: 10px 0px;
  font-weight: bold;
}
.toolbar-outer--stickied {
  position: fixed;
  top: 0;
  background: $white;
  color: $black;
  box-shadow: 0 0 5px 2px $gray;
}
.toolbar-inner {
  width: 100%;
  max-width: $screenMaxWidth;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
}
.toolbar-item {
  font-size: 18px;
  padding: 12px 17px;
  font-weight: bold;
  text-transform: uppercase;
  color: $white;
}
.toolbar-outer--stickied .toolbar-item {
  color: $black;
}
</style>
