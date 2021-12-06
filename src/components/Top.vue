<template>
  <div class="top">
    <div class="content">
      <h2>初めてのポートフォリオサイトへ<br>ようこそ</h2>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Top',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>

div.top {
  text-align: center;
  background-image:url("../assets/forest.jpg");
  background-size:cover;
  height:650px;
}

div.content {
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  height:100%;
  
  
}

h3 {
  color: black;
  border-left: solid 5px #b0c4de;
  border-bottom: solid 3px #b0c4de;
}
h2{
  color:rgba(255,250,250,0.7);
  
  background-color:
}
p {
  width: 90%;
  display: inline-block;
  text-align: left;
}
/*#career{
  margin: 0,auto;
  width:60%;
}
#career p{
  text-align: left;
  width: 90%;
}
*/

</style>
