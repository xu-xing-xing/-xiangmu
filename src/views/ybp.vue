<template>
  <div id="ybp">
    <Header></Header>
    <el-container class="sec">
      <el-main class="main">
        <div class="main1">
          <h3 class="main1-1"><i class="el-icon-odometer"></i> 仪表盘</h3>
        </div>
        <div class="mainAll">
          <div class="main2">
            <div><img src="../assets/img/u10617.gif" /></div>
            <div><img src="../assets/img/u10621.gif" /></div>
          </div>
          <div class="main3">
            <div><img src="../assets/img/u10619.gif" /></div>
            <div><img src="../assets/img/u10623.gif" /></div>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<style scoped>
.sec {
  padding: 70px 10px 10px 70px;
  background: rgb(251 251 251);
  font-size: 12px;
}
.main {
  padding-left: 0;
  height: 500px !important;
  background: white;
  border: 1px solid rgb(245, 242, 242);
}
.main1 > div {
  display: inline-block;
  margin-left: 20px;
}
.main1 {
  height: 38px;
  padding-bottom: 5px;
  margin-top: -15px;
  border-bottom: 2px solid rgb(61 177 255);
}
.main1-1 {
  padding: 10px 20px;
}
.main1-1 i {
  color: #3a8ee6;
}
.mainAll {
  margin: 10px 50px;
}
.mainAll > div {
  float: left;
}
.main2 > div {
  width: 515px;
  height: 482px;
  overflow: hidden;
  position: relative;
  margin-top: -10px;
}
.main3 > div {
  width: 515px;
  height: 482px;
  overflow: hidden;
  position: relative;
}
.main2 img {
  width: 795px;
  height: 500px;
  position: absolute;
  left: -280px;
}
.main3 img {
  width: 795px;
  height: 500px;
  position: absolute;
  right: -280px;
}
</style>
<style lang="scss">
#ybp {
  .el-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    color: #606266;
    text-align: center;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    padding: 9px 20px;
    font-size: 14px;
    border-radius: 4px;
    margin-left: 5px;
    transform: scale(0.8);
  }
}
</style>
<style>
.el-menu-item,
.el-submenu__title {
  height: 46px;
  line-height: 46px;
  position: relative;
  white-space: nowrap;
  list-style: none;
  transform: scale(0.8);
}
.el-dropdown-menu__item {
  list-style: none;
  line-height: 36px;
  padding: 0 20px;
  margin: 0;
  font-size: 12px;
  color: #606266;
  cursor: pointer;
  outline: 0;
  text-align: center;
}
</style>
<script>
import Header from "../components/Header";
export default {
  components: {
    Header,
  },
  data() {
    return {
      multipleSelection: [],
      tabPosition: "left",
    };
  },
};
</script>