<template>
  <div>
    <my-header></my-header>
    <my-main ref="main"></my-main>
    <my-footer></my-footer>
  </div>
</template>
<script>
import MyHeader from "./component/MyHeader.vue";
import MyFooter from "./component/MyFooter.vue";
import MyMain from "./component/MyMain.vue";
export default {
  components: { MyHeader, MyFooter, MyMain },
  mounted() {
    console.log(this.$refs.main.array);
    this.$refs.main.getSonData()
  },
};
</script>
