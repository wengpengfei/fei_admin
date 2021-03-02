<template>
  <frame-wrapper></frame-wrapper>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import ApplicationModule from '@/store/ApplicationModule'
  import FrameWrapper from '@/components/layouts/frame-wrapper/index.vue'

  @Component({
    components: {
      FrameWrapper
    }
  })
  export default class extends Vue {
    // todo
    created() {
      ApplicationModule.getApplicationInfo()
    }
  }
</script>
