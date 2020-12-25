<template>
  <div id="login">
    <div>
      <img src="../assets/img/每日一句框体_u32.png" class="img2" />
      <div class="div1">
        <p>Welcome</p>
        <p>
          crm<br /><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• 较高级复杂的劳动，是这样一种劳动力<br />
          的表现，这种劳动力比较普通的劳动力需要<br />
          较高的教育费用，它的生产需要花费较多的<br />
          劳动时间。因此，具有较高的价值。<br />
          <span style="float: right">—— 马克思</span>
        </p>
      </div>
    </div>
    <div>
      <el-tabs class="tabs" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="账号密码登录" name="first">
          <p>
            <i class="el-icon-user"></i>
            <input type="text" v-model="num" placeholder="请输入您的账号" />
          </p>
          <p>
            <i class="el-icon-unlock"></i>
            <input type="password" v-model="psd" placeholder="请输入登录密码" />
          </p>
          <div class="div2">
            <input type="checkbox" /> 新弹窗体<span style="color: #5ca3ff"
              >( 如何设置 ) 获取MAC</span
            >
          </div>
          <button @click="btn" class="btn">登录</button>

          <div class="div2">
            初次使用企业微信扫码登录请绑定(<span style="color: #5ca3ff"
              >绑定说明</span
            ><img src="../assets/img/二维码_u45.png" style="float: right" />)
          </div>
        </el-tab-pane>
        <el-tab-pane class="lab1" label="企业微信登录" name="second">
          <div><img src="../assets/img/u106.png" class="img4" /></div>
          <div><img src="../assets/img/u61.png" class="img3" /></div>
          <div class="div3">
            请使用企业微信扫描二维码登录<br />
            “CRM”
          </div>
          <div class="div3">
            初次使用企业微信扫码登录请绑定(<span style="color: #5ca3ff"
              >绑定说明</span
            ><img src="../assets/img/二维码_u45.png" style="float: right" />)
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<style scoped>
#login {
  background: url("../assets/img/u63.png");
  background-size: 100% 100%;
  height: 426px;
  padding-top: 160px;
  padding-left: 336px;
}
#login > div {
  float: left;
}
.tabs i {
  font-weight: bold;
  color: #5ca3ff;
}
.tabs p {
  border-bottom: 2px solid #e4e7ed;
  padding-top: 10px;
}
.tabs input {
  border: none;
  outline: none;
  background: none;
  padding: 5px;
  font-size: 12px;
}
.tabs .img3 {
  width: 120px;
}
.tabs .img4 {
  width: 25px;
  margin: 0;
}
.btn {
  border-radius: 5px;
  width: 100%;
  font-size: 12px;
  margin-top: 22px;
  background: rgba(0, 136, 254, 1);
  color: white;
  height: 30px;
  border: none;
  outline: none;
  cursor: pointer;
}
.lab1 {
  text-align: center;
}
.tabs .div2 {
  font-size: 12px;
  transform: scale(0.9);
  padding-top: 22px;
  margin-left: -13px;
}
.tabs .div3 {
  font-size: 12px;
  transform: scale(0.9);
  margin-top: 10px;
  margin-left: -13px;
}
.img2 {
  width: 255px;
  background: url("../assets/img/每日一句框体_u32.png") no-repeat;
  background-size: 222px;
  background-position: center;
}
.div1 {
  position: absolute;
  top: 180px;
  left: 350px;
  color: white;
  font-family: "Arial Normal", "Arial";
  font-weight: 400;
  font-style: normal;
  transform: scale(0.9);
}
.div1 p:nth-of-type(1) {
  padding: 18px 0;
  font-size: 25px;
  font-weight: bold;
}
.div1 p:nth-of-type(2) {
  line-height: 20px;
  font-size: 12px;
}
.tabs {
  margin-left: -14px;
  margin-top: -34px;
  background: white;
  width: 260px;
  height: 270px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 30px rgba(51, 51, 51, 1);
}
</style>
<script>
export default {
  data() {
    return {
      activeName: "first",
      num: "",
      psd: "",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    btn() {
      if (this.num == "" || this.psd == "") {
        this.$message({
          message: "不能为空！",
          type: "warning",
        });
      } else {
        this.$router.push({
          path: "/index",
        });
      }
    },
  },
};
</script>