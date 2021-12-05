<template>
  <div class="footer" v-html="copyright">
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      copyright: "杨思汝 / <a href='https://github.com/siru-yang?tab=repositories' class='href' target='_blank'>github</a>",
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 30px;
  background: #242839;
  position: fixed;
  bottom: 0;
  right: 0;
  line-height: 30px;
  font-size: 12px;
  color: #fff;
  ::v-deep .href:hover{
      color: blue;
  }
}
</style>
