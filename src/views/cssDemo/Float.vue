<template>
  <div>
    <div class="wrap">
        <div class="left"></div>
        <div class="main"></div>
    </div>
  </div>
</template>

<style scoped>
div {
    padding: 15px 20px;
    font-size: 14px;
    color: #333;
}
.wrap{
    border: chartreuse 1px solid;
    /* float: left; */
    overflow: auto;
}
.main{
    float: left;
    width: 300px;
    height: 400px;
    background-color: blue;
}
.left{
    float: left;
    width: 300px;
    height: 400px;
    background-color: red;
}
</style>

<script>
export default {
    data(){
        return{
            // test,

        }
    },
    mounted(){
        // console.log("test:",test)
    }
    
}
</script>