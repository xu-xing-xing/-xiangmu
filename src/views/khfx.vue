<template>
  <div id="khfx">
    <Header></Header>
    <el-container class="sec">
      <el-aside class="aside">
        <p class="aside1">
          <img src="../assets/img/u10999.svg" width="25px" /> 客户总量分析
        </p>
        <el-menu>
          <el-submenu index="1">
            <template slot="title">
              <img src="../assets/img/u11000.svg" width="20px" /> 客户总量分析
            </template>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <img src="../assets/img/u11000.svg" width="20px" /> 客户画像分析
            </template>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <img src="../assets/img/u11000.svg" width="20px" /> 客户行业转化率
            </template>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <img src="../assets/img/u11000.svg" width="20px" /> 客户阶段漏斗
            </template>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <img src="../assets/img/u11000.svg" width="20px" /> 客户转化率分析
            </template>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <div class="main1">
          <h2 class="main1-2">
            <img
              src="../assets/img/u2697.svg"
              width="25px"
              style="vertical-align: top"
            />
            客户总量分析
          </h2>
        </div>
        <div class="mainAll">
        <img src="../assets/20201224100045.png" width="100%">
        </div>
        <div class="main4">
          <h2>报表</h2>
          <ul>
            <li>数据对象</li>
            <li>厂长</li>
            <li>杨百万</li>
            <li>茂茂</li>
            <li>总理</li>
            <li>小华哥</li>
            <li>蒲老板</li>
          </ul>
          <ul>
            <li>部门</li>
            <li>销售部</li>
            <li>销售部</li>
            <li>销售部</li>
            <li>销售部</li>
            <li>销售部</li>
            <li>销售部</li>
          </ul>
          <ul>
            <li>数据类型</li>
            <li>合同金额</li>
            <li>合同金额</li>
            <li>合同金额</li>
            <li>合同金额</li>
            <li>合同金额</li>
            <li>合同金额</li>
          </ul>
          <ul>
            <li>数据指标</li>
            <li>￥250,000,00</li>
            <li>￥250,000,00</li>
            <li>￥250,000,00</li>
            <li>￥250,000,00</li>
            <li>￥250,000,00</li>
            <li>￥250,000,00</li>
          </ul>
          <ul>
            <li>数据指标</li>
            <li>￥125,000,00</li>
            <li>￥190,000,00</li>
            <li>￥155,000,00</li>
            <li>￥110,000,00</li>
            <li>￥100,000,00</li>
            <li>￥150,000,00</li>
          </ul>
        </div>
        <div class="main5">
          <img src="../assets/img/u10934.png" width="880px" />
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<style scoped>
.sec {
  padding: 67px 10px 10px 70px;
  background: rgb(251 251 251);
  font-size: 12px;
}
.aside {
  width: 200px !important;
  height: 500px !important;
  background: white;
  border: 1px solid rgb(245, 242, 242);
}
.aside1 {
  padding: 15px 10px 5px 20px;
  font-weight: bold;
  font-size: 16px;
  border-bottom: 2px solid rgb(61 177 255);
}
.aside1 img {
  vertical-align: middle;
}
.aside1-1 {
  padding: 5px 6px;
  margin-left: 20px;
  cursor: pointer;
  border: 1px solid gainsboro;
  border-radius: 5px;
  font-size: 12px;
}
.main1-2 {
  position: relative;
  top: 8px;
  left: 10px;
}
.aside2 i {
  color: #66b1ff;
  padding-right: 20px;
}
.main {
  padding-left: 0;
  height: 500px !important;
  margin-left: 4px;
  background: white;
  border: 1px solid rgb(245, 242, 242);
}
.main1 {
  height: 38px;
  padding-bottom: 2px;
  margin-top: -15px;
  border-bottom: 2px solid rgb(61 177 255);
}
.mainAll {
  height: 330px;
}
.mainAll > div {
  float: left;
}
.main4 {
  margin: 0 30px;
}
.main4 h2 {
  margin: 20px 0;
}
.main4 > ul {
  float: left;
  list-style: none;
  color: gray;
  line-height: 30px;
}
.main4 > ul li {
  padding: 0 60px;
}
.main4 > ul li:nth-of-type(1) {
  font-weight: bold;
}
.main4 > ul li:nth-of-type(odd) {
  background: rgb(243, 241, 241);
}
.main5 img {
  margin: 50px 0 0 50px;
}
</style>
<style lang="scss">
#khfx {
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
  .el-icon-arrow-down:before {
    content: none;
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