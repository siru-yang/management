<template>
  <div>
    <el-form :model="formData" label-width="80">
      <el-form-item label="姓名">
        <el-input v-model="formData.name" readonly></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="submit">提交</el-button>
      </el-form-item>
    </el-form>

    <div class="son">
      <div class="father"></div>
    </div>
    <div class="flex-column father">
      <div class="son"></div>
      <div>lightgreen</div>
      <div>lightgreen</div>
      <div>lightgreen</div>
      <div>lightgreen</div>
      <div>lightgreen</div>
      <div>lightgreen</div>
      <div>lightgreen</div>
      <div>lightgreen</div>
      <div>lightgreen</div>
      <div>lightgreen</div>
      <div>lightgreen</div>
      <div>lightgreen</div>
      <div>lightgreen</div>
      <div>lightgreen</div>
      <div>lightgreen</div>
      <div>lightgreen</div>
      <div>lightgreen</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      array: [1, 2, 3],
      formData:{
        name:""
      }
    };
  },
  mounted(){
    let s = "1"
    console.log("s" + 1)
    console.log(s++)
    console.log(parseInt("1112g"))
  },
  methods:{
    getSonData(){
      console.log(this.array)
    },
    submit(){
      console.log(this.formData)
    }
  }
};
</script>

<style lang="scss" scoped>
.father{
  width: 500px;
  // height: 300px;
  background: skyblue;
  // overflow: auto;
  // padding:auto

}
.son{
  // margin: auto;
  overflow: hidden;
  width: 50px;
  height: 50px;
  background:tomato;
}
.flex-column{
  display: flex;
  flex-flow: column nowrap;
}
.bg-green{
  color: lightgreen;
}
</style>