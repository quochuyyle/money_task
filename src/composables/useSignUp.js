import { ref } from "vue";
import {
  createUserWithEmailAndPassword,
  projectAuth,
} from "@/configs/firebase";

const error = ref(null);
const isPending = ref(false);

async function signUp(email, password, fullName) {
  isPending.value = true;
  error.value = null;
  try {
    const response = await createUserWithEmailAndPassword(
      projectAuth,
      email,
      password
    );
    if (!response) throw new Error("Coud not create a new user.");
    await response.user.updateProfile({ displayName: fullName });
    return response;
  } catch (err) {
    console.log(err);
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
}

export function useSignUp() {
  return { error, isPending, signUp };
}
