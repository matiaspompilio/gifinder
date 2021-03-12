<template>
  <navbar active="/" />
  <trending />
</template>

<script>
import Navbar from '../components/Navbar';
import Trending from '../components/Trending.vue';

export default {
  components: {
    'navbar': Navbar,
    'trending': Trending,
  }
}
</script>