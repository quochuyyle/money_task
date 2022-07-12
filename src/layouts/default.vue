<template>
  <navigation-header />
  <slot />
  <navigation-bottom />
</template>

<script>
import NavigationBottom from "@/components/NavigationBottom";
import NavigationHeader from "@/components/NavigationHeader";

export default {
  name: "defaultLayout",
  components: {
    NavigationBottom,
    NavigationHeader,
  },
};
</script>

<style scoped></style>
