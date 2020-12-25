<template>
  <div id="wqgl">
    <Header></Header>
    <el-container class="sec">
      <el-aside class="aside">
        <div class="aside1">
          <img
            src="../assets/img/u2697.svg"
            width="25px"
            style="vertical-align: bottom"
          />
          <el-dropdown trigger="click">
            <el-popover placement="bottom" width="350" trigger="click">
              <el-tabs
                :tab-position="tabPosition"
                style="height: 188px; width: 350px"
              >
                <el-tab-pane label="常用检索" class="span">
                  <span>我领取的</span><br />
                  <span>部门领取的</span><br />
                  <span>今日归还的</span>
                </el-tab-pane>
                <el-tab-pane label="自定义条件">
                  <img src="../assets/img/23.png" width="272px" />
                </el-tab-pane>
              </el-tabs>
              <el-button slot="reference">
                <span class="el-dropdown-link">
                  我的考勤打卡<i class="el-icon-arrow-down el-icon--right"> </i>
                </span>
              </el-button>
            </el-popover>
          </el-dropdown>
          <div class="aside1-1">
            <el-card shadow="hover"> 新建外勤 </el-card>
          </div>
        </div>
        <div class="aside2">
          <div>
            <div class="littleAll">
              <img src="../assets/img/u9392.png" />
            </div>
            <div class="little">
              <p><img src="../assets/img/u9393.png" /></p>
              <p><img src="../assets/img/u9395.png" /></p>
              <p><img src="../assets/img/u9394.png" /></p>
              <p><img src="../assets/img/u9394.png" /></p>
              <p><img src="../assets/img/u9394.png" /></p>
            </div>
          </div>
          <div>
            <div class="aside2-1">
              <p class="pur">09:30-11:00</p>
              <p>
                <i class="el-icon-location-information"></i>
                拜访客户<br />
                &nbsp;&nbsp;&nbsp;&nbsp;北京市东城区和平里街道安定路63号
              </p>
              <p class="aside2-2">
                <img src="../assets/img/u9552.svg" />
                <img src="../assets/img/u9553.svg" />
              </p>
            </div>
            <div class="aside2-1">
              <p class="pur">09:30-11:00</p>
              <p>
                <i class="el-icon-location-information"></i>
                拜访客户<br />
                &nbsp;&nbsp;&nbsp;&nbsp;腾讯大厦B座-905
              </p>
              <p class="aside2-2">
                <img src="../assets/img/u9552.svg" />
                <img src="../assets/img/u9553.svg" />
              </p>
            </div>
            <div class="aside2-1">
              <p class="pur">09:30-11:00</p>
              <p>
                <i class="el-icon-location-information"></i>
                拜访客户<br />
                &nbsp;&nbsp;&nbsp;&nbsp;市场部团建-花园小区别墅
              </p>
              <p class="aside2-2">
                <img src="../assets/img/u9552.svg" />
                <img src="../assets/img/u9553.svg" />
              </p>
            </div>
            <div class="aside2-1">
              <p class="pur">09:30-11:00</p>
              <p>
                <i class="el-icon-location-information"></i>
                拜访客户-腾讯大厦B座-905<br />
                &nbsp;&nbsp;&nbsp;&nbsp;北京市东城区和平里街道安定路63号
              </p>
              <p class="aside2-2">
                <img src="../assets/img/u9552.svg" />
                <img src="../assets/img/u9553.svg" />
              </p>
            </div>
            <div class="aside2-1">
              <p class="pur">09:30-11:00</p>
              <p>
                <i class="el-icon-location-information"></i>
                拜访客户
              </p>
              <p class="aside2-2">
                <img src="../assets/img/u9552.svg" />
                <img src="../assets/img/u9553.svg" />
              </p>
            </div>
          </div>
        </div>
      </el-aside>
      <div class="main">
        <img src="../assets/20201224150757.png" height="502px" width="100%">
      </div>
    </el-container>
  </div>
