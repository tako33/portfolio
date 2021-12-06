<template>
  <div id="app" class="Page">
    <div class="Page-Btn" @click="scrollTop">
    <i class="fas fa-chevron-up Page-Btn-Icon">▲</i>
  </div>
</div>
</template>

<script>
export default {
  name: 'TopButton',
  data () {
    return {
    }
    },
    methods: {
        scrollTop: function(){
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
        }
      }
}
</script>

<style scoped>

.Page-Btn{
  position: fixed;
  right: 14px;
  bottom: 14px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 50%;
  background: #5bc8ac;
}
.Page-Btn-Icon{
  color: #fff;
  font-size: 18px;
}
</style>