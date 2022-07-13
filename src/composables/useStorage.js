import { ref } from "vue";
import {
  projectStorage,
  ref as refFilebaseStorage,
  uploadBytes,
  getDownloadURL,
} from "@/configs/firebase";
import { useUser } from "./useUser";

const { getUser } = useUser();
const { user } = getUser();

const useStorage = (name) => {
  const error = ref(null);
  const filePath = ref(null);
  const url = ref(null);

  async function uploadFile(file) {
    filePath.value = `${name}/${user.value.uid}/${file.name}`;
    const fileRef = refFilebaseStorage(projectStorage, filePath.value);

    try {
      const response = await uploadBytes(fileRef, file);
      console.log(response);
      url.value = await getDownloadURL(fileRef);
      return url.value;
    } catch (err) {
      console.log(err);
      error.value = err.message;
    }
  }

  return {
    uploadFile,
    error,
    url,
    filePath,
  };
};

export default useStorage;
