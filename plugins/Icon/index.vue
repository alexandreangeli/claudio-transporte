<template>
  <div class="icon-wrapper">
    <component :is="iconComponent" v-bind="$attrs" />
  </div>
</template>

<script>
import MapMarker from "vue-material-design-icons/MapMarker";
import Phone from "vue-material-design-icons/Phone";
import Facebook from "vue-material-design-icons/Facebook";
import Instagram from "vue-material-design-icons/Instagram";
import Whatsapp from "vue-material-design-icons/Whatsapp";
import Cog from "vue-material-design-icons/Cog";
import GasStation from "vue-material-design-icons/GasStation";
import BatteryCharging10 from "vue-material-design-icons/BatteryCharging10";
import TowTruck from "vue-material-design-icons/TowTruck";

export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
  components: {
    MapMarker,
    Phone,
    Facebook,
    Instagram,
    Whatsapp,
    Cog,
    GasStation,
    BatteryCharging10,
    TowTruck,
  },
  computed: {
    iconComponent() {
      switch (this.icon) {
        case "map-marker":
          return MapMarker;
        case "phone":
          return Phone;
        case "facebook":
          return Facebook;
        case "instagram":
          return Instagram;
        case "whatsapp":
          return Whatsapp;
        case "cog":
          return Cog;
        case "gas-station":
          return GasStation;
        case "battery-charging-10":
          return BatteryCharging10;
        case "tow-truck":
          return TowTruck;
        default:
          return "";
      }
    },
  },
};
</script>

<style scoped>
.icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
