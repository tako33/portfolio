<template>
  <div class="output">
    <div class="con">
      <h3>制作物</h3>
      <div>
        <h2>comiing soon...</h2>
        <p>まだございません…<br>今回のWeb制作に続いてこれからどんどん開発を行っていきたいと考えております！<a href = "https://akarie.co.jp/">株式会社アカリエ</a>さんのインターンシップを通じて新たなスキルを身に着け、ここの欄を埋められるよう精進して学習を進めていきます！乞うご期待を！</p>
      </div>
    </div>
    <div class="content" v-for="item in 6" :key=item>
      <h3> {{ tit }} </h3>
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Output',
  data () {
    return {
      tit:'comiing soon...'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div.output {
  text-align: center;
}

.con{
  background-color: #48d1cc;
  display: inline-block;
  margin: 10px;
  width: 80%;
}
div.content {
  background-color: #eee;
  display: inline-block;
  margin: 10px;
  width: 80%;
}

h3 {
  color: black;
}

.con h3{
  color:white;
}

p {
  width: 90%;
  display: inline-block;
  text-align: left;
}

</style>