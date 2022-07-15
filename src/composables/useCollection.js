import { ref } from "vue";
import {
  projectFireStore,
  addDoc,
  collection,
  getDocs,
  query,
} from "@/configs/firebase";
import router from "@/router";

const useCollection = (name) => {
  const error = ref(null);
  const records = ref([]);

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

  async function getRecords() {
    const q = query(collection(projectFireStore, name));
    const data = await getDocs(q);
    data.forEach((record) => {
      console.log(record);
      records.value.push(record.data());
    });
    console.log(records);
    //return records.value;
  }

  return {
    addRecord,
    error,
    getRecords,
    records,
  };
};

export default useCollection;
