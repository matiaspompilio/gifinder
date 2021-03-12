<template>
  <el-menu
    :router="true"
    id="nav"
    :default-active="active"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="/">
      Home
    </el-menu-item>
    <el-menu-item index="/search">
      Search
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  props: {
    active: String, 
  },
}
</script>