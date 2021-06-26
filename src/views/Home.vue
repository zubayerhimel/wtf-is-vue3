<template>
  <div class="home">
    <input type="text" v-model="search" />
    <p>Search item - {{ search }}</p>
    <div v-for="name in matchingName" :key="name">
      <p>{{ name }}</p>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch, watchEffect } from "vue";
export default {
  name: "Home",
  setup() {
    const search = ref("");
    const names = ref(["Mario", "Yoshi", "Luigi", "Toad", "Bower", "Koopa", "Peach"]);

    // watch
    watch(search, () => {
      console.log("watching");
    });

    watchEffect(() => {
      console.log("Watch effect ran");
    });

    // functions
    const matchingName = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });
    return { names, search, matchingName };
  },
};
</script>
