import { ref } from "vue";
import { onAuthStateChanged, projectAuth } from "@/configs/firebase";

const user = ref(projectAuth.currentUser);

onAuthStateChanged(function (_user) {
  if (_user) user.value = _user;
});

function getUser() {
  return { user };
}

export function useUser() {
  return {
    getUser,
  };
}
