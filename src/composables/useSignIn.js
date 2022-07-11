import { ref } from "vue";
import { projectAuth, signInWithEmailAndPassword } from "@/configs/firebase";

const error = ref(null);
const isPending = ref(false);

async function signIn(email, password) {
  error.value = null;
  try {
    const response = await signInWithEmailAndPassword(
      projectAuth,
      email,
      password
    );
    return response;
  } catch (err) {
    console.log(err);
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
}

export function useSignIn() {
  return { error, isPending, signIn };
}
