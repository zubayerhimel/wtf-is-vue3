<template>
  <div class="home">
    <h1>Home</h1>
    <post-list :posts="posts" />
  </div>
</template>

<script>
import { ref } from "vue";
import PostList from "../components/PostList.vue";
export default {
  components: { PostList },
  name: "Home",
  setup() {
    const posts = ref([]);
    console.log("heheh");
    const error = ref(null);

    const load = async () => {
      console.log("this is called");
      try {
        let data = await fetch("http://localhost:3000/posts");
        if (!data.ok) {
          throw Error("No data available");
        }
        posts.value = await data.json();
      } catch (error) {
        error.value = error.message;
        console.log(error.value);
      }
    };
    load();
    return { posts };
  },
};
</script>
