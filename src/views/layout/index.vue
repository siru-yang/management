<template>
  <div>
    <my-header></my-header>
    <my-footer></my-footer>
  </div>
</template>
<script>
import MyHeader from "./component/MyHeader.vue";
import MyFooter from "./component/MyFooter.vue";
export default {
  components: { MyHeader, MyFooter },
};
</script>
