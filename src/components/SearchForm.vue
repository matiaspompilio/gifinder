<template>
  <el-form
    :inline="true"
    :model="form"
    class="form-inline"
    @submit.prevent="handleSubmit"
  >
    <el-form-item>
      <el-input
        v-model="form.search"
        placeholder="Type your favourite content"
      />
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        icon="el-icon-search"
        @click="handleSubmit"
      >
        Search
      </el-button>
    </el-form-item>
  </el-form>
  <gifs-list :gifs="gifs.data" />
</template>

<script>
import GifsList from './GifsList.vue';
import { searchGifs } from '../services/gifs';
export default {
  components: {
    "gifs-list": GifsList,
  },
  data() {
    return {
      form: {
        search: '',
      },
      gifs: {
        data: [],
        loading: false,
      },
    }
  },
  methods: {
    handleSubmit() {
      this.gifs = { ...this.gifs, loading: true };
      searchGifs({ search: this.form.search }).then((results) => {
        this.gifs = {
          data: results,
          loading: false,
        }
      });
    }
  }
}
</script>
<style scoped>
.form-inline{
  width: 100%;
}
</style>