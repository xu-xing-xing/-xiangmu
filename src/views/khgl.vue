<template>
  <div id="khgl">
    <Header></Header>
    <el-container class="sec">
      <el-aside class="aside">
        <p class="aside1">
          <img src="../assets/img/u2697.svg" width="25px" />
          <el-dropdown class="aside1-1" trigger="click">
            <span class="el-dropdown-link">
              客户主线<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>主分类</el-dropdown-item>
              <el-dropdown-item>行业</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </p>
        <el-menu>
          <el-submenu index="1">
            <template slot="title">
              <img src="../assets/img/u2665.svg" width="20px" /> 区域代理
            </template>
            <el-menu-item-group class="aside2">
              <el-menu-item index="1-1"
                ><i class="el-icon-location-outline"></i>四川省</el-menu-item
              >
              <el-menu-item index="1-2"
                ><i class="el-icon-location-outline"></i>福建省</el-menu-item
              >
              <el-menu-item index="1-3"
                ><i class="el-icon-location-outline"></i>广东省</el-menu-item
              >
              <el-menu-item index="1-4"
                ><i class="el-icon-location-outline"></i>黑龙江省</el-menu-item
              >
              <el-menu-item index="1-5"
                ><i class="el-icon-location-outline"></i>辽宁省</el-menu-item
              >
              <el-menu-item index="1-6"
                ><i class="el-icon-location-outline"></i>吉林省</el-menu-item
              >
              <el-menu-item index="1-7"
                ><i class="el-icon-location-outline"></i>浙江省</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <img src="../assets/img/u2665.svg" width="20px" /> 普通客户
            </template>
          </el-submenu>
        </el-menu>
      </el-aside>
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
                    我负责的<i class="el-icon-arrow-down el-icon--right"> </i>
                  </span>
                </el-button>
              </el-popover>
            </el-dropdown>
          </div>
          <div>
            <el-card shadow="hover">
              全部客户<br />
              <h4>69</h4>
            </el-card>
          </div>
          <div>
            <el-card shadow="hover">
              今日新增<br />
              <h4>12</h4>
            </el-card>
          </div>
          <div>
            <el-card shadow="hover">
              公海客户<br />
              <h4>5</h4>
            </el-card>
          </div>
          <div>
            <el-card shadow="hover">
              今日应联系<br />
              <h4>5</h4>
            </el-card>
          </div>
          <div>
            <el-card shadow="hover">
              移交给我的<br />
              <h4>2</h4>
            </el-card>
          </div>
          <div>
            <el-card shadow="hover">
              今天生日<br />
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
          <div>
            已选
            <span style="font-weight: bold">6</span> 条
            <el-button :plain="true" @click="open1">领用</el-button>
            <el-button :plain="true" @click="open2">分配</el-button>
            <el-button :plain="true" @click="open2">发短信</el-button>
            <div class="main2-1">
              <span>
                <img
                  src="../assets/img/25.png"
                  width="20px"
                  style="vertical-align: buttom"
                />
                预警：即将有6条商机自动转入公共池，立即查看！
              </span>
              <span>
                <!-- <el-popover placement="bottom" width="250" trigger="hover"> -->
                <el-button slot="reference" style="border: none">
                  <img src="../assets/img/u2650.svg" width="20px" />
                </el-button>
                <!-- </el-popover> -->
              </span>
              <span>
                <!-- <el-popover placement="bottom" width="250" trigger="hover"> -->
                <el-button slot="reference" style="border: none">
                  <img src="../assets/img/u2659.svg" width="20px" />
                </el-button>
                <!-- </el-popover> -->
              </span>
              <span>
                <el-popover placement="bottom" width="250" trigger="hover"
                  ><img src="../assets/img/24.png" width="250px" />
                  <el-button slot="reference" style="border: none">
                    <img src="../assets/img/u2626.svg" width="23px" />
                  </el-button>
                </el-popover>
              </span>
            </div>
          </div>
        </div>
        <div>
          <el-table
            ref="multipleTable"
            border
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            :header-cell-style="{ background: '#f5f7fa' }"
          >
            <el-table-column type="selection" width="42"> </el-table-column>
            <el-table-column label="客户名称" width="180">
              <template slot-scope="scope">{{ scope.row.name }}</template>
            </el-table-column>
            <el-table-column prop="job" label="行业" width="90">
            </el-table-column>
            <el-table-column prop="from" label="来源" width="100">
            </el-table-column>
            <el-table-column prop="type" label="客户类型" width="100">
            </el-table-column>
            <el-table-column prop="in" label="销售阶段" width="120">
            </el-table-column>
            <el-table-column prop="person" label="联系人" width="60">
            </el-table-column>
            <el-table-column prop="phone" label="电话" width="100">
            </el-table-column>
            <el-table-column prop="reason" label="入池原因" width="170">
            </el-table-column>
            <el-table-column prop="createTime" label="创建时间" width="90">
            </el-table-column>
            <el-table-column prop="createPerson" label="创建人" width="100">
            </el-table-column>
            <el-table-column prop="address" label="地址" width="190">
            </el-table-column>
          </el-table>
          <div class="main3">
            显示12条客户信息 &nbsp;&nbsp;&nbsp; 总共66666条客户信息
            &nbsp;&nbsp;&nbsp;
            <i class="el-icon-setting"></i> 每页显示 <span> 12条 </span
            ><i class="el-icon-arrow-up"></i>
            <el-pagination
              small
              background
              layout="prev, pager, next"
              :total="1000"
              style="float: right"
            >
            </el-pagination>
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
.aside1-2 {
  position: relative;
  top: -10px;
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
.main2 {
  padding: 10px 20px;
}
.main2-1 {
  float: right;
}
.main2-1 > span:nth-of-type(1) {
  position: relative;
  top: -5px;
  right: 30px;
  color: red;
  text-decoration: underline;
}
.main2-1 span {
  margin-right: -20px;
  cursor: pointer;
}
.main3 {
  padding: 10px 0 0;
  color: gray;
  transform: scale(0.9);
}
.span span {
  display: inline-block;
  padding: 0 10px;
  width: 100px;
  cursor: pointer;
}

.span span:hover {
  display: inline-block;
  padding: 0 10px;
  width: 300px;
  background: rgb(233, 233, 233);
}
</style>
<style lang="scss">
#khgl {
  .el-card__body h4 {
    text-align: center;
  }
  .el-card__body {
    cursor: pointer;
    line-height: 18px;
    padding: 1px 5px;
    width: 60px;
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
      tableData: [
        {
          name: "济南新动力管理咨询有限公司",
          job: "批发/零售业",
          from: "官网注册试用",
          type: "股份有限公司",
          in: "潜在客户（商机）",
          person: "李总",
          phone: "13856982326",
          reason: "填充文字填充文字填充文字",
          createTime: "2019-02-18",
          createPerson: "销售1部-厂长",
          address: "北京市天安门大道西侧高新大厦",
        },
        {
          name: "济南新动力管理咨询有限公司",
          job: "批发/零售业",
          from: "官网注册试用",
          type: "股份有限公司",
          in: "潜在客户（商机）",
          person: "李总",
          phone: "13856982326",
          reason: "填充文字填充文字填充文字",
          createTime: "2019-02-18",
          createPerson: "销售1部-厂长",
          address: "北京市天安门大道西侧高新大厦",
        },
        {
          name: "济南新动力管理咨询有限公司",
          job: "批发/零售业",
          from: "官网注册试用",
          type: "股份有限公司",
          in: "潜在客户（商机）",
          person: "李总",
          phone: "13856982326",
          reason: "填充文字填充文字填充文字",
          createTime: "2019-02-18",
          createPerson: "销售1部-厂长",
          address: "北京市天安门大道西侧高新大厦",
        },
        {
          name: "济南新动力管理咨询有限公司",
          job: "批发/零售业",
          from: "官网注册试用",
          type: "股份有限公司",
          in: "潜在客户（商机）",
          person: "李总",
          phone: "13856982326",
          reason: "填充文字填充文字填充文字",
          createTime: "2019-02-18",
          createPerson: "销售1部-厂长",
          address: "北京市天安门大道西侧高新大厦",
        },
        {
          name: "济南新动力管理咨询有限公司",
          job: "批发/零售业",
          from: "官网注册试用",
          type: "股份有限公司",
          in: "潜在客户（商机）",
          person: "李总",
          phone: "13856982326",
          reason: "填充文字填充文字填充文字",
          createTime: "2019-02-18",
          createPerson: "销售1部-厂长",
          address: "北京市天安门大道西侧高新大厦",
        },
        {
          name: "济南新动力管理咨询有限公司",
          job: "批发/零售业",
          from: "官网注册试用",
          type: "股份有限公司",
          in: "潜在客户（商机）",
          person: "李总",
          phone: "13856982326",
          reason: "填充文字填充文字填充文字",
          createTime: "2019-02-18",
          createPerson: "销售1部-厂长",
          address: "北京市天安门大道西侧高新大厦",
        },
        {
          name: "济南新动力管理咨询有限公司",
          job: "批发/零售业",
          from: "官网注册试用",
          type: "股份有限公司",
          in: "潜在客户（商机）",
          person: "李总",
          phone: "13856982326",
          reason: "填充文字填充文字填充文字",
          createTime: "2019-02-18",
          createPerson: "销售1部-厂长",
          address: "北京市天安门大道西侧高新大厦",
        },
        {
          name: "济南新动力管理咨询有限公司",
          job: "批发/零售业",
          from: "官网注册试用",
          type: "股份有限公司",
          in: "潜在客户（商机）",
          person: "李总",
          phone: "13856982326",
          reason: "填充文字填充文字填充文字",
          createTime: "2019-02-18",
          createPerson: "销售1部-厂长",
          address: "北京市天安门大道西侧高新大厦",
        },
        {
          name: "济南新动力管理咨询有限公司",
          job: "批发/零售业",
          from: "官网注册试用",
          type: "股份有限公司",
          in: "潜在客户（商机）",
          person: "李总",
          phone: "13856982326",
          reason: "填充文字填充文字填充文字",
          createTime: "2019-02-18",
          createPerson: "销售1部-厂长",
          address: "北京市天安门大道西侧高新大厦",
        },
        {
          name: "济南新动力管理咨询有限公司",
          job: "批发/零售业",
          from: "官网注册试用",
          type: "股份有限公司",
          in: "潜在客户（商机）",
          person: "李总",
          phone: "13856982326",
          reason: "填充文字填充文字填充文字",
          createTime: "2019-02-18",
          createPerson: "销售1部-厂长",
          address: "北京市天安门大道西侧高新大厦",
        },
        {
          name: "济南新动力管理咨询有限公司",
          job: "批发/零售业",
          from: "官网注册试用",
          type: "股份有限公司",
          in: "潜在客户（商机）",
          person: "李总",
          phone: "13856982326",
          reason: "填充文字填充文字填充文字",
          createTime: "2019-02-18",
          createPerson: "销售1部-厂长",
          address: "北京市天安门大道西侧高新大厦",
        },
        {
          name: "济南新动力管理咨询有限公司",
          job: "批发/零售业",
          from: "官网注册试用",
          type: "股份有限公司",
          in: "潜在客户（商机）",
          person: "李总",
          phone: "13856982326",
          reason: "填充文字填充文字填充文字",
          createTime: "2019-02-18",
          createPerson: "销售1部-厂长",
          address: "北京市天安门大道西侧高新大厦",
        },
      ],
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