<template>
  <navbar active='/search' />
  <search-form />
</template>

<script>
import Navbar from '../components/Navbar';
import SearchForm from '../components/SearchForm.vue';

export default {
  components: {
    'navbar': Navbar,
    'search-form': SearchForm,
  }
}
</script>