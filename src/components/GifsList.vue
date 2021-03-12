<template>
  <div class="wrapper">
    <div
      v-for="gif in gifs"
      :key="gif.id"
    >
      <img :src="gif.url">
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      gifs: {
        type: Array,
        required: true
      },
    },
  }
</script>

<style scoped>
  .wrapper{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  img {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    max-width: 300px;
  }
</style>