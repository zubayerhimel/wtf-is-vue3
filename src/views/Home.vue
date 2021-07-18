<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <post-list :posts="posts" />
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import GetPosts from "../composables/GetPosts";
import PostList from "../components/PostList.vue";
export default {
  components: { PostList },
  name: "Home",
  setup() {
    const { posts, error, load } = GetPosts();
    load();
    return { posts, error };
  },
};
</script>
