<template>
  <h1>Trending posts</h1>
  <gifs-list :gifs="gifs.data" />
</template>

<script>
import GifsList from './GifsList.vue';
import { trendingGifs } from '../services/gifs';
export default {
  components: {
    "gifs-list": GifsList,
  },
  data() {
    return {
      gifs: {
        data: [],
        loading: false,
      },
    }
  },
  methods: {
    handleSubmit() {
      this.gifs = { ...this.gifs, loading: true };
      trendingGifs().then((results) => {
        this.gifs = {
          data: results,
          loading: false,
        }
      });
    }
  },
  mounted(){
    this.handleSubmit();
  }
}
</script>