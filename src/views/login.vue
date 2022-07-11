<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!--      Start: Form-->
      <form class="flex flex-col space-y-6" @submit.prevent="onSubmit">
        <div class="row">
          <label class="flex flex-col" for="email">
            <span class="font-semibold">Email Address</span>
            <input
              id="email"
              v-model="email"
              autocomplete="username"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              placeholder="example@gmail.com"
              type="text"
            />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="password">
            <span class="font-semibold">Password</span>
            <input
              id="password"
              v-model="password"
              autocomplete="current-password"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              placeholder="password"
              type="password"
            />
          </label>
        </div>
        <div class="row">
          <button
            v-if="!isPending"
            class="py-3 text-center w-full bg-primary text-white font-bold"
            type="submit"
          >
            Sign in
          </button>
          <button
            v-else
            class="py-3 text-center w-full bg-primary text-white font-bold"
            type="submit"
          >
            Loading...
          </button>
        </div>
      </form>
      <!--      Start: Error-->
      <div v-if="error" class="text-left text-red mt-4">
        <span>{{ error }}</span>
      </div>
      <!--      Start: Direction-->
      <div class="w-full text-center mt-6">
        <span class="font-semibold">I'm a new user.</span>
        <span class="ml-1">
          <router-link
            :to="{ name: 'Register', params: {} }"
            class="text-primary font-bold"
            >Sign Up</router-link
          >
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useSignIn } from "@/composables/useSignIn";
import { useRouter } from "vue-router";

export default {
  name: "loginView",
  setup() {
    const { error, isPending, signIn } = useSignIn();
    const router = useRouter();
    const email = ref("");
    const password = ref("");

    async function onSubmit() {
      await signIn(email.value, password.value);
      if (!error.value) router.push({ name: " ", params: {} });
    }

    return { onSubmit, email, password, error, isPending };
  },
};
</script>

<style scoped></style>
