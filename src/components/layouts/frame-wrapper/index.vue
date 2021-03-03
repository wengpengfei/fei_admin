<template>
  <el-container id="app">
    <fw-side></fw-side>
    <el-container>
      <fw-header></fw-header>
      <el-main>
        <fw-tab></fw-tab>
        <router-view></router-view>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
  import FwSide from './side'
  import FwHeader from './header'
  import FwTab from './tab'

  export default {
    components: {
      FwHeader,
      FwSide,
      FwTab
    }
  }
</script>
