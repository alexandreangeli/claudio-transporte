import Vue from "vue";
import MapMarker from "vue-material-design-icons/MapMarker";
import Phone from "vue-material-design-icons/Phone";
import Facebook from "vue-material-design-icons/Facebook";
import Instagram from "vue-material-design-icons/Instagram";
import Whatsapp from "vue-material-design-icons/Whatsapp";

export default function materialIcons() {
  Vue.component("map-marker-icon", MapMarker);
  Vue.component("phone-icon", Phone);
  Vue.component("facebook-icon", Facebook);
  Vue.component("instagram-icon", Instagram);
  Vue.component("whatsapp-icon", Whatsapp);
}
