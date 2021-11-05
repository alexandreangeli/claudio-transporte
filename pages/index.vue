<template>
  <div>
    <InfoBar />
    <ToolBar />
    <Banner />
    <Company />
    <Services />
    <Footer />
  </div>
</template>

<script>
import { COMPANY_NAME } from "@/constants/index.js";
export default {
  head() {
    return {
      title: COMPANY_NAME,
    };
  },
};
</script>
