<template>
  <div></div>
</template>
<script>
export default {
  name: "JSDemo",
  data() {
    return {};
  },
  mounted() {
    // this.fun1();
    // this.fun();
    this.logInOrder([1, 2, 3, 4, 5]);
  },
  methods: {
    emptyDemo() {
      //null&&undefined
      let test = undefined;
      console.log("test:", test);
      if (!test) {
        console.log("!test");
      }
      let test1 = null;
      console.log("test1:", test1);
      if (!test1) {
        console.log("!null");
      }
      let test2;
      console.log("test2:", test2);
      if (test2 && "name" in test2) {
        console.log("test2.name");
      }
      let test3 = Object();
      console.log("test3.name:", test3.name);
      if (!test3.name) {
        console.log("!test3.name");
      }
    },
    listDemo() {
      //数组
      let tlist = [0, 1, 2, 2, 3, 4, 5, 6, 7];
      for (let i = 0; i < tlist.length; i++) {
        console.log("i:", i);
        if (tlist[i] == 2) {
          tlist.splice(i, 1);
          i--;
          console.log("移除");
        }
        console.log("tlist", tlist);
      }
      console.log("tlist:", tlist);
      let tlist1 = [];
      console.log("tlist1:", tlist1);
      console.log("tlist1.length:", tlist1.length);
    },
    dictDemo() {
      //字典
      let tdict = {};
      tdict.name = "siru";
      tdict.data = "yang";
      console.log("tdict:", tdict);
      delete tdict.name;
      console.log("tdict:", tdict);
    },
    // asyn&&await
    log2(time) {
      setTimeout(function () {
        console.log(time);
        return 1;
      }, time);
    },
    async fun1() {
      const a = await this.log2(5000);
      await this.log2(10000);
      this.log2(2000);
      console.log(a);
      console.log(1);
    },
    log(time) {
      return new Promise((resolve) => {
        setTimeout(function () {
          console.log(time);
          resolve(time);
        }, time);
      });
    },
    async fun() {
      let a = await this.log(5000);
      let b = await this.log(10000);
      this.log(2000);
      console.log(1);
      console.log("a:", a, typeof a);
      console.log("b:", b, typeof b);
    },
    fetch(time, url) {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(time, url);
          resolve(url);
        }, time);
      });
    },
    async logInOrder(urls) {
      // 并发读取远程URL
      const textPromises = urls.map(async (url, index) => {
        console.log("Promise:", url);
        const response = await this.fetch((5 - index) * 1000, url);
        console.log(typeof response);
        // console.log(textPromises);
        return response;
      });
      // console.log(textPromises);
      // // 按次序输出
      for (const textPromise of textPromises) {
        // console.log(textPromise,typeof textPromise);
        console.log(await textPromise,typeof textPromise);
      }
    },
  },
};
</script>