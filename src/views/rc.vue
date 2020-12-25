<template>
  <div id="rc">
    <Header></Header>
    <el-container class="sec">
      <el-main class="main">
        <div class="main1">
          <div class="aside1-2">
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
                    我的日程<i class="el-icon-arrow-down el-icon--right"> </i>
                  </span>
                </el-button>
              </el-popover>
            </el-dropdown>
          </div>
          <div>
            <el-card shadow="hover">
              日程总数<br />
              <h4>26</h4>
            </el-card>
          </div>
          <div>
            <el-card shadow="hover">
              未完成<br />
              <h4>12</h4>
            </el-card>
          </div>
          <div>
            <el-card shadow="hover">
              延期<br />
              <h4>5</h4>
            </el-card>
          </div>
          <div style="float: right; margin-top: 10px">
            <el-input
              placeholder="客户名称、地区、联系人..."
              suffix-icon="el-icon-search"
              v-model="input2"
              size="mini"
            >
            </el-input>
          </div>
        </div>
        <div class="main2">
          2019-03-05 第二周
          <el-radio-group v-model="radio1" size="mini" class="mini">
            <el-radio-button label="自定义"></el-radio-button>
            <el-radio-button label="日"></el-radio-button>
            <el-radio-button label="周"></el-radio-button>
            <el-radio-button label="月"></el-radio-button>
          </el-radio-group>
        </div>
        <div class="main3">
          <div class="main3-1">
            <div><img src="../assets/img/u705.png" width="38px" /></div>
            <div>
              <span class="name">彭于晏 </span
              ><i class="el-icon-chat-dot-round"></i><br />
              市场部经理
            </div>
            <div>今日 09:20 至 11:20</div>
          </div>
          <div class="main3-2">
            填充文字填充文字填充文字填充文字填充文字填充文字填充文字<br />
            填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字<br />
            填充文字填充文字填充文字
          </div>
          <div class="main3-3">
            <span><img src="../assets/img/u9556.svg" /></span>
            <span>
              <img src="../assets/img/u9552.svg" />
              <img src="../assets/img/u9553.svg" />
              <img src="../assets/img/u9551.svg" />
              <img src="../assets/img/u9550.svg" />
            </span>
          </div>
        </div>
        <div class="main3">
          <div class="main3-1">
            <div><img src="../assets/img/u705.png" width="38px" /></div>
            <div>
              <span class="name">彭于晏 </span
              ><i class="el-icon-chat-dot-round"></i><br />
              市场部经理
            </div>
            <div>今日 09:20 至 11:20</div>
          </div>
          <div class="main3-2">
            填充文字填充文字填充文字填充文字填充文字填充文字填充文字<br />
            填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字<br />
            填充文字填充文字填充文字
          </div>
          <div class="main3-3">
            <span><img src="../assets/img/u9556.svg" /></span>
            <span>
              <img src="../assets/img/u9552.svg" />
              <img src="../assets/img/u9553.svg" />
              <img src="../assets/img/u9551.svg" />
              <img src="../assets/img/u9550.svg" />
            </span>
          </div>
        </div>
        <div class="main3">
          <div class="main3-1">
            <div><img src="../assets/img/u705.png" width="38px" /></div>
            <div>
              <span class="name">彭于晏 </span
              ><i class="el-icon-chat-dot-round"></i><br />
              市场部经理
            </div>
            <div>今日 09:20 至 11:20</div>
          </div>
          <div class="main3-2">
            填充文字填充文字填充文字填充文字填充文字填充文字填充文字<br />
            填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字<br />
            填充文字填充文字填充文字
          </div>
          <div class="main3-3">
            <span><img src="../assets/img/u9556.svg" /></span>
            <span>
              <img src="../assets/img/u9552.svg" />
              <img src="../assets/img/u9553.svg" />
              <img src="../assets/img/u9551.svg" />
              <img src="../assets/img/u9550.svg" />
            </span>
          </div>
        </div>
        <div class="main3">
          <div class="main3-1">
            <div><img src="../assets/img/u705.png" width="38px" /></div>
            <div>
              <span class="name">彭于晏 </span
              ><i class="el-icon-chat-dot-round"></i><br />
              市场部经理
            </div>
            <div>今日 09:20 至 11:20</div>
          </div>
          <div class="main3-2">
            填充文字填充文字填充文字填充文字填充文字填充文字填充文字<br />
            填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字<br />
            填充文字填充文字填充文字
          </div>
          <div class="main3-3">
            <span><img src="../assets/img/u9556.svg" /></span>
            <span>
              <img src="../assets/img/u9552.svg" />
              <img src="../assets/img/u9553.svg" />
              <img src="../assets/img/u9551.svg" />
              <img src="../assets/img/u9550.svg" />
            </span>
          </div>
        </div>
        <div class="main3">
          <div class="main3-1">
            <div><img src="../assets/img/u705.png" width="38px" /></div>
            <div>
              <span class="name">彭于晏 </span
              ><i class="el-icon-chat-dot-round"></i><br />
              市场部经理
            </div>
            <div>今日 09:20 至 11:20</div>
          </div>
          <div class="main3-2">
            填充文字填充文字填充文字填充文字填充文字填充文字填充文字<br />
            填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字<br />
            填充文字填充文字填充文字
          </div>
          <div class="main3-3">
            <span><img src="../assets/img/u9556.svg" /></span>
            <span>
              <img src="../assets/img/u9552.svg" />
              <img src="../assets/img/u9553.svg" />
              <img src="../assets/img/u9551.svg" />
              <img src="../assets/img/u9550.svg" />
            </span>
          </div>
        </div>
        <div class="main3">
          <div class="main3-1">
            <div><img src="../assets/img/u705.png" width="38px" /></div>
            <div>
              <span class="name">彭于晏 </span
              ><i class="el-icon-chat-dot-round"></i><br />
              市场部经理
            </div>
            <div>今日 09:20 至 11:20</div>
          </div>
          <div class="main3-2">
            填充文字填充文字填充文字填充文字填充文字填充文字填充文字<br />
            填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字<br />
            填充文字填充文字填充文字
          </div>
          <div class="main3-3">
            <span><img src="../assets/img/u9556.svg" /></span>
            <span>
              <img src="../assets/img/u9552.svg" />
              <img src="../assets/img/u9553.svg" />
              <img src="../assets/img/u9551.svg" />
              <img src="../assets/img/u9550.svg" />
            </span>
          </div>
        </div>
        <div class="main2">日总结</div>
        <div class="main4">
          今日还未写总结 （<a
            style="color: blue; text-decoration: underline; cursor: pointer"
            >写总结</a
          >）
        </div>
      </el-main>
      <el-aside class="aside">
        <div class="aside1">
          <span class="el-icon-arrow-left"></span>
          <span style="font-size: 26px">20</span>
          <span>三月/2020</span>
          <span>星期一</span>
          <span class="el-icon-arrow-right"></span>
        </div>
        <div class="aside2">
          <div>
            <div class="littleAll">
              <img src="../assets/img/u9392.png" />
            </div>
            <div class="little">
              <p><img src="../assets/img/u9393.png" /></p>
              <p><img src="../assets/img/u9394.png" /></p>
              <p><img src="../assets/img/u9395.png" /></p>
              <p><img src="../assets/img/u9394.png" /></p>
              <p><img src="../assets/img/u9394.png" /></p>
              <p><img src="../assets/img/u9394.png" /></p>
              <p><img src="../assets/img/u9394.png" /></p>
              <p><img src="../assets/img/u9394.png" /></p>
            </div>
          </div>
          <div>
            <div class="aside2-1">
              <p class="pur">09:30-11:00</p>
              <p>
                <img
                  src="../assets/img/u9397.svg"
                  width="15px"
                  style="vertical-align: top"
                />
                拜访客户 <span class="pur1">进行中</span>
              </p>
            </div>
            <div class="aside2-1">
              <p class="pur">09:30-11:00</p>
              <p>
                <img
                  src="../assets/img/u9397.svg"
                  width="15px"
                  style="vertical-align: top"
                />
                市场部会议 
              </p>
            </div>
            <div class="aside2-1">
              <p class="pur">09:30-11:00</p>
              <p>
                <img
                  src="../assets/img/u9397.svg"
                  width="15px"
                  style="vertical-align: top"
                />
                PPT准备 
              </p>
            </div>
            <div class="aside2-1">
              <p class="pur">09:30-11:00</p>
              <p>
                <img
                  src="../assets/img/u9397.svg"
                  width="15px"
                  style="vertical-align: top"
                />
                市场部团建-花园小区别墅
              </p>
            </div> <div class="aside2-1">
              <p class="pur">09:30-11:00</p>
              <p>
                <img
                  src="../assets/img/u9397.svg"
                  width="15px"
                  style="vertical-align: top"
                />
                市场部会议 
              </p>
            </div>
            <div class="aside2-1">
              <p class="pur">09:30-11:00</p>
              <p>
                <img
                  src="../assets/img/u9397.svg"
                  width="15px"
                  style="vertical-align: top"
                />
                PPT准备 
              </p>
            </div>
            <div class="aside2-1">
              <p class="pur">09:30-11:00</p>
              <p>
                <img
                  src="../assets/img/u9397.svg"
                  width="15px"
                  style="vertical-align: top"
                />
                市场部团建-花园小区别墅
              </p>
            </div>
            <div class="aside2-1">
              <p class="pur">09:30-11:00</p>
              <p>
                <img
                  src="../assets/img/u9397.svg"
                  width="15px"
                  style="vertical-align: top"
                />
                拜访客户 
              </p>
            </div>
          </div>
        </div>
      </el-aside>
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
  margin-left: 4px;
  background: white;
  border: 1px solid rgb(245, 242, 242);
}
.main1 > div {
  display: inline-block;
  margin-left: 20px;
}
.aside1-2 {
  position: relative;
  top: -10px;
}
.main1 {
  height: 38px;
  padding-bottom: 5px;
  margin-top: -15px;
  border-bottom: 2px solid rgb(61 177 255);
}
.main2 {
  margin: 10px;
  padding: 0 10px;
  border: 1px solid rgb(236, 230, 230);
  box-shadow: 0px 0px 3px gainsboro;
  height: 30px;
  line-height: 30px;
  font-weight: bold;
  color: gray;
}
.mini {
  float: right;
  margin-top: 5px;
}
.main3 {
  margin: 10px;
  padding: 10px 10px 0 0;
  border: 1px solid rgb(236, 230, 230);
  box-shadow: 0px 0px 3px gainsboro;
  color: gray;
  line-height: 20px;
}
.main3 .name {
  color: black;
  font-weight: bold;
}
.main3 i {
  color: #66b1ff;
}
.main3-1 > div {
  display: inline-block;
  margin-left: 20px;
}
.main3-1 > div:nth-of-type(3) {
  float: right;
}
.main3-2 {
  margin: 10px 77px;
}
.main3-3 {
  margin: 5px 18px;
}
.main3-3 span:nth-of-type(1) img:nth-of-type(1) {
  width: 13px;
}
.main3-3 img {
  width: 18px;
}
.main3-3 span:nth-of-type(2) {
  float: right;
}
.main3-3 span:nth-of-type(2) img {
  margin-left: 20px;
}
.main4 {
  background: rgb(243, 241, 241);
  margin: 10px;
  height: 150px;
  line-height: 150px;
  text-align: center;
}
.aside {
  width: 300px !important;
  height: 500px !important;
  margin-left: 5px;
  background: white;
  border: 1px solid rgb(245, 242, 242);
  box-shadow: 0px 0px 3px gainsboro;
  border-radius: 15px;
}
.aside1 {
  border: 1px solid rgb(245, 242, 242);
  box-shadow: 0px 0px 3px gainsboro;
  border-radius: 15px;
  color: gray;
  height: 70px;
  line-height: 70px;
}
.aside1 span {
  padding: 0 10px;
}
.aside1 span:nth-of-type(1) {
  margin-right: 10px;
}
.aside1 span:nth-of-type(5) {
  margin-left: 20px;
}
.littleAll {
  padding: 20px;
  margin-top: 10px;
}
.littleAll img {
  width: 5px;
  height: 360px;
}
.little img {
  width: 8px;
}
.little p{
    margin-top: 34.6px;
}
.little {
  top: 130px;
  right: 283px;
  position: absolute;
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
.aside2-1 {
  line-height: 20px;
  margin-top: 10px;
}
.aside2-1:nth-of-type(1) {
  margin-top: 20px;
}
</style>
<style lang="scss">
#rc {
  .el-card__body h4 {
    text-align: center;
  }
  .el-card__body {
    cursor: pointer;
    line-height: 18px;
    padding: 1px 5px;
    width: 70px;
    height: 35px;
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
  data() {
    return {
      radio1: "日",
      multipleSelection: [],
      tabPosition: "left",
    };
  },
  methods: {
    open1() {
      this.$message({
        message: "已领用成功",
        type: "success",
      });
    },
    open2() {
      this.$message({
        message: "请先选择要分配的客户",
      });
    },
  },
};
</script>