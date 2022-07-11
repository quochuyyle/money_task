<template>
  <navigation-brand />
  <slot />
</template>

<script>
import NavigationBrand from "@/components/NavigationBrand";

export default {
  name: "authLayout",
  components: {
    NavigationBrand,
  },
};
</script>

<style scoped></style>
