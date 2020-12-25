<template>
  <div id="find">
    <Header></Header>
    <section class="sec">
        <div class="sec-1">
          <img src="../assets/img/u1097.svg" width="60px"/>
          <img src="../assets/img/u1098.png" width="160px" style="vertical-align: bottom;"/>
        </div>
      <div class="sec1">
        <el-input
          placeholder="搜文章、任务、日程、销售跟单、联系人..."
          v-model="input3"
          class="input-with-select"
        >
          <el-button slot="append" icon="el-icon-search">搜索</el-button>
        </el-input>
      </div>
      <div>
        <template>
          <div class="sec2">
            <span style="margin-right: 20px">
              <el-checkbox
                :indeterminate="isIndeterminate"
                v-model="checkAll"
                @change="handleCheckAllChange"
                >全选</el-checkbox
              ></span
            >
            <span>
              <el-checkbox-group
                v-model="checkedCities"
                @change="handleCheckedCitiesChange"
              >
                <el-checkbox v-for="city in cities" :label="city" :key="city">{{
                  city
                }}</el-checkbox>
              </el-checkbox-group></span>
            <span>
                    <el-link icon="el-icon-search" style=" margin-left: 100px;">高级搜索</el-link>
            </span>
          </div>
        </template>
      </div>
    </section>
  </div>
</template>
<style scoped>
.sec {
  padding: 70px 10px 10px 70px;
  font-size: 12px;
}
.sec1 {
  margin: 20px 320px;
}
.sec-1 {
  margin-top: 22px;
  margin-left: 430px;
}
.sec2 {
  height: 50px;
}
::v-deep.sec2 {
  font-size: 12px;
  transform: scale(0.9);
  /* margin-top: -42px; */
  margin-left: 273px;
}
::v-deep.sec2 > span {
  float: left;
}
</style>
<style lang="scss">
#search {
  .input-with-select {
    width: 500px;
  }
  .el-input-group__append button.el-button,
  .el-input-group__append div.el-select .el-input__inner,
  .el-input-group__append div.el-select:hover .el-input__inner,
  .el-input-group__prepend button.el-button,
  .el-input-group__prepend div.el-select .el-input__inner,
  .el-input-group__prepend div.el-select:hover .el-input__inner {
    background-color: #3a8ee6;
    border: 1px solid #3a8ee6;
    color: white;
    border-radius: 0 4px 4px 0;
  }
  .el-checkbox__label {
    display: inline-block;
    padding-left: 5px;
    line-height: 19px;
    font-size: 14px;
    text-align: center;
  }
  .el-input__inner {
    background-color: #FFF;
    background-image: none;
    border: 2px solid #3a8ee6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: 12px;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
  }
  .el-checkbox {
    color: #606266;
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
    user-select: none;
    margin-right: 15px;
  }
}
</style>
<script>
import Header from "../components/Header";

const cityOptions = ["文章", "任务", "日程", "合同", "动态", "销售跟单"];

export default {
  components: {
    Header,
  },
  data() {
    return {
      checkAll: false,
      checkedCities: [],
      cities: cityOptions,
      isIndeterminate: false,
    };
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    },
  },
};
</script>