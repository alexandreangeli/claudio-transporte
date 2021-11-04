import Vue from "vue";
import MapMarker from "vue-material-design-icons/mapMarker.vue";
import Phone from "vue-material-design-icons/phone.vue";
import Facebook from "vue-material-design-icons/facebook.vue";
import Instagram from "vue-material-design-icons/instagram.vue";
import Whatsapp from "vue-material-design-icons/whatsapp.vue";

export default function materialIcons() {
  Vue.component("map-marker-icon", MapMarker);
  Vue.component("phone-icon", Phone);
  Vue.component("facebook-icon", Facebook);
  Vue.component("instagram-icon", Instagram);
  Vue.component("whatsapp-icon", Whatsapp);
}
