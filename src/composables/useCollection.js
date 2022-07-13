import { ref } from "vue";
import { projectFireStore, addDoc, collection } from "@/configs/firebase";

const useCollection = (name) => {
  const error = ref(null);

  async function addRecord(record) {
    error.value = null;
    try {
      const response = await addDoc(collection(projectFireStore, name), record);
      return response;
    } catch (err) {
      console.log(err);
      error.value = err.message;
    }
  }

  return {
    addRecord,
    error,
  };
};

export default useCollection;
