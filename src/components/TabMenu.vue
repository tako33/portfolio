<template>
  <div>
    <h2 id="sitename">Takayama's Site</h2>
    <ol>
      <li v-for="(item, index) in items" :key=index >
         <router-link v-bind:to=item.path >
            {{ item.title }}
         </router-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'TabMenu',
  data () {
    buttonState: false
    return {
      items: [
        { title: 'TOP', path: '/' },
        { title: 'PROFILE', path: '/profile' },
        { title: 'SKILLS', path: '/skills' },
        { title: 'OUTPUTS', path: '/outputs' }
      ]
    }
  }
}
</script>

<style scoped>

div {
  margin-bottom:10%;
}
ol {
  margin: 0,auto;
  display:flex; 
  justify-content: center;
  padding: 0;
  list-style: none;
}

li {
  
  width: 100px;
  height: 50px;
  margin-left:10px;
  margin-right:10px;
  font-size: 16px;
  font-weight:bold;
  border:solid 2px skyblue;
 
  position: relative;
}

li:hover {
  opacity: 0.4;
}


a {
  font-family: "Arial";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: black;
  text-decoration: none;
  line-height: 50px;
}


</style>