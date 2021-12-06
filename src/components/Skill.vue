<template>
  <div class="skill">
    <div class="skill-box">
    <h3><v-icon name="code" />プログラミングスキル</h3>
    <div class="content" v-for="item in skillList" :key=item>
      <h3 class="pgname"> {{ item.name }} </h3>
      <p> {{ item.text }} </p>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skill',
  data () {
    return {
      skillList: [
      {name: 'HTML',
      text: '学習開始:5年前'},
      {name: 'CSS',
      text: '学習開始:5年前'},
      {name: 'JavaScript',
      text: '学習開始:5年前'},
      {name: 'C',
      text: '学習開始:2年前'},
      {name: 'Java',
      text: '学習開始:1年前'},
      {name: 'Python',
      text: '学習開始:1年前'},
      {name: 'Vue.js',
      text: '学習開始:1週間前'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div.skill {
  text-align: center;
  width:80%;
  margin-left: auto;
  margin-right: auto;
  margin-top:5%;
  
}
.skill-box{
}
div.content {
  background-color: #eee;
  display: inline-block;
  margin: 10px;
  width: 25%;
}
h2{
  padding-top:4%;
}
h3 {
  color: black;
  
  border-left: solid 5px #b0c4de;
  border-bottom: solid 3px #b0c4de;
}

p {
  width: 90%;
  display: inline-block;
}
.pgname{
  border:0;
  background-color:#eee;
}

</style>