<template>
  <div class="infobar-outer">
    <div class="infobar-inner">
      <div class="infobar-group">
        <div class="infobar-group-item">
          <map-marker-icon class="infobar-group-icon" />
          Cascavel - PR
        </div>
        <div class="infobar-group-item infobar-group-item-phone">
          <phone-icon class="infobar-group-icon" />
          {{ formattedNumber }}
        </div>
      </div>
      <div class="infobar-group">
        <a
          :href="FACEBOOK_URL"
          target="_blank"
          class="infobar-group-item btn-icon"
        >
          <facebook-icon :size="iconSize" />
        </a>
        <a
          :href="INSTAGRAM_URL"
          target="_blank"
          class="infobar-group-item btn-icon"
        >
          <instagram-icon :size="iconSize" />
        </a>
        <a
          :href="WHATSAPP_URL"
          target="_blank"
          class="infobar-group-item btn-icon"
        >
          <whatsapp-icon :size="iconSize" />
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
}
.infobar-inner {
  max-width: $screenMaxWidth;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.infobar-group {
  display: flex;
  justify-content: space-between;
  justify-content: center;
  @media (max-width: $mobileBreakpoint) {
    flex-grow: 1;
  }
}
.infobar-group-item {
  padding: 5px 8px;
  display: flex;
  align-items: center;
  color: $white;
}
.infobar-group-item-phone {
  @media (max-width: 420px) {
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
