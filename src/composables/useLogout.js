import { ref } from "vue";
import { projectAuth, signOut } from "@/configs/firebase";

const error = ref(null);

async function logout() {
  error.value = null;
  try {
    const response = await signOut(projectAuth);
    return response;
  } catch (err) {
    console.log(err);
    error.value = err.message;
  }
}

export function useLogout() {
  return { error, logout };
}
