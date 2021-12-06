<template>
  <div class="profile">
    <div class="content">
      <h3><v-icon name="address-card"/>自己紹介</h3>
      <div class="profile-img">
        <img src="../assets/aboutme.jpg">
        <ol>
          <li>名前:高山晃基</li>
          <li>出身:岐阜</li>
          <li>趣味:ゲーム、バンド、ファッション</li>
          <li>デザイン会社で1年間アルバイト経験あり</li>
          <li>静岡県立大学で経営分野と情報分野をメインに学んでおります。</li>
        </ol>
      </div>

    
      
        <h3><v-icon name="book"/>取得資格</h3>
        <p>基本情報技術者試験、ITパスポート、マルチメディア検定 エキスパート(CG-ARTS)、日商簿記3級、普通自動車免許</p>
        <div id="career">
          <h3><v-icon name="school"/>経歴</h3>
          <p>2016年3月 羽島市立中学校　卒業</p>
          <p>2016年4月 岐阜県立岐阜総合学園高等学校　入学</p>
          <p>2019年3月 岐阜県立岐阜総合学園高等学校　卒業</p>
          <p>2019年4月 静岡県立大学　入学</p>
      </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div.profile {
  text-align: center;
}

div.content {
  
  display: inline-block;
  margin: 10px;
  width: 80%;
}
.profile-img{
  display:inline-block;
}
h3 {
  color: black;
 
  border-left: solid 5px #b0c4de;
  border-bottom: solid 3px #b0c4de;
}
li{
  text-align:left;
  list-style: none;
}
p {
  width: 90%;
  display: inline-block;
  text-align: left;
}
img{
  width:50%;
  border-radius:50%;
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