<template>
  <div>
    <div style="position: fixed">
      <el-menu
        default-active="1-4-1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
      >
        <p >
          <img
            src="../assets/img/logo.png"
            width="35px" 
            style="padding: 13px 0 0 15px"
          />
          
        </p>
        <router-link to="/index">
          <el-menu-item index="1">
            <i class="el-icon-s-home"></i>
            
          </el-menu-item>
        </router-link>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-s-platform"></i>
          </template>
          <el-menu-item-group>
            <span slot="title">CRM</span>
            <router-link to="/find">
              <el-menu-item index="1-1">发现 </el-menu-item>
            </router-link>
            <router-link to="/khggc">
              <el-menu-item index="1-2">客户公共池 </el-menu-item>
            </router-link>
            <router-link to="/xs">
              <el-menu-item index="1-3">线索 </el-menu-item>
            </router-link>
            <router-link to="/sj">
              <el-menu-item index="1-4">商机 </el-menu-item>
            </router-link>
            <router-link to="/khgl">
              <el-menu-item index="1-5">客户管理 </el-menu-item>
            </router-link>
            <router-link to="/ht">
              <el-menu-item index="1-6">合同 </el-menu-item>
            </router-link>
            <router-link to="/lxr">
              <el-menu-item index="1-7">联系人 </el-menu-item>
            </router-link>
            <router-link to="/xsrw">
              <el-menu-item index="1-8">销售任务 </el-menu-item>
            </router-link>
            <router-link to="/rc">
              <el-menu-item index="1-9">日程 </el-menu-item>
            </router-link>
            <router-link to="/wqgl">
              <el-menu-item index="1-10">外勤管理 </el-menu-item>
            </router-link>
            <router-link to="/cpgl">
              <el-menu-item index="1-11">产品 </el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-pie-chart"></i>
          </template>
          <el-menu-item-group>
            <span slot="title">统计分析</span>
            <router-link to="/ybp">
              <el-menu-item index="1-1">仪表盘</el-menu-item>
            </router-link>
            <router-link to="/sjbb">
              <el-menu-item index="1-2">数据报表</el-menu-item>
            </router-link>
            <router-link to="/xsfx">
              <el-menu-item index="1-3">销售分析</el-menu-item>
            </router-link>
            <router-link to="/khfx">
              <el-menu-item index="1-4">客户分析</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>
        <router-link to="/zsk">
          <el-menu-item index="4">
            <i class="el-icon-reading"></i>
         
          </el-menu-item>
        </router-link>
      </el-menu>
    </div>
    <div>
      <div class="topR">
        <span >
          <img
            src="../assets/img/u724.svg"
             @click="dialogVisible = true"
            width="22px"
            style="position: relative; left: -38px; top: 5px" 
          />
        </span>
        <span
          ><input
            type="text"
            style="font-size: 12px"
            placeholder="告诉我你想要做什么"
          />
          <router-link to="/search">
            <i
              class="el-icon-search"
              style="
                position: relative;
                right: 25px;
                top: 2px;
                color: #66b1ff;
                cursor: pointer;
              "
            ></i
          ></router-link>
        </span>
        <span>
          <template>
            <el-popover placement="bottom-end" width="215" trigger="hover">
              <img src="../assets/img/top.png" width="220px" />
              <el-button
                class="el-icon-s-order btn"
                slot="reference"
                style="font-size: 13px; color: #3a8ee6"
              ></el-button>
            </el-popover>
          </template>
          <i
            class="el-icon-message-solid"
            style="font-size: 13px; color: #3a8ee6"
          ></i>
        </span>
        <span>
          <img
            src="../assets/img/u705.png"
            width="35px"
            style="position: relative; top: 10px; left: 70px"
          /> </span
        ><span
          style="
            position: relative;
            left: 420px;
            top: -32px;
            font-size: 12px;
            transform: scale(0.8);
          "
        >
          <el-row class="block-col-2">
            <el-col :span="12">
              <el-dropdown>
                <span class="el-dropdown-link">
                  彭于晏<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu placement="bottom-end" slot="dropdown">
                  <router-link to="/grsz">
                    <el-dropdown-item icon="el-icon-user-solid"
                      >个人设置</el-dropdown-item
                    >
                  </router-link>
                  <router-link to="/xtsz">
                    <el-dropdown-item icon="el-icon-s-tools"
                      >系统设置</el-dropdown-item
                    >
                  </router-link>
                  <router-link to="/">
                    <el-dropdown-item icon="el-icon-right"
                      >退出登录</el-dropdown-item
                    >
                  </router-link>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
          </el-row>
        </span>
      </div>
    </div>
    <div>
       <el-dialog
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <img src="../assets/img/2020-12-21 161722.png" width="100%"/>
</el-dialog>
    </div>
  </div>
</template>
<style scoped>
a {
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu-item,
.el-submenu__title {
  height: 48px;
  line-height: 48px;
  position: relative;
  box-sizing: border-box;
  white-space: nowrap;
  list-style: none;
}
.topR {
    height: 65px;
    position: fixed;
    padding-left: 700px;
    border: 1px solid rgb(245, 242, 242);
    width: 500px;
    background: white;
    z-index: 5;
    margin-left: 65px;
  
}
.topR input {
  border: none;
  outline: none;
  padding-left: 10px;
  background: url("../assets/img/u708.png") no-repeat;
  background-size: 100% 100%;
  opacity: 0.5;
  width: 180px;
  height: 25px;
}
.btn {
  border: none;
}
.el-dropdown-link {
  cursor: pointer;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
.el-dropdown {
  display: inline-block;
  position: relative;
  color: #606266;
  font-size: 12px;
  margin-top: 10px;
}
.el-dropdown-menu {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  margin: 15px 0;
  background-color: #fff;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.alert1 > p {
  float: left;
}

</style>
<script>
export default {
  data() {
    return {
      isCollapse: true,
       dialogVisible: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
  },
};
</script>