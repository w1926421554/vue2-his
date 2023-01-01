<template>
  <div class="app">
    <div class="card">
      <!-- 首页左边 -->
      <div class="left">
        <!-- 医生盒子 -->
        <div class="left-item">
          <div class="item-top">
            <div class="item-img">
              <img src="@/assets/imgs/logo.png" alt="">
            </div>
            <div class="item-name">
              <h4>吴澳冬</h4>
              <p>工号:EY-012</p>
            </div>
          </div>
          <!-- 医生盒子下面 -->
          <div class="item-bottom">医生-今日当班</div>
        </div>
      </div>
      <!-- 首页右边 -->
      <div class="right">2</div>
    </div>
  </div>
</template>

<script>
export default {
    created() {
        console.log(this.$router);
    },
};
</script>

<style lang="scss" scoped>
.card{
  margin-top: 20px;
  display: flex;
  height: 100%;
  background-color: #fff;

  .left{
    flex: 8;
    background-color: aqua;
  }

  .right{
    flex: 4;
    background-color: pink;
  }
}
</style>