</template>
<style scoped>
.sec {
  padding: 70px 10px 10px 70px;
  background: rgb(251 251 251);
  font-size: 12px;
}
.serachinput {
  width: 250px;
  box-sizing: border-box;
  padding: 9px;
  border: 1px solid #dddee1;
  font-size: 12px;
  height: 30px;
  color: #333;
  position: relative;
  border-radius: 4px;
  box-shadow: #666 0px 0px 10px;
  outline: none;
}
.main {
  padding: 0;
  height: 502px !important;
  margin-left: 4px;
  background: white;
  border: 1px solid rgb(245, 242, 242);
}
.aside {
  width: 300px !important;
  height: 500px !important;
  background: white;
  border: 1px solid rgb(245, 242, 242);
}
.littleAll {
  padding: 20px;
  margin-top: 8px;
}
.littleAll img {
  width: 5px;
  height: 360px;
}
.little img {
  width: 8px;
}
.little p {
  margin-top: 73.5px;
}
.little {
  top: 66px;
  left: 89px;
  position: absolute;
}
.aside1 {
  height: 28px;
  padding-bottom: 10px;
  margin-top: 5px;
  padding-left: 20px;
  border-bottom: 2px solid rgb(61 177 255);
}
.aside1-1 {
  float: right;
  margin-right: 10px;
}
.aside2 > div {
  float: left;
}
.aside2 > div:nth-of-type(2) {
  margin-left: 20px;
}
.aside2 .pur {
  color: rgb(205, 155, 235);
}
.aside2 .pur1 {
  color: rgb(205, 155, 235);
  margin-left: 90px;
}
.aside2-1 i {
  color: blue;
}
.aside2-1 {
  line-height: 20px;
  margin-top: 10px;
}
.aside2-1:nth-of-type(1) {
  margin-top: 20px;
}
.aside2-2 {
  margin-left: 150px;
}
.aside2-2 img {
  width: 13px;
  padding: 0 10px;
}
</style>
<style lang="scss">
#wqgl {
  .el-card__body h4 {
    text-align: center;
  }
  .el-card__body {
    cursor: pointer;
    line-height: 25px;
    height: 25px;
    padding: 3px 5px;
    width: 70px;
    text-align: center;
  }
  .el-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #FFF;
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
  .el-table td,
  .el-table th {
    font-size: 12px;
    padding: 5px 0;
    min-width: 0;
    box-sizing: border-box;
    text-overflow: ellipsis;
    vertical-align: middle;
    position: relative;
    text-align: left;
  }
  .el-radio-button--mini .el-radio-button__inner {
    padding: 3px 8px;
    font-size: 12px;
    border-radius: 0;
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
.el-menu-item-group__title {
  padding: 0;
  line-height: normal;
  font-size: 12px;
  color: #909399;
}
.el-submenu .el-menu-item {
  height: 30px;
  line-height: 30px;
  padding: 0 45px;
  min-width: 200px;
}
.el-dropdown-menu {
  position: absolute;
  top: 0;
  left: 0;
  padding: 0;
  margin: 5px 0;
  background-color: #FFF;
  border: 1px solid #EBEEF5;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
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
.el-tabs__item {
  padding: 0 15px 0 0;
  height: 25px;
  box-sizing: border-box;
  line-height: 30px;
  display: inline-block;
  list-style: none;
  font-size: 12px;
  font-weight: 500;
  color: #303133;
  position: relative;
}
.el-popover {
  position: absolute;
  background: #FFF;
  min-width: 150px;
  border: 1px solid #EBEEF5;
  padding: 12px;
  z-index: 2000;
  color: #606266;
  line-height: 2.4;
  text-align: justify;
  font-size: 12px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  word-break: break-all;
}
</style>
<script>
import Header from "../components/Header";

export default {
  components: {
    Header,
   
  },
  
};
</script>