<style src="./header.scss" lang="scss"></style>
<template>
  <el-header :height="height" :style="style">
    <div class="flex header-tools justify-between">
      <div class="header-tools-left">
        <i class="el-icon-s-fold tool"></i>
        <i class="el-icon-refresh tool"></i>
      </div>
      <div class="header-tools-right">
        <el-badge :value="12">
          <i class="el-icon-bell tool"></i>
        </el-badge>
        <i class="el-icon-full-screen tool"></i>
        <el-dropdown>
          <div class="ml-1 mr-3">管理员<i class="el-icon-more ml-2"></i></div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><i class="el-icon-menu"></i>控制台</el-dropdown-item>
            <el-dropdown-item><i class="el-icon-s-tools"></i>个人设置</el-dropdown-item>
            <el-dropdown-item divided><i class="el-icon-switch-button"></i>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </el-header>
</template>

<script>
  export default {
    props: {
      height: {
        type: [String, Number],
        default: '60px'
      }
    },
    computed: {
      style() {
        return {
          lineHeight: this.height
        }
      }
    }
  }
</script>
