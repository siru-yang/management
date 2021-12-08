<template>
  <div class="header flex-row flex-end flex-align-center"> 
    <div @click="logout" class="cursor-pointer white mr-10">登出</div>    
  </div>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 64px;
  background: #242839;
}
</style>

<script>
export default {
  methods:{
    logout(){
      this.$store.commit('REMOVE_TOKEN')
      this.$store.commit('SET_ROLES',[])
      console.log("登出后的token：",this.$store.getters.token)
      console.log("登出后的roles：",this.$store.getters.roles)
      this.$router.push({path: '/login'})
    }
  }
}
</script>