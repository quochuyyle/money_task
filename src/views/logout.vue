<template>
  <h1>Logout Page</h1>
</template>

<script>
import { useLogout } from "@/composables/useLogout";
import { useRouter } from "vue-router";

export default {
  name: "logoutView",
  setup() {
    const { error, logout } = useLogout();
    const router = useRouter();

    async function onLogout() {
      await logout();
      if (!error.value) router.push({ name: "Login", params: {} });
    }

    onLogout();

    return {};
  },
};
</script>

<style scoped></style>
