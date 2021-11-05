<template>
  <div id="infobar" class="infobar-outer">
    <div class="infobar-inner">
      <div class="infobar-group">
        <div class="infobar-group-item">
          <MdiIcon icon="map-marker" class="infobar-group-icon" />
          Cascavel - PR
        </div>
        <div class="infobar-group-item infobar-group-item-phone">
          <MdiIcon icon="phone" class="infobar-group-icon" />
          {{ formattedNumber }}
        </div>
      </div>
      <div class="infobar-group">
        <a
          :href="FACEBOOK_URL"
          target="_blank"
          class="infobar-group-item btn-icon"
        >
          <MdiIcon icon="facebook" :size="iconSize" />
        </a>
        <a
          :href="INSTAGRAM_URL"
          target="_blank"
          class="infobar-group-item btn-icon"
        >
          <MdiIcon icon="instagram" :size="iconSize" />
        </a>
        <a
          :href="WHATSAPP_URL"
          target="_blank"
          class="infobar-group-item btn-icon"
        >
          <MdiIcon icon="whatsapp" :size="iconSize" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import {
  PHONE_NUMBER,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  WHATSAPP_URL,
} from "@/constants/index.js";
import { formatCellphoneNumber } from "@/utils";

export default {
  data() {
    return {
      iconSize: 35,
      formattedNumber: formatCellphoneNumber(PHONE_NUMBER),
      FACEBOOK_URL,
      INSTAGRAM_URL,
      WHATSAPP_URL,
    };
  },
  methods: {
    goToFacebook() {
      openInNewTab(FACEBOOK_URL);
    },
    goToInstagram() {
      openInNewTab(INSTAGRAM_URL);
    },
    goToWhatsApp() {
      openInNewTab(WHATSAPP_URL);
    },
  },
};
</script>

<style scoped lang="scss">
.infobar-outer {
  background: $black;
  height: $infobarHeight;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.infobar-inner {
  width: 100%;
  max-width: $screenMaxWidth;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.infobar-group {
  display: flex;
  justify-content: space-between;
  justify-content: center;
}
.infobar-group-item {
  padding: 5px 8px;
  display: flex;
  align-items: center;
  color: $white;
}
.infobar-group-item-phone {
  @media (max-width: $mobileBreakpoint) {
    display: none;
  }
}
.infobar-group-icon {
  padding: 5px 8px;
  display: flex;
  align-items: center;
  color: $gray;
}
</style>
