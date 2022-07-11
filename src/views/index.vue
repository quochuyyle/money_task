<template>
  <h1>Hello 1</h1>
  <div v-if="user" class="mt-6">{{ user.displayName }}</div>
</template>

<script>
import { useUser } from "@/composables/useUser";

export default {
  name: "HomeView",
  setup() {
    const { getUser } = useUser();
    const { user } = getUser();
    console.log(user);
    return { user };
  },
};
</script>

<style scoped></style>
