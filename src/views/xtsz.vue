<template>
  <div id="xtsz">
    <Header></Header>
    <el-container class="sec">
      <el-aside class="aside">
        <p class="aside1">
          <img src="../assets/img/18.png" width="30px" /> 系统设置
        </p>
        <el-menu>
          <el-submenu index="1">
            <template slot="title">
              <img src="../assets/img/19.png" /> 公司信息
            </template>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <img src="../assets/img/20.png" /> 人员与部门
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">人员与部门</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <img src="../assets/img/21.png" /> 业务与规则
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">业务与规则</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <img src="../assets/img/22.png" /> 模板与参数
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">模板与参数</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <p class="aside2"><span>|</span> 公司信息</p>
        <p class="aside3">
          <img
            src="../assets/img/8-1.png"
            width="20px"
          />你可以在这里修改公司信息。
        </p>
        <div class="aside4">
          <el-form
            :label-position="labelPosition"
            label-width="80px"
            :model="formLabelAlign"
            size="mini"
          >
            <el-form-item label="企业LOGO:">
              <p class="aside4-1">
                <img src="../assets/img/u11094.jpg" width="80px" />
                <span> <i class="el-icon-edit-outline"></i> 点击修改 </span>
              </p>
            </el-form-item>
            <el-form-item label="企业名称:">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="系统版本:">
              <el-input v-model="formLabelAlign.sex"></el-input>
            </el-form-item>
            <el-form-item label="使用时间:">
              <el-input v-model="formLabelAlign.birth"></el-input>
            </el-form-item>
            <el-form-item label="员工数量:">
              <el-input v-model="formLabelAlign.vchart"></el-input>
            </el-form-item>
            <el-form-item label="超级管理员:">
              <el-input v-model="formLabelAlign.num"></el-input>
            </el-form-item>
            <el-form-item label="短信余额:">
              <el-input v-model="formLabelAlign.bumen"></el-input>
            </el-form-item>
            <el-form-item label="系统余额:">
              <el-input v-model="formLabelAlign.zhineng"></el-input>
            </el-form-item>
          </el-form>
          <el-button
            type="primary"
            @click="onSubmit"
            size="mini"
            style="float: right"
            >保存
          </el-button>
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
  padding: 15px 0 5px 0;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  border-bottom: 2px solid rgb(61 177 255);
}
.aside1 img {
  vertical-align: middle;
}
.aside2 {
  margin-top: -2px;
  padding: 0 0 10px 20px;
  font-weight: bold;
  font-size: 16px;
  border-bottom: 2px solid rgb(61 177 255);
}
.aside2 span {
  color: rgb(61 177 255);
}
.main {
  padding: 20px 0 10px 0;
  margin-left: 4px;
  background: white;
  border: 1px solid rgb(245, 242, 242);
}
.aside3 {
  padding: 5px 12px;
}
.aside4 {
  padding: 0 520px 0 50px;
  transform: scale(0.9);
}
.aside4-1 span {
  color: gray;
  padding-left: 30px;
  cursor: pointer;
}
</style>
<style lang="scss">
#xtsz {
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
      labelPosition: "left",
      formLabelAlign: {
        name: "填充文字填充文字",
        sex: "填充文字",
        birth: "填充文字-填充文字",
        vchart: "25",
        num: "填充文字",
        bumen: "600条",
        zhineng: "6666元",
      },
    };
  },
  methods: {
    onSubmit() {
      this.$message({
        message: "保存成功！",
        type: "success",
      });
    },
  },
};
</script>