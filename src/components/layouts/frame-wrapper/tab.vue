<template>
  <div class="tab">
    <div
      class="tab-item"
      v-for="(tab, index) in tabList"
      :key="index"
      @click="current = index"
      :class="{ true: 'activated' }[current === index]"
    >
      <div class="tab-content absolute">
        看健康借口接口即可见课件
      </div>
      <i class="el-icon-close tab-close" @click="close(index)"></i>
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <symbol id="tab-geometry-left" viewBox="0 0 100 36">
            <path d="M17 0h197v36H0v-2c4.5 0 9-3.5 9-8V8c0-4.5 3.5-8 8-8z"></path>
          </symbol>
          <symbol id="tab-geometry-right" viewBox="0 0 100 36">
            <use xlink:href="#tab-geometry-left"></use>
          </symbol>
          <clipPath id="crop">
            <rect width="100%" x="0" class="mask"></rect>
          </clipPath>
        </defs>
        <svg width="52%">
          <use xlink:href="#tab-geometry-left" width="100" height="36" class="tab-geometry"></use>
        </svg>
        <g transform="scale(-1, 1)">
          <svg width="52%" x="-100%" y="0">
            <use xlink:href="#tab-geometry-right" width="100" height="36" class="tab-geometry"></use>
          </svg>
        </g>
      </svg>
    </div>
  </div>
</template>

<style lang="scss">
  @import 'tab';
</style>

<script>
  export default {
    data() {
      return {
        current: 4,
        tabList: new Array(7).fill(0).map((item, index) => {
          return {
            name: index,
            index: index
          }
        })
      }
    },
    methods: {
      close(index) {
        this.tabList.splice(index, 1)
      }
    }
  }
</script>
