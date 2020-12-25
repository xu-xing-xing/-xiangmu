<template>
  <div id="zsk">
    <Header></Header>
    <el-container class="sec">
      <el-aside class="aside">
        <p class="aside1">
          <img src="../assets/img/u11057.svg" width="25px" /> 知识库
        </p>
        <el-menu>
          <el-submenu index="1">
            <template slot="title">
              <img src="../assets/img/u11058.svg" width="20px" /> 企业文化
            </template>
            <el-menu-item-group class="aside2" style="background-color: rgba(242, 242, 242, 0.69803921568627">
              <el-menu-item index="1-1"> 企业愿景</el-menu-item>
              <el-menu-item index="1-2"> 公司文化</el-menu-item>
              <el-menu-item index="1-3"> 管理商学院</el-menu-item>
              <el-menu-item index="1-4"> 下载专区</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <img src="../assets/img/u11058.svg" width="20px" /> 公司公告
            </template>
            <el-menu-item-group class="aside2" style="background-color: rgba(242, 242, 242, 0.69803921568627">
              <el-menu-item index="1-1"> 公司及内部公告</el-menu-item>
              <el-menu-item index="1-2"> 产品创想工厂</el-menu-item>
              <el-menu-item index="1-3"> 公司级常备资料</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <img src="../assets/img/u11058.svg" width="20px" /> 24小时图书馆
            </template>
            <el-menu-item-group class="aside2" style="background-color: rgba(242, 242, 242, 0.69803921568627">
              <el-menu-item index="1-1"> 实施学习</el-menu-item>
              <el-menu-item index="1-2"> 销售方法</el-menu-item>
              <el-menu-item index="1-3"> 行业知识</el-menu-item>
              <el-menu-item index="1-4"> 应用案例</el-menu-item>
              <el-menu-item index="1-5"> 职业素养</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <img src="../assets/img/u11058.svg" width="20px" /> 关于公司
            </template>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <div class="main1">
          <h2 class="main1-2"></h2>
          <div class="main1-3">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="首页" name="first"></el-tab-pane>
              <el-tab-pane label="企业平台" name="second"></el-tab-pane>
              <el-tab-pane label="平台中心" name="third"></el-tab-pane>
              <el-tab-pane label="营销中心" name="fourth"></el-tab-pane>
            </el-tabs>
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
.main1-3 {
  float: right;
}
</style>
<style lang="scss">
#zsk {
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
  .el-tabs__item {
    padding: 0 20px;
    height: 40px;
    box-sizing: border-box;
    line-height: 40px;
    display: inline-block;
    list-style: none;
    font-size: 14px;
    font-weight: 500;
    color: #303133;
    position: relative;
  }
}
</style>[ [ i]]
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
.el-submenu .el-menu-item {
  height: 30px;
  line-height: 30px;
  padding: 0 45px;
  min-width: 200px;
}
.el-tabs__nav-wrap::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: white;
  z-index: 1;
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
      activeName: "first",
    };
  },
};
</script>