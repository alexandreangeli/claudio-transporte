<template>
  <div class="service-card">
    <Icon :icon="icon" :size="50" />
    <div>
      <h3>{{ title }}</h3>
      <p>
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: "string",
      required: true,
    },
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
  },
};
</script>

<style lang="scss">
.service-card {
  align-items: center;
  display: flex;
  @media (max-width: $mobileBreakpoint) {
    text-align: center;
    display: grid;
  }
}
.service-card .icon-wrapper {
  margin-right: 25px;
  border-width: 1px;
  border-style: solid;
  padding: 15px;
  border-radius: 999px;
  @media (max-width: $mobileBreakpoint) {
    margin: 0 auto;
  }
}
</style>
