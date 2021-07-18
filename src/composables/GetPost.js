import { ref } from "vue";

const GetPost = (id) => {
  const post = ref(null);
  const error = ref(null);
  const load = async () => {
    console.log("this is called");
    try {
      let data = await fetch("http://localhost:3000/posts/" + id);
      if (!data.ok) {
        throw Error("Post doesn't exist");
      }
      post.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { post, error, load };
};

export default GetPost;
