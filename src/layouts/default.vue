<template>
  <navigation-header />
  <slot />
  <navigation-bottom v-if="meta.isShowFooter" />
</template>

<script>
import NavigationBottom from "@/components/NavigationBottom";
import NavigationHeader from "@/components/NavigationHeader";
import { useRoute } from "vue-router";
import { computed } from "vue";

export default {
  name: "defaultLayout",
  components: {
    NavigationBottom,
    NavigationHeader,
  },
  setup() {
    const route = useRoute();
    return {
      meta: computed(() => route.meta),
    };
  },
};
</script>

<style scoped></style>
