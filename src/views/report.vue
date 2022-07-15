<template>
  <div class="w-full h-full absolute overflow-y-auto">
    <div class="row">
      <div class="container mx-auto px-8 p-2">
        <div class="flex mx-auto">
          <div
            v-for="(time, index) in REPORT_TIME"
            :key="index"
            class="flex text-center items-center bg-white text-gray-400 font-semibold w-auto h-8 rounded-lg p-2 even:mx-4"
          >
            {{ time.name }}
          </div>
        </div>
        <div>
          <line-chart />
        </div>
      </div>
    </div>
    <div class="row mt-2">
      <div class="container mx-auto px-8 p-2">
        <h3 class="text-primary text-xl font-bold my-3">Detail Transaction</h3>
        <div class="flex mx-auto mb-3">
          <div
            v-for="(category, index) in categories"
            :key="index"
            class="flex text-center items-center bg-white text-gray-400 font-semibold w-auto h-8 rounded-lg p-2 even:mx-4"
          >
            {{ category.name }}
          </div>
        </div>
        <div class="flex flex-col">
          <div class="flex justify-between p-4 bg-white rounded-lg mb-3">
            <div class="flex justify-between">
              <div class="h-12 w-12 bg-amber-300 rounded-lg mr-2.5"></div>
              <div>
                <h3 class="text-dark font-bold text-xl">Shoes</h3>
                <span class="text-gray-400 font-semibold text-sm"
                  >Sneaker Nike</span
                >
              </div>
            </div>
            <div class="text-right">
              <h3 class="font-bold text-xl text-red">-$20.00</h3>
              <span class="text-gray-400 font-semibold text-sm">Aug 26</span>
            </div>
          </div>
          <div class="flex justify-between p-4 bg-white rounded-lg mb-3">
            <div class="flex justify-between">
              <div class="h-12 w-12 bg-amber-300 rounded-lg mr-2.5"></div>
              <div>
                <h3 class="text-dark font-bold text-xl">Shoes</h3>
                <span class="text-gray-400 font-semibold text-sm"
                  >Sneaker Nike</span
                >
              </div>
            </div>
            <div class="text-right">
              <h3 class="font-bold text-xl text-red">-$20.00</h3>
              <span class="text-gray-400 font-semibold text-sm">Aug 26</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { REPORT_TIME, CATEGORIES } from "@/constants/index";
import LineChart from "@/components/chart/lineChart";
import useCollection from "@/composables/useCollection";

export default {
  name: "reportView",
  components: {
    LineChart,
  },
  setup() {
    const { getRecords } = useCollection("categories");
    const categories = getRecords();
    return {
      REPORT_TIME,
      CATEGORIES,
      categories,
    };
  },
};
</script>

<style scoped></style>
