<template>
  <Page id="banner">
    <img src="~/assets/images/harley.jpg" class="banner-background" />
    <div class="banner-overlay" />
    <div class="banner-text">
      <img src="~/assets/images/logo.png" class="banner-logo" />
      <p class="banner-description">
        Conte conosco 24 horas por dia 365 dias por ano!
      </p>
      <p class="banner-phone">{{ formattedNumber }}</p>
      <div class="banner-buttons">
        <a class="btn-whats" :href="WHATSAPP_URL" target="_blank">
          <whatsapp-icon :size="20" />
          Iniciar conversa
        </a>
        <a class="btn-contained" :href="PHONE_URL" target="_blank">
          <phone-icon :size="20" />
          Ligar
        </a>
      </div>
    </div>
  </Page>
</template>

<script>
import {
  COMPANY_NAME,
  PHONE_NUMBER,
  WHATSAPP_URL,
  PHONE_URL,
} from "@/constants/index.js";
import { formatCellphoneNumber } from "@/utils";

export default {
  data() {
    return {
      formattedNumber: formatCellphoneNumber(PHONE_NUMBER),
      COMPANY_NAME,
      WHATSAPP_URL,
      PHONE_URL,
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
#banner {
  height: 100vh;
  background: $gray;
  color: $white;
  overflow: hidden;
}

.banner-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: bottom;
}

.banner-logo {
  height: 35%;
  min-height: 175px;
}

.banner-overlay {
  background: $red-transparent;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.banner-text {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  z-index: 1;
}

.banner-title {
  font-size: 50px;
  max-width: 500px;
}

.banner-description {
  font-size: 18px;
}

.banner-phone {
  font-size: 24px;
}

.banner-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.banner-buttons > * {
  margin: 5px;
  flex-grow: 1;
}
</style>
