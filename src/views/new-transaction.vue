<template>
  <form action="" @submit.prevent="onSubmit">
    <!--    Start: Main Form-->
    <div class="row mt-8">
      <div class="bg-white rounded-lg py-4">
        <div class="container mx-auto px-8">
          <div class="row">
            <label class="flex items-end" for="total">
              <div class="w-10 text-right leading-10 mr-4 pb-1">
                <span
                  class="inline-block px-1 text-dark border border-dark rounded text-sm font-bold"
                  >USD</span
                >
              </div>
              <div class="flex flex-col border-b border-gray-100 pb-1">
                <span class="font-semibold text-xs text-dark">Total</span>
                <input
                  v-model="total"
                  class="text-4xl text-dark w-full outline-none top-1"
                  placeholder="0"
                  type="number"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label class="flex items-center" for="category">
              <div
                class="flex flex-none items-center w-10 text-right leading-10 mr-4"
              >
                <span
                  class="inline-block ml-auto text-dark w-8 h-8 rounded-full bg-blue-300"
                ></span>
              </div>
              <div class="flex-1 border-b border-gray-100 py-3">
                <input
                  id="category"
                  v-model="category"
                  class="text-xl text-dark w-full outline-none top-1"
                  placeholder="Select a category"
                  type="text"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label class="flex items-center" for="note">
              <div
                class="flex flex-none items-center w-10 text-right leading-10 mr-4"
              >
                <span class="flex-none w-10 mr-4">
                  <i class="t2ico t2ico-document text-2xl"></i>
                </span>
              </div>
              <div class="flex-1 border-b border-gray-100 py-3">
                <input
                  id="note"
                  v-model="note"
                  class="text-dark w-full outline-none top-1"
                  placeholder="Note"
                  type="text"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label class="flex items-center" for="time">
              <div class="flex-none items-center w-10 mr-4">
                <span class="flex items-center justify-end text-dark">
                  <i class="t2ico t2ico-calendar text-2xl"></i>
                </span>
              </div>
              <div class="flex-1 py-2 border-b border-gray-100">
                <div class="text-dark w-full">
                  <datepicker v-model="time" />
                </div>
              </div>
            </label>
          </div>
          <div class="row">
            <label class="flex items-center" for="wallet">
              <div class="flex-none items-center w-10 mr-4">
                <span class="flex items-center justify-end text-dark">
                  <i class="t2ico t2ico-wallet text-2xl"></i>
                </span>
              </div>
              <div class="flex-1 py-2">
                <div class="text-dark w-full">My Wallet</div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-8">
      <button
        v-if="!isMoreDetails"
        class="bg-white rounded-lg py-3 w-full text-primary font-semibold"
        @click="isMoreDetails = true"
      >
        More details
      </button>
    </div>
    <template v-if="isMoreDetails">
      <!--    Start: Advanced Form-->
      <div class="row mt-8">
        <div class="bg-white rounded-lg py-4">
          <div class="container mx-auto px-8">
            <div class="row">
              <label class="flex items-center text-dark" for="location">
                <div class="flex-none items-center w-10 mr-4">
                  <span class="flex items-center justify-end">
                    <i class="t2ico t2ico-location text-2xl"></i>
                  </span>
                </div>
                <div class="flex-1 py-2 border-b border-gray-100">
                  <!--                  <input-->
                  <!--                    id="location"-->
                  <!--                    v-model="location"-->
                  <!--                    class="text-xl text-dark w-full outline-none"-->
                  <!--                    placeholder="Select a location"-->
                  <!--                    type="text"-->
                  <!--                  />-->
                  <vue-select v-model="location"></vue-select>
                </div>
              </label>
            </div>
            <div class="row">
              <label class="flex items-center" for="withPerson">
                <div class="flex-none items-center w-10 mr-4">
                  <span class="flex items-center justify-end text-dark">
                    <i class="t2ico t2ico-users text-2xl"></i>
                  </span>
                </div>
                <div class="flex-1 py-2">
                  <input
                    id="withPerson"
                    v-model="withPerson"
                    class="text-xl text-dark w-full outline-none"
                    placeholder="With person"
                    type="text"
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>

      <!--      Start: Upload-->
      <div class="row mt-8">
        <div class="bg-white rounded-lg py-4">
          <div class="container mx-auto px-8">
            <div class="row">
              <label class="flex items-center text-primary" for="file">
                <div class="flex-none items-center w-10 mr-4">
                  <span class="flex items-center justify-end">
                    <i class="t2ico t2ico-camera text-2xl"></i>
                  </span>
                </div>
                <div class="flex-1 py-2 border-gray-100">
                  <div class="w-full font-semibold">Upload photos</div>
                  <input
                    id="file"
                    class="w-0 h-0 overflow-hidden absolute"
                    name=""
                    type="file"
                    @change="onChangeFile"
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
        <div class="text-red my-3">{{ errorFile }}</div>
      </div>
    </template>

    <div class="row mt-8">
      <div class="container mx-auto bg-white text-white h-full w-full">
        <button
          class="bg-primary w-full font-semibold text-center text-xl py-2"
          type="button"
        >
          <router-link :to="{ name: 'Home', params: {} }">Back</router-link>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { ref } from "vue";
import { useUser } from "@/composables/useUser";
import useCollection from "@/composables/useCollection";
import useStorage from "@/composables/useStorage";
import Datepicker from "@vuepic/vue-datepicker";
import VueSelect from "vue-select";

export default {
  name: "newTransactionView",
  components: {
    Datepicker,
    VueSelect,
  },
  data() {
    return {
      countries: [],
    };
  },
  setup() {
    const isMoreDetails = ref(false);
    const { getUser } = useUser();
    const { addRecord, error } = useCollection("transactions");
    const { uploadFile, url } = useStorage("transactions");

    const total = ref(0);
    const category = ref("");
    const note = ref("");
    const time = ref(new Date());
    const location = ref("");
    const withPerson = ref("");
    const file = ref(null);
    const errorFile = ref(null);

    function onChangeFile(event) {
      const selected = event.target.files[0];
      const typesFile = ["image/png", "image/jpg"];

      if (selected && typesFile.includes(selected.type)) {
        file.value = selected;
        errorFile.value = null;
      } else {
        file.value = null;
        errorFile.value = "Please select jpg or pgn image only !";
      }
    }

    async function onSubmit() {
      if (file.value) await uploadFile(file.value);
      const { user } = getUser();
      const transaction = {
        total: parseInt(total.value),
        category: category.value,
        note: note.value,
        time: time.value,
        userId: user.value.uid,
        location: location.value,
        withPerson: withPerson.value,
        thumbnail: url.value,
      };
      await addRecord(transaction);
      console.log(error);
      console.log("Created");
    }

    return {
      onSubmit,
      onChangeFile,
      isMoreDetails,
      total,
      category,
      note,
      time,
      errorFile,
      location,
      withPerson,
      error,
    };
  },
};
</script>

<style scoped></style>
