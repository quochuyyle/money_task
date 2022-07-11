<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!--      Start: Form-->
      <form class="flex flex-col space-y-6" @submit.prevent="onSubmit">
        <div class="row">
          <label class="flex flex-col" for="fullName">
            <span class="font-semibold">Full Name</span>
            <input
              id="fullName"
              v-model="fullName"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              placeholder="iMoney...."
              type="text"
            />
          </label>
        </div>
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
            class="py-3 text-center w-full bg-gray-800 text-white font-bold"
            type="submit"
          >
            Sign up
          </button>
          <button
            v-else
            class="py-3 text-center w-full bg-primary text-white font-bold"
            disabled
            type="submit"
          >
            Loading....
          </button>
        </div>
      </form>
      <!--      Start: Error-->
      <div v-if="error" class="text-left text-red mt-4">
        <span>{{ error }}</span>
      </div>
      <!--      Start: Direction-->
      <div class="w-full text-center mt-6">
        <span class="font-semibold">I'm already a member.</span>
        <span class="ml-1">
          <router-link
            :to="{ name: 'Login', params: {} }"
            class="text-primary font-bold"
            >Sign In</router-link
          >
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useSignUp } from "@/composables/useSignUp";
import { useRouter } from "vue-router";

export default {
  name: "AboutView",
  setup() {
    const { error, isPending, signUp } = useSignUp();
    const router = useRouter();
    const fullName = ref("");
    const email = ref("");
    const password = ref("");

    async function onSubmit() {
      await signUp(email.value, password.value, fullName.value);
      if (!error.value) router.push({ name: "Home", params: {} });
    }

    return {
      onSubmit,
      fullName,
      email,
      password,
      isPending,
      error,
    };
  },
};
</script>

<style scoped></style>
