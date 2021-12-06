<template>
  <div id="app">
    <tab-menu></tab-menu>
    <transition mode=”out-in”>
      <router-view/>
    </transition>
    <top-button></top-button>
  </div>
</template>

<script>

import TabMenu from '@/components/TabMenu' 
import TopButton from '@/components/TopButton'


export default {
  name: 'App',
  components: {
    TabMenu,TopButton
  }
}

</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
  margin:0;
  background-color:rgba(255,250,250,0.6);
}

.v-enter {
  transform: translate(-100px, 0);
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-enter-active {
  transition: all 1s 0s ease;
}
.v-leave {
  transform: translate(0, 0);
  opacity: 1;
}
.v-leave-to {
  transform: translate(100px, 0);
  opacity: 0;
}
.v-leave-active {
  transition: all .5s 0s ease;
}

</style>