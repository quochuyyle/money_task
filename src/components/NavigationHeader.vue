<template>
  <header id="header" class="py-8">
    <div class="container mx-auto px-8">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <div
            v-if="meta.leading"
            class="w-10 h-10 overflow-hidden rounded-full"
          >
            <img
              alt="User's Profile Avatar"
              class="w-full h-auto object-cover"
              size="sm"
              src="data:image/jpeg;base64,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"
            />
          </div>
          <h1 class="text-xl font-bold text-dark ml-2">{{ meta.text }}</h1>
        </div>
        <div class="flex">
          <ul>
            <li v-if="meta.isShowIconHeader">
              <i class="t2ico t2ico-notification text-2xl"></i>
            </li>
            <li v-else>
              <button class="font-bold text-dark text-xl outline-none">
                Add
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "NavigationHeader",
  setup() {
    const route = useRoute();
    return {
      meta: computed(() => route.meta),
    };
  },
};
</script>

<style scoped></style>
